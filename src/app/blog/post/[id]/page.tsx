import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import { Suspense } from 'react';

type Params = Promise<{ id: string }>;
export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params
  const post = posts.find((post) => post.id === resolvedParams.id);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </Suspense>)
}