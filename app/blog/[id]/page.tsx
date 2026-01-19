import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/header"; // ⚠️ Check this file for the 'T' key error
import Footer from "@/components/footer"; // ⚠️ Check this file for the 'T' key error
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Ensure dynamic rendering for database content
export const dynamic = "force-dynamic";

// ─── HELPER: STRIP HTML TAGS ───
// Removes <p>, <b>, etc. from strings to make them safe for Meta Tags
const stripHtml = (html: string | null | undefined) => {
  if (!html) return "";

  return (
    html
      // remove all HTML tags
      .replace(/<[^>]*>/g, "")
      // remove &nbsp; entities
      .replace(/&nbsp;/gi, " ")
      // normalize whitespace
      .replace(/\s+/g, " ")
      .trim()
  );
};

// =========================================================
// 1. GENERATE METADATA (Server Side SEO)
// =========================================================
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const postId = parseInt(id);

  if (isNaN(postId)) return { title: "Post Not Found" };

  // Fetch Post WITH SEO Relation
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { seo: true },
  });

  if (!post) return { title: "Post Not Found" };

  // --- Fallback Logic ---
  const title = post.seo?.metaTitle || stripHtml(post.title);
  const description =
    post.seo?.metaDescription ||
    stripHtml(post.excerpt) ||
    stripHtml(post.title);
  const image = post.seo?.ogImage || post.image || "/default-college-logo.png";

  return {
    title: title,
    description: description,
    alternates: {
      canonical: post.seo?.canonicalUrl || `/blog/${postId}`,
    },
    robots: {
      index: !post.seo?.noIndex,
      follow: !post.seo?.noFollow,
    },
    openGraph: {
      title: post.seo?.ogTitle || title,
      description: post.seo?.ogDescription || description,
      type: (post.seo?.ogType as any) || "article",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: (post.seo?.twitterCard as any) || "summary_large_image",
      title: post.seo?.twitterTitle || title,
      description: description,
      images: [image],
    },
  };
}

// =========================================================
// 2. MAIN PAGE COMPONENT
// =========================================================
export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const postId = parseInt(id);

  if (isNaN(postId)) {
    notFound();
  }

  // Fetch Post WITH SEO Relation
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { seo: true },
  });

  if (!post) {
    notFound();
  }

  // --- Construct JSON-LD (Structured Data) ---
  const jsonLd = post.seo?.structuredData || {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: stripHtml(post.title),
    image: post.image ? [post.image] : [],
    datePublished: post.date.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      "@type": "Person",
      name: post.author || "Yeti College",
    },
    description: stripHtml(post.excerpt),
  };

  const formattedDate = post.date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      {/* INJECT JSON-LD SCRIPT */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="min-h-screen bg-white pb-20">
        {/* HERO IMAGE */}
        <div className="relative w-full h-[50vh] md:h-[60vh] bg-zinc-900">
          {post.image && (
            <img
              src={post.image}
              alt={stripHtml(post.title)}
              className="w-full h-full object-cover opacity-80"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute top-24 left-4 md:left-8 z-20">
            <Link
              href="/blog"
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
              {stripHtml(post.title)}
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
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-zinc-400" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-b-[2.5rem] p-8 md:p-12 text-lg md:text-xl leading-relaxed text-zinc-700 shadow-xl space-y-8">
            {post.excerpt && (
              <p className="font-serif text-2xl md:text-3xl leading-normal text-zinc-900 italic border-l-4 border-zinc-900 pl-6 my-8">
                {stripHtml(post.excerpt)}
              </p>
            )}

            {/* CONTENT RENDERER */}
            {post.content ? (
              <div
                className="prose prose-lg prose-zinc max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="space-y-6 text-zinc-600">
                <p>No content available.</p>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
