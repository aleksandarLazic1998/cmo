import type { NextRequest } from 'next/server';
import { handle, readJson, sessionIdOk } from '@/lib/http/guard';
import { ServiceError, getContext, sessionView, chat } from '@/lib/service';
import { ChatBodySchema } from '@/lib/ai/schemas';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  return handle(async () => {
    const { id } = await params;
    if (!sessionIdOk(id)) throw new ServiceError(400, 'Neispravan ID sesije.');
    const body = await readJson(req, ChatBodySchema);
    const ctx = getContext();
    const out = await chat(ctx, id, body.message); return { reply: out, view: sessionView(ctx, id) };
  });
}
