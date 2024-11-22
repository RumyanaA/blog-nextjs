import { connectToDB, getPosts } from '@/app/lib/databaseConnection';
import { Button } from '@/app/ui/components/button';
import Post from '@/app/ui/components/posts/Post';
import Link from 'next/link';


export default async function Page() {
    const client = await connectToDB()
    const posts = await getPosts()
  return (
    <>
    {client && <p className='text-green-500'>Connected to database</p>}
      <h1>Posts</h1>
      <Link href="/blog/post/insert">
       <Button className="outline outline-1 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">
            New +
        </Button>
      </Link>
      {posts?.map((post) => <Post key={post.id} {...post} />)}
    </>)
}