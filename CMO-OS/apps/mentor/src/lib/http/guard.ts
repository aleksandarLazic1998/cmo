import { NextResponse, type NextRequest } from 'next/server';
import type { ZodType } from 'zod';
import { ServiceError } from '../service';

export const MAX_BODY_BYTES = 32 * 1024;

/** Same-origin check for state-changing requests (CSRF defence for a local app). */
export function checkOrigin(req: NextRequest): string | null {
  const origin = req.headers.get('origin');
  const host = req.headers.get('host');
  if (!origin) return req.headers.get('sec-fetch-site') === 'cross-site' ? 'cross-site request' : null;
  try {
    return new URL(origin).host === host ? null : 'origin mismatch';
  } catch {
    return 'invalid origin';
  }
}

export async function readJson<T>(req: NextRequest, schema: ZodType<T>): Promise<T> {
  const originError = checkOrigin(req);
  if (originError) throw new ServiceError(403, 'Zahtev sa drugog porekla je odbijen.', 'forbidden_origin');
  if (!(req.headers.get('content-type') ?? '').includes('application/json')) throw new ServiceError(415, 'Očekuje se application/json.', 'unsupported_media');
  const text = await req.text();
  if (Buffer.byteLength(text) > MAX_BODY_BYTES) throw new ServiceError(413, 'Zahtev je prevelik.', 'too_large');
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new ServiceError(400, 'Neispravan JSON.', 'bad_json');
  }
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    throw new ServiceError(400, `Neispravan unos: ${parsed.error.issues.map((i) => i.path.join('.') || 'body').join(', ')}`, 'validation');
  }
  return parsed.data;
}

export function sessionIdOk(id: string): boolean {
  return /^[0-9a-f-]{36}$/.test(id);
}

export async function handle(fn: () => Promise<unknown> | unknown) {
  try {
    const data = await fn();
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch (e) {
    if (e instanceof ServiceError) return NextResponse.json({ error: e.message, code: e.code }, { status: e.status });
    console.error('[mentor] unexpected error', e instanceof Error ? e.message : e);
    return NextResponse.json({ error: 'Interna greška servera.', code: 'internal' }, { status: 500 });
  }
}
