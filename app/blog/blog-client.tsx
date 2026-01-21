"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  Clock,
  Hash,
  ChevronRight,
  ChevronLeft,
  Mail,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Define the shape of the data prop
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  accent?: string;
}

interface BlogClientProps {
  featuredPost: BlogPost | null;
  trendingPosts: BlogPost[];
  allPosts: BlogPost[];
}

export const categories = [
  "All",
  "Design",
  "Technology",
  "Culture",
  "Architecture",
  "Sustainability",
  "Business",
  "AI",
  "World",
  "Health",
];

const ITEMS_PER_PAGE = 6;

// ─── HELPER: STRIP HTML TAGS & ENTITIES ───
const stripHtml = (html: string) => {
  if (typeof html !== "string") return "";

  return html
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&nbsp;/gi, " ") // Replace &nbsp; with a normal space
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();
};

export default function BlogClient({
  featuredPost,
  trendingPosts,
  allPosts,
}: BlogClientProps) {
  // FILTER STATE
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to Page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // LIVE SEARCH + CATEGORY FILTER
  const filteredPosts = useMemo(() => {
    return allPosts
      .filter((post) =>
        activeCategory === "All" ? true : post.category === activeCategory,
      )
      .filter((post) => {
        const cleanQuery = searchQuery.toLowerCase();
        const cleanTitle = stripHtml(post.title).toLowerCase();
        const cleanExcerpt = stripHtml(post.excerpt).toLowerCase();

        return (
          cleanTitle.includes(cleanQuery) || cleanExcerpt.includes(cleanQuery)
        );
      });
  }, [activeCategory, searchQuery, allPosts]);

  // PAGINATION LOGIC
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Helper to handle smooth scroll on page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optional: Scroll to top of the grid
    const gridElement = document.getElementById("article-grid");
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper to generate page numbers array (simple version)
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      // Show first, last, current, and neighbors
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        pages.push("...");
      }
    }
    // Deduplicate ellipsis if adjacent logic creates doubles (simple set fix)
    return Array.from(new Set(pages));
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#F2F2F2] text-zinc-900 py-12 px-4 md:px-8 selection:bg-black selection:text-white font-sans">
        <div className="max-w-[1400px] mx-auto space-y-12">
          {/* ─────── TOP SECTION ─────── */}
          <div className="flex flex-col md:flex-row justify-between items-end pb-8 border-b border-zinc-300">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                Editorial
              </h5>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                The
                <br />
                Journal.
              </h1>
            </div>

            {/* SEARCH */}
            <div className="mt-8 md:mt-0 w-full md:w-auto">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 bg-white pl-12 pr-4 py-4 rounded-2xl border border-zinc-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              </div>
            </div>
          </div>

          {/* ─────── FEATURED ─────── */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] overflow-hidden bg-zinc-900 text-white shadow-xl"
            >
              <Link href={`blog/${featuredPost.id}`}>
                <div className="flex flex-col md:flex-row min-h-[480px] group cursor-pointer">
                  {/* IMAGE */}
                  <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                    <motion.img
                      src={featuredPost.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt={stripHtml(featuredPost.title)}
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          featuredPost.accent || "bg-orange-500"
                        }`}
                      />
                      {featuredPost.category}
                      <span>•</span>
                      {featuredPost.date}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 group-hover:text-zinc-300 transition-colors">
                      {stripHtml(featuredPost.title)}
                    </h2>

                    <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
                      {stripHtml(featuredPost.excerpt)}
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold">
                        Read Full Article
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* ─────── BODY GRID ─────── */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            id="article-grid"
          >
            {/* ─── SIDEBAR ─── */}
            <div className="lg:col-span-3 flex flex-col gap-10">
              {/* CATEGORIES */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-200">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 uppercase">
                  <Hash className="w-4 h-4" /> Categories
                </h3>

                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex justify-between items-center ${
                        activeCategory === cat
                          ? "bg-zinc-900 text-white"
                          : "bg-zinc-50 text-zinc-700 hover:bg-zinc-100 hover:pl-6"
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* TRENDING */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                  Trending
                </h3>
                <ul className="space-y-6">
                  {trendingPosts.map((item, idx) => (
                    <Link href={`blog/${item.id}`} key={item.id}>
                      <li className="group cursor-pointer mb-6">
                        <span className="text-xs font-bold text-zinc-400 mr-3">
                          0{idx + 1}
                        </span>
                        <span className="text-lg font-semibold text-zinc-900 group-hover:underline underline-offset-4 decoration-2">
                          {stripHtml(item.title)}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>

              {/* NEWSLETTER */}
              <div className="bg-blue-600 text-white p-8 rounded-3xl">
                <Mail className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Weekly Digest</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get curated design blog in your inbox.
                </p>

                <div className="flex gap-2">
                  <input
                    placeholder="Email"
                    className="w-full bg-blue-800/40 border border-blue-300 rounded-xl px-3 py-2 text-sm placeholder:text-blue-200 focus:outline-none"
                  />
                  <button className="bg-white text-blue-600 rounded-xl p-2">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ─── ARTICLE FEED ─── */}
            <div className="lg:col-span-9 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage + activeCategory + searchQuery}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {visiblePosts.length > 0 ? (
                    visiblePosts.map((post) => (
                      <Link href={`blog/${post.id}`} key={post.id}>
                        <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full">
                          {/* IMAGE */}
                          <div className="h-60 overflow-hidden relative">
                            <img
                              src={post.image}
                              alt={stripHtml(post.title)}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 text-xs px-3 py-1 bg-white border border-zinc-200 rounded-full uppercase font-bold tracking-wider">
                              {post.category}
                            </div>
                          </div>

                          {/* CONTENT */}
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-xs uppercase text-zinc-400 mb-3">
                              {post.date}
                              <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                              <Clock className="w-3 h-3" /> {post.readTime}
                            </div>

                            <h3 className="text-xl font-bold mb-2 leading-tight hover:text-blue-600 transition-colors">
                              {stripHtml(post.title)}
                            </h3>

                            <p className="text-zinc-600 text-sm line-clamp-3">
                              {stripHtml(post.excerpt)}
                            </p>

                            <div className="mt-auto pt-6 flex justify-between items-center border-t border-zinc-100">
                              <span className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-900 transition-colors">
                                Read Article
                              </span>
                              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <ArrowUpRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-20 text-zinc-400">
                      <p className="text-lg">
                        No posts found matching your criteria.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* ─────── PAGINATION CONTROLS ─────── */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center gap-2">
                  {/* PREV */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* NUMBERS */}
                  {getPageNumbers().map((page, idx) =>
                    typeof page === "number" ? (
                      <button
                        key={idx}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                          currentPage === page
                            ? "bg-zinc-900 text-white shadow-md scale-110"
                            : "bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100"
                        }`}
                      >
                        {page}
                      </button>
                    ) : (
                      <span
                        key={idx}
                        className="w-10 h-10 flex items-center justify-center text-zinc-400 font-bold"
                      >
                        ...
                      </span>
                    ),
                  )}

                  {/* NEXT */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
