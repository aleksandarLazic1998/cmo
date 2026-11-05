import { handle } from '@/lib/http/guard';
import { dashboard, getContext } from '@/lib/service';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET() {
  return handle(() => dashboard(getContext()));
}
