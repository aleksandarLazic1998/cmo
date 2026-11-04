import { handle } from '@/lib/http/guard';
import { getContext } from '@/lib/service';
import { publicConfig } from '@/lib/config';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET() {
  return handle(() => ({ ok: true, ...publicConfig(getContext().cfg) }));
}
