"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Twitter,
  ChevronRight,
  Share2,
  User,
  Linkedin,
  Check,
  Link as LinkIcon,
  Sparkles,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

// --- Types ---
type ArticleBlock = {
  type: "paragraph" | "heading";
  text: string;
};

type Article = {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author?: { name: string; role: string };
  image: string;
  excerpt?: string;
  content?: ArticleBlock[];
};

// --- Helper: Content Generator (Simulates AI) ---
const generateContent = (title: string, category: string): ArticleBlock[] => {
  const intros = [
    `In the rapidly evolving world of ${category}, "${title}" has become a central topic of discussion.`,
    `When we look at the future of ${category}, it's impossible to ignore the impact of this new development.`,
    `Many experts have debated the significance of this trend, but one thing is clear: it's changing the game.`,
  ];

  const points = [
    "One significant aspect to consider is the efficiency it brings to modern workflows.",
    "Furthermore, early adopters have reported a significant increase in productivity.",
    "However, challenges remain, particularly regarding scalability and implementation.",
    "Data shows that those who adapt early tend to see a 40% improvement in outcomes.",
    "The integration of these systems is seamless, provided you have the right infrastructure.",
  ];

  const conclusions = [
    "In conclusion, while we are still in the early stages, the potential is undeniable.",
    "As we move forward, keeping an eye on these developments will be crucial for success.",
    "Ultimately, the choice relies on your specific needs, but the evidence points towards a positive shift.",
  ];

  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

  return [
    {
      type: "paragraph",
      text: `${pick(
        intros
      )} This article explores why this matters now more than ever.`,
    },
    { type: "heading", text: "Why This Matters" },
    { type: "paragraph", text: `${shuffle(points).slice(0, 3).join(" ")}` },
    { type: "heading", text: "Key Takeaways" },
    {
      type: "paragraph",
      text: `${shuffle(points)
        .slice(0, 2)
        .join(" ")} This is a critical factor for long-term growth.`,
    },
    { type: "paragraph", text: pick(conclusions) },
  ];
};

// --- Sub-component: Typewriter Block ---
const TypewriterBlock = ({
  text,
  delay = 0,
  onComplete,
}: {
  text: string;
  delay?: number;
  onComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const started = useRef(false);

  useEffect(() => {
    setDisplayedText("");
    started.current = false;
  }, [text]);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const words = text.split(" ");
    let index = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < words.length) {
          setDisplayedText((prev) =>
            prev ? prev + " " + words[index] : words[index]
          );
          index++;
        } else {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, 30);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, onComplete]);

  return <>{displayedText}</>;
};

const ContentBlock = ({
  block,
  isTyping,
}: {
  block: ArticleBlock;
  isTyping?: boolean;
}) => {
  if (block.type === "paragraph") {
    return (
      <p className="text-lg md:text-xl text-zinc-700 leading-[1.8] mb-8 font-medium opacity-90 min-h-[1.8em]">
        {isTyping ? <TypewriterBlock text={block.text} /> : block.text}
      </p>
    );
  }
  if (block.type === "heading") {
    return (
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mt-12 mb-6 min-h-[1.5em]">
        {isTyping ? <TypewriterBlock text={block.text} /> : block.text}
      </h2>
    );
  }
  return null;
};

