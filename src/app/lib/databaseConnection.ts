import { createClient, sql } from "@vercel/postgres";

export async function connectToDB() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log("connected");
      return client;
    }
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
}

export async function getPosts() {
  try {
    const data = await sql`SELECT * FROM posts`;
    return data.rows;
  } catch (error) {
    console.error("Error while getting posts: ", error);
  }
}

export async function getPost(id: string) {
  try {
    const data = await sql`SELECT * FROM posts WHERE id=${id}`;
    return data.rows[0];
  } catch (error) {
    console.error("Error while getting posts: ", error);
  }
}
