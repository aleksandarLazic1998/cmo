import type { NextRequest } from 'next/server';
import { handle, readJson, sessionIdOk } from '@/lib/http/guard';
import { ServiceError, getContext, sessionView, advance } from '@/lib/service';
import { AdvanceBodySchema } from '@/lib/ai/schemas';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  return handle(async () => {
    const { id } = await params;
    if (!sessionIdOk(id)) throw new ServiceError(400, 'Neispravan ID sesije.');
    const body = await readJson(req, AdvanceBodySchema);
    const ctx = getContext();
    advance(ctx, id, body.to); return sessionView(ctx, id);
  });
}
