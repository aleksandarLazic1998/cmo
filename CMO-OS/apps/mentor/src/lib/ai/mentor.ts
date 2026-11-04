import { MentorOutputSchema, type MentorOutput, type MentorRequest } from './schemas';
import { ProviderError, type MentorProvider, type ProviderResult } from './provider';
import { SOURCE_ALLOWLIST } from '../curriculum/lesson001';
import { MockProvider } from './mock';
import { AnthropicProvider } from './anthropic';
import type { MentorConfig } from '../config';

export function createProvider(cfg: MentorConfig): MentorProvider {
  if (cfg.provider === 'anthropic') return new AnthropicProvider(cfg);
  return new MockProvider();
}

/** Fixed-window limiter per process (single-user local app). */
export class RateLimiter {
  private hits: number[] = [];
  constructor(private readonly perMinute: number) {}
  take(now = Date.now()): boolean {
    this.hits = this.hits.filter((t) => now - t < 60_000);
    if (this.hits.length >= this.perMinute) return false;
    this.hits.push(now);
    return true;
  }
}

/**
 * Calls the provider with a hard timeout, validates the structured output,
 * drops unknown source references and caps AI rubric when injection was detected.
 */
export async function runMentor(provider: MentorProvider, req: MentorRequest, timeoutMs: number): Promise<ProviderResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const started = Date.now();
  let raw: unknown;
  try {
    raw = await Promise.race([
      provider.generate(req, controller.signal),
      new Promise((_, reject) => controller.signal.addEventListener('abort', () => reject(new ProviderError('timeout', 'AI request timed out.')))),
    ]);
  } catch (err) {
    if (err instanceof ProviderError) throw err;
    if (controller.signal.aborted) throw new ProviderError('timeout', 'AI request timed out.');
    throw new ProviderError('unavailable', 'AI provider failed.');
  } finally {
    clearTimeout(timer);
  }
  const parsed = MentorOutputSchema.safeParse(raw);
  if (!parsed.success) throw new ProviderError('invalid_output', 'AI output failed schema validation.');
  return { output: sanitize(parsed.data, req), provider: provider.name, model: provider.model, latencyMs: Date.now() - started };
}

export function sanitize(out: MentorOutput, req: MentorRequest): MentorOutput {
  const unknownRefs = out.source_refs.filter((r) => !(r in SOURCE_ALLOWLIST));
  const source_refs = out.source_refs.filter((r) => r in SOURCE_ALLOWLIST);
  let uncertainty = out.uncertainty;
  if (unknownRefs.length) uncertainty = `${uncertainty ? uncertainty + ' ' : ''}Uklonjene neproverene reference: ${unknownRefs.join(', ')}.`;
  let rubric = out.rubric;
  if (req.mode !== 'assessment') rubric = null;
  if (rubric && req.injectionFlags.length) {
    rubric = { ...rubric, concept: Math.min(rubric.concept, 14), application: Math.min(rubric.application, 14), decision: Math.min(rubric.decision, 14) };
  }
  return { ...out, source_refs, uncertainty, rubric };
}

export function providerErrorMessage(e: ProviderError): string {
  const m: Record<ProviderError['kind'], string> = {
    timeout: 'Mentor nije odgovorio na vreme. Tvoj odgovor je sačuvan; pokušaj ponovo.',
    rate_limited: 'Previše zahteva u kratkom roku. Sačekaj minut pa pokušaj ponovo.',
    auth: 'AI provider nije prihvatio kredencijale. Proveri ANTHROPIC_API_KEY na serveru.',
    bad_request: 'AI provider je odbio zahtev. Proveri MENTOR_AI_MODEL i konfiguraciju.',
    unavailable: 'AI provider trenutno nije dostupan. Determinističke provere i dalje rade.',
    refusal: 'Model je odbio da odgovori na ovaj zahtev. Preformuliši odgovor.',
    invalid_output: 'Mentor je vratio neispravan format; odgovor je odbačen. Pokušaj ponovo.',
    not_configured: 'AI provider nije konfigurisan (nedostaje ANTHROPIC_API_KEY).',
  };
  return m[e.kind];
}
