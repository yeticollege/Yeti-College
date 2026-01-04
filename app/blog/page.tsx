import { prisma } from "@/lib/prisma";
import BlogClient, { BlogPost } from "./blog-client";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  // 1. Fetch Featured Post
  const featured = await prisma.post.findFirst({
    where: { featured: true },
  });

  // 2. Fetch Trending Posts
  const trending = await prisma.post.findMany({
    where: { trending: true },
    orderBy: { date: "desc" },
    take: 8,
  });

  // 3. Fetch All Posts (excluding featured to prevent duplicate hero)
  const posts = await prisma.post.findMany({
    where: { featured: false },
    orderBy: { date: "desc" },
  });

  // Helper to safely format data
  const formatPost = (post: any): BlogPost => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt || "",
    author: post.author,
    // Convert Date to string for client component
    date: post.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    readTime: post.readTime,
    category: post.category,
    image: post.image,
    accent: post.accent || "bg-orange-500",
  });

  return (
    <BlogClient
      featuredPost={featured ? formatPost(featured) : null}
      trendingPosts={trending.map(formatPost)}
      allPosts={posts.map(formatPost)}
    />
  );
}