// --- Helper: Share Component (FIXED) ---
const ShareButtons = ({
  title,
  layout = "vertical",
}: {
  title: string;
  layout?: "vertical" | "horizontal";
}) => {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    if (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function"
    ) {
      setCanNativeShare(true);
    }
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "native":
        navigator.share({ title, url }).catch(console.error);
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const containerClass =
    layout === "vertical"
      ? "flex flex-col items-center gap-4 p-4 rounded-full bg-white/40 backdrop-blur-md border border-white/40 shadow-sm"
      : "flex items-center gap-3 p-3 rounded-full bg-white/40 backdrop-blur-md border border-white/40 shadow-sm w-fit mx-auto";

  const btnClass =
    "w-10 h-10 rounded-full bg-white/60 hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center border border-white/50 shadow-sm text-zinc-700";

  return (
    <div className={containerClass}>
      {/* 
        FIX: Only show the static label if we are vertical AND 
        Native Share is NOT available. If Native Share is available, 
        that button acts as the top icon, preventing duplication.
      */}
      {layout === "vertical" && !canNativeShare && (
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-400 mb-2 cursor-default">
          <Share2 className="w-4 h-4" />
        </div>
      )}

      {canNativeShare && (
        <button
          onClick={() => handleShare("native")}
          className={btnClass}
          title="Share via..."
        >
          <Share2 className="w-4 h-4" />
        </button>
      )}

      <button onClick={() => handleShare("facebook")} className={btnClass}>
        <Facebook className="w-4 h-4" />
      </button>
      <button onClick={() => handleShare("twitter")} className={btnClass}>
        <Twitter className="w-4 h-4" />
      </button>
      <button onClick={() => handleShare("linkedin")} className={btnClass}>
        <Linkedin className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleShare("copy")}
        className={`${btnClass} ${
          copied ? "bg-green-100 text-green-600 border-green-200" : ""
        }`}
      >
        {copied ? (
          <Check className="w-4 h-4" />
        ) : (
          <LinkIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

// --- Main Page ---
export default function BlogDetailsPage() {
  const params = useParams();
  const id = Number(params?.id);

  const [articles, setArticles] = useState<Article[]>([]);
  const [post, setPost] = useState<Article | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [generatedContent, setGeneratedContent] = useState<ArticleBlock[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setLoading(true);
    setPost(null);
    setGeneratedContent([]);
    setIsGenerating(false);

    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => {
        const all = data.posts || [];
        setArticles(all);
        const found = all.find((a: Article) => a.id === id) || null;

        if (found && (!found.content || found.content.length === 0)) {
          setIsGenerating(true);
          setTimeout(() => {
            const newContent = generateContent(found.title, found.category);
            setGeneratedContent(newContent);
          }, 800);
        }

        setPost(found);
      })
      .finally(() => setLoading(false));
  }, [id]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const total = window.scrollY || document.documentElement.scrollTop;
  //     const height =
  //       document.documentElement.scrollHeight -
  //       document.documentElement.clientHeight;
  //     if (height > 0) {
  //       setScrollProgress(total / height);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-zinc-300 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F5F5F7] flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">
          Article not found
        </h1>
        <Link href="/blog">
          <Button className="rounded-full px-8">Back to blog</Button>
        </Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.id !== post.id).slice(0, 3);
  const displayContent =
    post.content && post.content.length > 0 ? post.content : generatedContent;

  return (
    <>
      <Header />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 z-[60] pointer-events-none">
        <div className="w-full h-full bg-white/20 backdrop-blur-sm absolute top-0 left-0" />
        <div
          className="bg-black h-full relative z-10 rounded-r-full transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <main className="min-h-screen bg-gradient-to-b from-[#F2F4F6] to-[#EBEFF2] text-zinc-900 pb-24 selection:bg-zinc-900 selection:text-white">
        <section className="relative pt-24 pb-12 px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-xs font-bold uppercase tracking-widest text-zinc-500">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 opacity-50" />
              <Link href="/blog" className="hover:text-black transition-colors">
                blog
              </Link>
              <ChevronRight className="w-3 h-3 opacity-50" />
              <span className="text-black">{post.category}</span>
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 mb-10 leading-[0.95]">
              {post.title}
            </h1>

            <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 px-8 py-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg shadow-zinc-200/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center overflow-hidden border border-white">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold leading-none text-zinc-900">
                    {post.author?.name || "AI Editor"}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">
                    {post.author?.role || "Auto-Generated"}
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-zinc-300/50" />

              <div className="flex gap-8 text-xs font-medium text-zinc-600">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-white/50">
                    <Calendar className="w-3 h-3" />
                  </div>
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-white/50">
                    <Clock className="w-3 h-3" />
                  </div>
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="mt-8 lg:hidden">
              <ShareButtons title={post.title} layout="horizontal" />
            </div>
          </div>

          <div className="mt-16 w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] md:rounded-[3rem] relative shadow-2xl shadow-zinc-200 border-[6px] border-white/40">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {isGenerating && (
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 animate-pulse">
                <Sparkles className="w-3 h-3 text-yellow-400" />
                <span>AI Writing Post...</span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32">
              <ShareButtons title={post.title} layout="vertical" />
            </div>
          </aside>

          <article className="lg:col-span-7">
            <div className="prose prose-lg max-w-none">
              {displayContent.length > 0 ? (
                displayContent.map((block: ArticleBlock, i: number) => (
                  <ContentBlock
                    key={`${i}-${block.text.substring(0, 10)}`}
                    block={block}
                    isTyping={isGenerating}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 opacity-50">
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mb-4" />
                  <p>Analyzing topic...</p>
                </div>
              )}
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/50 flex justify-between items-center hover:bg-white/80 transition-all cursor-pointer group">
              <Link
                href="/blog"
                className="flex items-center gap-3 font-bold text-zinc-800 group-hover:translate-x-2 transition-transform"
              >
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span>Back to all blog</span>
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-black" />
              <h3 className="font-bold text-lg tracking-tight">More to read</h3>
            </div>

            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.id}`}
                className="block group relative"
              >
                <div className="p-4 rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 hover:bg-white/80 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
                  <div className="h-40 w-full rounded-2xl overflow-hidden mb-4 relative">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold uppercase">
                      {rel.category}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg leading-tight tracking-tight text-zinc-800 mb-2">
                    {rel.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                    <span>{rel.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
