import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const postId = parseInt(id);

  if (isNaN(postId)) {
    notFound();
  }

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  const formattedDate = post.date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pb-20">
        {/* HERO IMAGE */}
        <div className="relative w-full h-[50vh] md:h-[60vh] bg-zinc-900">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute top-24 left-4 md:left-8 z-20">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>

        {/* CONTENT CARD */}
        <article className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
          <div className="bg-white rounded-t-[2.5rem] p-8 md:p-12 shadow-xl border-b border-zinc-100">
            <div className="flex flex-wrap gap-3 mb-6">
              <span
                className={`px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-wider ${
                  post.accent || "bg-blue-600"
                }`}
              >
                {post.category}
              </span>
              {post.trending && (
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-red-100 text-red-600 uppercase tracking-wider">
                  Trending
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-[1.1] mb-8 tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 md:gap-8 text-zinc-500 text-sm md:text-base font-medium border-t border-zinc-100 pt-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-zinc-400" />
                <span className="text-zinc-900">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-zinc-400" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-zinc-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-b-[2.5rem] p-8 md:p-12 text-lg md:text-xl leading-relaxed text-zinc-700 shadow-xl space-y-8">
            <p className="font-serif text-2xl md:text-3xl leading-normal text-zinc-900 italic border-l-4 border-zinc-900 pl-6 my-8">
              {post.excerpt}
            </p>

            <div className="space-y-6 text-zinc-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h2 className="text-2xl font-bold text-zinc-900 mt-8">
                Key Insights
              </h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
