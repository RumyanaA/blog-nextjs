import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default async function Page({params}:any) {
  const resolvedParams = await params
  const post = posts.find((post) => post.id === resolvedParams.id);
  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </>)
}