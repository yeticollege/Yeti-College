"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Download, X, Filter, Search } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MediaThumbnail } from "@/components/media-thumbnail";

// --- Types ---
export type Notice = {
  id: number;
  title: string;
  date: string;
  category: "Administrative" | "Academic" | "Exam" | "Holiday";
  description: string;
  mediaType: "pdf" | "image" | "none";
  mediaUrl?: string;
  accent: string;
};

interface NoticesClientProps {
  initialNotices?: Notice[];
}

export default function NoticesClient({
  initialNotices = [],
}: NoticesClientProps) {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (selectedNotice) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedNotice]);

  // --- HELPER 1: Strip HTML for the Preview Card ---
  // Removes tags so the card shows clean, short text.
  const stripHtml = (html: string) => {
    if (!html) return "";
    let text = html.replace(/<br\s*\/?>/gi, " ").replace(/<\/p>/gi, " ");
    text = text.replace(/<[^>]+>/g, "");
    text = text.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
    return text.trim();
  };

  // --- HELPER 2: Prepare HTML for the Modal ---
  // Keeps the bold/paragraph tags, but replaces &nbsp; with normal spaces
  // so the text can wrap automatically.
  const prepareHtmlForDisplay = (html: string) => {
    if (!html) return "";
    // Replace non-breaking spaces with normal spaces to allow wrapping
    return html.replace(/&nbsp;/g, " ");
  };

  const filteredNotices = useMemo(() => {
    if (!initialNotices) return [];

    return initialNotices.filter((n) => {
      const matchesCategory =
        filterCategory === "All" || n.category === filterCategory;

      const plainDescription = stripHtml(n.description).toLowerCase();

      const matchesSearch =
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plainDescription.includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialNotices, filterCategory, searchQuery]);

  const categories = ["All", "Administrative", "Academic", "Exam", "Holiday"];

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#F2F2F2] text-zinc-900 py-6 md:py-12 px-4 md:px-8 font-sans">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar / Topbar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-8 space-y-6">
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-200 shadow-sm">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[0.9] mb-4">
                    Official
                    <br />
                    <span className="text-zinc-400">Notices.</span>
                  </h1>
                  <p className="text-sm md:text-base text-zinc-600 font-medium">
                    Stay updated with the latest announcements.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 bg-white border border-zinc-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm transition-all"
                  />
                </div>

                {/* Filters */}
                <div className="block lg:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                  <div className="flex gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-bold transition-all border ${
                          filterCategory === cat
                            ? "bg-zinc-900 text-white border-zinc-900"
                            : "bg-white text-zinc-500 border-zinc-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block bg-zinc-900 text-white p-6 rounded-[2rem] shadow-xl">
                  <div className="flex items-center gap-2 mb-6 text-zinc-400">
                    <Filter className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-xs">
                      Filter by Category
                    </span>
                  </div>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium flex justify-between items-center ${
                          filterCategory === cat
                            ? "bg-white text-zinc-900 font-bold shadow-md scale-105"
                            : "hover:bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        {cat}
                        {filterCategory === cat && (
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feed List */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex justify-between items-end mb-2 px-1">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  Recent Updates
                </h2>
                <span className="text-xs md:text-sm font-semibold text-zinc-400 bg-white px-3 py-1 rounded-full border border-zinc-200">
                  {filteredNotices.length} Notices
                </span>
              </div>

              {filteredNotices.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-zinc-400">
                  <p>No notices found</p>
                </div>
              ) : (
                filteredNotices.map((notice) => (
                  <Card
                    key={notice.id}
                    onClick={() => setSelectedNotice(notice)}
                    className="group relative border-0 bg-white rounded-[1.5rem] md:rounded-[2rem] p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-visible"
                  >
                    <div className="flex flex-row items-stretch gap-3 md:gap-6 p-2">
                      <div className="hidden sm:flex flex-col items-center justify-center bg-zinc-50 rounded-[1.2rem] p-2 w-20 shrink-0 text-center border border-zinc-100">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                          {new Date(notice.date).toLocaleString("default", {
                            month: "short",
                          })}
                        </span>
                        <span className="text-2xl font-bold text-zinc-900 leading-none my-1">
                          {new Date(notice.date).getDate()}
                        </span>
                      </div>

                      <MediaThumbnail
                        type={notice.mediaType}
                        url={notice.mediaUrl}
                        className="w-24 h-24 sm:w-32 sm:h-auto rounded-2xl border border-zinc-100 shrink-0"
                      />

                      <div className="flex-1 py-1 min-w-0 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`w-2 h-2 rounded-full ${notice.accent}`}
                          />
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                            {notice.category}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-xl font-bold text-zinc-900 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors mb-1 break-words">
                          {notice.title}
                        </h3>
                        {/* Preview text stripped of HTML */}
                        <p className="text-zinc-500 text-xs sm:text-sm line-clamp-2 pr-2 break-words">
                          {stripHtml(notice.description)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {/* Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6">
          <div
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedNotice(null)}
          />
          <div
            className="relative w-full md:max-w-5xl bg-white shadow-2xl overflow-hidden h-[90vh] rounded-t-[2rem] md:h-[85vh] md:rounded-[2.5rem] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNotice(null)}
              className="md:hidden absolute top-4 right-4 z-50 p-2 bg-zinc-900 text-white rounded-full shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="order-2 md:order-1 flex-1 md:w-1/3 bg-zinc-50 p-6 md:p-10 border-r border-zinc-100 flex flex-col overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4 break-words">
                {selectedNotice.title}
              </h2>

              {/* 
                UPDATES for Formatting:
                1. prepareHtmlForDisplay() swaps &nbsp; for spaces.
                2. 'break-words' CSS class ensures text wraps.
                3. custom selectors [&>p] style the paragraphs.
              */}
              <div
                className="text-zinc-600 mb-8 text-sm md:text-base leading-relaxed space-y-4 break-words [&>p]:min-h-[1em] [&>strong]:text-zinc-900 [&>strong]:font-bold"
                dangerouslySetInnerHTML={{
                  __html: prepareHtmlForDisplay(selectedNotice.description),
                }}
              />

              {selectedNotice.mediaUrl && (
                <a
                  href={selectedNotice.mediaUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-900 text-white font-bold mt-auto"
                >
                  <Download className="w-4 h-4" /> Download Attachment
                </a>
              )}
            </div>
            <div className="order-1 md:order-2 h-64 md:h-auto md:flex-[1.5] bg-zinc-900 relative flex items-center justify-center">
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute top-6 right-6 z-30 p-3 bg-black/50 text-white rounded-full hidden md:block"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedNotice.mediaType === "image" && (
                <img
                  src={selectedNotice.mediaUrl}
                  className="object-contain w-full h-full"
                  alt="Notice attachment"
                />
              )}
              {selectedNotice.mediaType === "pdf" && (
                <iframe
                  src={selectedNotice.mediaUrl}
                  className="w-full h-full bg-white"
                  title="PDF Viewer"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
