import Post from '@/app/ui/components/posts/Post';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getPost } from '@/app/lib/databaseConnection';

type Params = Promise<{ id: string }>;
export default async function Page({ params }: { params: Params }) {
  
  const resolvedParams = await params 
  const post = await getPost(resolvedParams.id)
  if(!post){
    notFound()
  }
  // const post = posts.find((post) => post.id === resolvedParams.id);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </Suspense>)
}