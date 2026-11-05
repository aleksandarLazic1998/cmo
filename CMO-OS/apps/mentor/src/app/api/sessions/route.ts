import type { NextRequest } from 'next/server';
import { z } from 'zod';
import { handle, readJson } from '@/lib/http/guard';
import { getContext, sessionView, startOrResume } from '@/lib/service';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const Body = z.object({ lessonId: z.string().regex(/^\d{3,4}$/) }).strict();
export async function POST(req: NextRequest) {
  return handle(async () => {
    const { lessonId } = await readJson(req, Body);
    const ctx = getContext();
    const s = startOrResume(ctx, lessonId);
    return sessionView(ctx, s.id);
  });
}
