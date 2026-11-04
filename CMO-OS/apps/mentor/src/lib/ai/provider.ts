import type { MentorOutput, MentorRequest } from './schemas';

export class ProviderError extends Error {
  constructor(
    public readonly kind: 'timeout' | 'rate_limited' | 'auth' | 'bad_request' | 'unavailable' | 'refusal' | 'invalid_output' | 'not_configured',
    message: string,
  ) {
    super(message);
    this.name = 'ProviderError';
  }
}

export interface MentorProvider {
  readonly name: string;
  readonly model: string;
  generate(req: MentorRequest, signal: AbortSignal): Promise<unknown>;
}

export type ProviderResult = { output: MentorOutput; provider: string; model: string; latencyMs: number };
