import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import ShareButtons from "@/components/share-buttons";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

// ─── HELPER: STRIP HTML TAGS ───
const stripHtml = (html: string | null | undefined) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
};

// =========================================================
// 1. GENERATE METADATA
// =========================================================
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const postId = parseInt(id);

  if (isNaN(postId)) return { title: "Post Not Found" };

  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { seo: true },
  });

  if (!post) return { title: "Post Not Found" };

  const baseTitle = stripHtml(post.title);
  const baseExcerpt = stripHtml(post.excerpt) || baseTitle;
  const baseImage = post.image || "/default-college-logo.png";

  const metaTitle = post?.seo?.metaTitle
    ? `Yeti Int'l College | ${post.seo.metaTitle}`
    : "Yeti Int'l College";

  const metaDescription = post.seo?.metaDescription || baseExcerpt;
  const ogTitle = post.seo?.ogTitle || metaTitle;
  const ogDescription = post.seo?.ogDescription || metaDescription;
  const ogImage = post.seo?.ogImage || baseImage;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: post.seo?.canonicalUrl || `/blog/${postId}`,
    },
    robots: {
      index: !post.seo?.noIndex,
      follow: !post.seo?.noFollow,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: (post.seo?.ogType as any) || "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: (post.seo?.twitterCard as any) || "summary_large_image",
      title: post.seo?.twitterTitle || ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

// =========================================================
// 2. MAIN PAGE COMPONENT
// =========================================================
export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const postId = parseInt(id);

  if (isNaN(postId)) notFound();

  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { seo: true },
  });

  if (!post) notFound();

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://yeticollege.edu.np";
  const postUrl = `${baseUrl}/blog/${postId}`;

  const jsonLd = post.seo?.structuredData || {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: stripHtml(post.title),
    image: post.image ? [post.image] : [],
    datePublished: post.date.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: { "@type": "Person", name: post.author || "Yeti College" },
    description: stripHtml(post.excerpt),
  };

  const formattedDate = post.date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
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
            {/* Header Meta */}
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

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-zinc-100 pt-8">
              <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-sm md:text-base font-medium">
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
              <div className="md:ml-auto">
                <ShareButtons title={stripHtml(post.title)} url={postUrl} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-b-[2.5rem] p-8 md:p-12 text-zinc-800 shadow-xl">
            {/* ─── IMPROVED EXCERPT UI ─── */}
            {post.excerpt && (
              <div className="mb-10 pb-10 border-b border-zinc-100">
                <p className="text-xl md:text-2xl font-normal leading-relaxed text-zinc-600">
                  {stripHtml(post.excerpt)}
                </p>
              </div>
            )}

            {/* ─── CONTENT RENDERER ─── */}
            {post.content ? (
              <div
                className="
                  /* Base Layout */
                  w-full max-w-none 
                  
                  /* Fixed Line Height (was leading-4, now leading-8 for readability) */
                  leading-8 

                  /* --- HEADINGS --- */
                  /* Force sizes to override browser resets */
                  [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:text-zinc-900 [&_h1]:mb-6 [&_h1]:mt-12 [&_h1]:leading-tight
                  [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-zinc-900 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:leading-tight
                  [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-zinc-900 [&_h3]:mb-3 [&_h3]:mt-8
                  [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-zinc-900 [&_h4]:mb-2 [&_h4]:mt-6

                  /* --- PARAGRAPHS --- */
                  /* Ensure proper spacing between blocks of text */
                  [&_p]:text-lg [&_p]:mb-6 [&_p]:text-zinc-700

                  /* --- LISTS --- */
                  /* Force bullets and numbers to appear with padding */
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-2
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:space-y-2
                  [&_li]:pl-1

                  /* --- FORMATTING UTILS --- */
                  [&_strong]:font-bold [&_strong]:text-zinc-900
                  [&_b]:font-bold [&_b]:text-zinc-900
                  
                  /* Blockquotes */
                  [&_blockquote]:border-l-4 [&_blockquote]:border-zinc-300 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-zinc-600 [&_blockquote]:my-10 [&_blockquote]:text-xl

                  /* Links */
                  [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-blue-800 hover:[&_a]:decoration-2

                  /* Images */
                  [&_img]:rounded-2xl [&_img]:shadow-lg [&_img]:w-full [&_img]:object-cover [&_img]:my-10
                  
                  /* Tables */
                  [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-left
                  [&_th]:border-b-2 [&_th]:border-zinc-200 [&_th]:py-4 [&_th]:font-bold
                  [&_td]:border-b [&_td]:border-zinc-100 [&_td]:py-4

                  /* Overflow handling */
                  break-words overflow-hidden
                "
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
