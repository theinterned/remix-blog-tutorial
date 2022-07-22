type Post = {
  slug: string;
  title: string;
};

export async function getPosts(): Promise<Post[]> {
  return [
    { slug: "my-first-post", title: "My first post" },
    { slug: "90s-mixtape", title: "A Mixtape I made just for you" },
  ];
}
