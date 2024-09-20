import { Posts } from "./posts";
import { getPosts } from "./get-posts";

export const revalidate = 60;

export default async function Home() {

  return (
    <h1>
      Currently cooking, kindly check back later.
    </h1>
  )
  const posts = await getPosts();
  return <Posts posts={posts} />;
}
