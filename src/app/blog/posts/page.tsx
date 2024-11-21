import { connectToDB } from '@/app/lib/databaseConnection';
import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default async function Page() {
    const client = await connectToDB()
  return (
    <>
    {client && <p className='text-green-500'>Connected to database</p>}
      <h1>Posts</h1>
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>)
}