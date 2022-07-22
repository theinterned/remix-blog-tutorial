import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

type Post = {
  slug: string;
  title: string;
};

type LoaderData = {
  posts: Post[];
};

export const loader = async () => {
  return json<LoaderData>({
    posts: [
      { slug: "my-first-post", title: "My first post" },
      { slug: "90s-mixtape", title: "A Mixtape I made just for you" },
    ],
  });
};
export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;
  console.log(posts);

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
