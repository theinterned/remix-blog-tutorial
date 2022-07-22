import { prisma } from "~/db.server";

type Post = {
  slug: string;
  title: string;
};

export async function getPosts(): Promise<Post[]> {
  return prisma.post.findMany();
}
