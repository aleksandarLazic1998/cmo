import path from 'node:path';
import fs from 'node:fs';
import { z } from 'zod';

const boolish = z
  .enum(['true', 'false', '1', '0', 'yes', 'no'])
  .default('false')
  .transform((v) => v === 'true' || v === '1' || v === 'yes');

const EnvSchema = z.object({
  MENTOR_AI_PROVIDER: z.enum(['anthropic', 'mock']).default('mock'),
  ANTHROPIC_API_KEY: z.string().optional(),
  MENTOR_AI_MODEL: z.string().regex(/^[a-z0-9][a-z0-9.\-]{2,63}$/).default('claude-opus-5-5'),
  MENTOR_AI_EFFORT: z.enum(['low', 'medium', 'high', 'xhigh', 'max']).default('medium'),
  MENTOR_AI_TIMEOUT_MS: z.coerce.number().int().min(1000).max(600000).default(60000),
  MENTOR_AI_MAX_TOKENS: z.coerce.number().int().min(256).max(64000).default(16000),
  MENTOR_AI_FALLBACKS: z.enum(['default', 'off']).default('default'),
  MENTOR_AI_RATE_LIMIT_PER_MIN: z.coerce.number().int().min(1).max(600).default(20),
  MENTOR_DB_PATH: z.string().default('./data/mentor.db'),
  MENTOR_CANONICAL_WRITES: boolish,
  CMO_OS_ROOT: z.string().optional(),
});

export type MentorConfig = {
  provider: 'anthropic' | 'mock';
  apiKey: string | undefined;
  model: string;
  effort: 'low' | 'medium' | 'high' | 'xhigh' | 'max';
  timeoutMs: number;
  maxTokens: number;
  fallbacks: 'default' | 'off';
  rateLimitPerMin: number;
  dbPath: string;
  canonicalWrites: boolean;
  root: string;
};

function findRoot(start: string): string {
  let dir = path.resolve(start);
  for (let i = 0; i < 8; i++) {
    if (fs.existsSync(path.join(dir, 'AUTHORITY.md')) && fs.existsSync(path.join(dir, '02_Lessons'))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error('CMO-OS root (folder with AUTHORITY.md) not found; set CMO_OS_ROOT.');
}

export function loadConfig(env: Record<string, string | undefined> = process.env): MentorConfig {
  const clean = Object.fromEntries(Object.entries(env).filter(([, v]) => v !== undefined && v !== ''));
  const parsed = EnvSchema.safeParse(clean);
  if (!parsed.success) {
    const fields = parsed.error.issues.map((i) => i.path.join('.')).join(', ');
    throw new Error(`Invalid mentor configuration: ${fields}`);
  }
  const e = parsed.data;
  const root = findRoot(e.CMO_OS_ROOT ?? process.cwd());
  return {
    provider: e.MENTOR_AI_PROVIDER,
    apiKey: e.ANTHROPIC_API_KEY,
    model: e.MENTOR_AI_MODEL,
    effort: e.MENTOR_AI_EFFORT,
    timeoutMs: e.MENTOR_AI_TIMEOUT_MS,
    maxTokens: e.MENTOR_AI_MAX_TOKENS,
    fallbacks: e.MENTOR_AI_FALLBACKS,
    rateLimitPerMin: e.MENTOR_AI_RATE_LIMIT_PER_MIN,
    dbPath: path.resolve(process.cwd(), e.MENTOR_DB_PATH),
    canonicalWrites: e.MENTOR_CANONICAL_WRITES,
    root,
  };
}

/** Public, secret-free view of the configuration for UI/status endpoints. */
export function publicConfig(c: MentorConfig) {
  return {
    provider: c.provider,
    model: c.provider === 'anthropic' ? c.model : 'mock',
    apiKeyConfigured: Boolean(c.apiKey),
    canonicalWrites: c.canonicalWrites,
  };
}
