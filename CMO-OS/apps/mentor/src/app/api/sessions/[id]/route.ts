import type { NextRequest } from 'next/server';
import { handle, sessionIdOk } from '@/lib/http/guard';
import { ServiceError, getContext, sessionView } from '@/lib/service';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  return handle(async () => {
    const { id } = await params;
    if (!sessionIdOk(id)) throw new ServiceError(400, 'Neispravan ID sesije.');
    return sessionView(getContext(), id);
  });
}
