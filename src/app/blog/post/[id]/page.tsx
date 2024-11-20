import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

type tParams = Promise<{ slug: string[] }>;

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;
  const postID = slug[1];
  const post = posts.find((post) => post.id === postID);
  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>)
}