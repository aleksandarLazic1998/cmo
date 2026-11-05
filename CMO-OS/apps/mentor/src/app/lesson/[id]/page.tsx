import { LessonClient } from '@/components/LessonClient';
export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <LessonClient lessonId={id} />;
}
