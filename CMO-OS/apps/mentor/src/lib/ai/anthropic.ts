import Anthropic from '@anthropic-ai/sdk';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { ProviderError, type MentorProvider } from './provider';
import { MentorOutputSchema, type MentorRequest } from './schemas';
import { buildSystemPrompt, buildUserMessage } from './prompt';
import type { MentorConfig } from '../config';

/** Claude provider. Server-side only; the API key never leaves the server process. */
export class AnthropicProvider implements MentorProvider {
  readonly name = 'anthropic';
  readonly model: string;
  private readonly client: Anthropic;

  constructor(private readonly cfg: MentorConfig) {
    if (!cfg.apiKey) throw new ProviderError('not_configured', 'ANTHROPIC_API_KEY is not set');
    this.model = cfg.model;
    this.client = new Anthropic({ apiKey: cfg.apiKey, timeout: cfg.timeoutMs, maxRetries: 1 });
  }

  async generate(req: MentorRequest, signal: AbortSignal): Promise<unknown> {
    const fallbacks = this.cfg.fallbacks === 'default';
    try {
      const response = await this.client.beta.messages.parse(
        {
          model: this.model,
          max_tokens: this.cfg.maxTokens,
          thinking: { type: 'adaptive' },
          output_config: { effort: this.cfg.effort, format: betaZodOutputFormat(MentorOutputSchema) },
          ...(fallbacks ? { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' as const } : {}),
          system: [{ type: 'text', text: buildSystemPrompt(req.personaReference, req.lessonContext), cache_control: { type: 'ephemeral' } }],
          messages: [{ role: 'user', content: buildUserMessage(req) }],
        },
        { signal, timeout: this.cfg.timeoutMs },
      );
      if (response.stop_reason === 'refusal') throw new ProviderError('refusal', 'The model declined this request.');
      if (response.stop_reason === 'max_tokens') throw new ProviderError('invalid_output', 'Output truncated at max_tokens.');
      if (!response.parsed_output) throw new ProviderError('invalid_output', 'Structured output missing.');
      return response.parsed_output;
    } catch (err) {
      throw mapError(err);
    }
  }
}

function mapError(err: unknown): ProviderError {
  if (err instanceof ProviderError) return err;
  if (err instanceof Anthropic.APIConnectionTimeoutError) return new ProviderError('timeout', 'AI request timed out.');
  if (err instanceof Anthropic.AuthenticationError || err instanceof Anthropic.PermissionDeniedError) return new ProviderError('auth', 'AI provider rejected the credentials.');
  if (err instanceof Anthropic.RateLimitError) return new ProviderError('rate_limited', 'AI provider rate limit reached.');
  if (err instanceof Anthropic.BadRequestError || err instanceof Anthropic.NotFoundError) return new ProviderError('bad_request', 'AI provider rejected the request (check model id/configuration).');
  if (err instanceof Anthropic.APIUserAbortError) return new ProviderError('timeout', 'AI request aborted.');
  if (err instanceof Anthropic.APIError) return new ProviderError('unavailable', `AI provider error ${err.status ?? ''}`.trim());
  if (err instanceof Error && /parse|json|zod/i.test(err.message)) return new ProviderError('invalid_output', 'AI output failed validation.');
  return new ProviderError('unavailable', 'AI provider unavailable.');
}
