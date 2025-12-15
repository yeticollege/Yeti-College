"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Image as ImageIcon,
  Download,
  X,
  Filter,
  ExternalLink,
  Calendar,
  Search, // Imported Search Icon
} from "lucide-react";
// Assuming you have these components, otherwise replace with simple divs
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Types & Data ---

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

export const noticesData: Notice[] = [
  {
    id: 1,
    title: "New Course Structure of BCA 2025 Batch",
    date: "2025-11-22",
    category: "Academic",
    description:
      "The final course for the Spring 2025 semester has been published. Please check for your update",
    mediaType: "pdf",
    mediaUrl:
      "https://portal.tu.edu.np/downloads/BCA_Syllabus-compressed_compre_2024_01_30_18_33_22.pdf",
    accent: "bg-rose-600",
  },
  // {
  //   id: 2,
  //   title: "Campus Renovation Progress",
  //   date: "2025-11-22",
  //   category: "Administrative",
  //   description:
  //     "See the progress on the new library wing. Construction is expected to finish by July.",
  //   mediaType: "image",
  //   mediaUrl:
  //     "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
  //   accent: "bg-blue-600",
  // },
  {
    id: 3,
    title: "Udhauli Festival / Yomari punhe Holiday",
    date: "2025-12-4",
    category: "Holiday",
    description:
      "The campus will remain closed on December 4th.",
    mediaType: "image",
    mediaUrl: "/bida.png",
    accent: "bg-amber-500",
  },
  // {
  //   id: 4,
  //   title: "Scholarship Application Form",
  //   date: "2025-11-23",
  //   category: "Academic",
  //   description:
  //     "Applications for the Merit Scholarship are now open. Download the attached PDF form.",
  //   mediaType: "pdf",
  //   mediaUrl: "/ojt-report-final.pdf",
  //   accent: "bg-emerald-600",
  // },
];

// --- Helper: Media Preview Component ---
export const MediaThumbnail = ({
  type,
  url,
  className = "",
}: {
  type: string;
  url?: string;
  className?: string;
}) => {
  if (type === "image" && url) {
    return (
      <div className={`relative overflow-hidden bg-zinc-100 ${className}`}>
        <img
          src={url}
          alt="Notice preview"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    );
  }

  if (type === "pdf") {
    return (
      <div
        className={`relative overflow-hidden bg-zinc-100 flex items-center justify-center ${className}`}
      >
        <div className="w-3/5 h-4/5 bg-white shadow-sm border border-zinc-200 rounded-md p-2 flex flex-col gap-1.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
          <div className="w-full h-1.5 bg-zinc-100 rounded-full" />
          <div className="w-2/3 h-1.5 bg-zinc-100 rounded-full" />
          <div className="w-full h-1.5 bg-zinc-100 rounded-full mt-2" />
          <div className="w-full h-1.5 bg-zinc-100 rounded-full" />
          <div className="mt-auto self-end text-[8px] font-bold text-red-500 border border-red-100 bg-red-50 px-1 rounded">
            PDF
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div
      className={`relative overflow-hidden bg-zinc-50 flex items-center justify-center ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-300">
        <FileText className="w-5 h-5" />
      </div>
    </div>
  );
};

// --- Main Page ---

export default function NoticesPage() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  // 1. New Search State
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (selectedNotice) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedNotice]);

  // 2. Updated Filtering Logic
  const filteredNotices = noticesData.filter((n) => {
    const matchesCategory =
      filterCategory === "All" || n.category === filterCategory;

    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const categories = ["All", "Administrative", "Academic", "Exam", "Holiday"];

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#F2F2F2] text-zinc-900 py-6 md:py-12 px-4 md:px-8 font-sans">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* --- SIDEBAR (Desktop) / TOP BAR (Mobile) --- */}
            <div className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-8 space-y-6">
                {/* Title Card */}
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

                {/* 3. Search Input Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by title or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 bg-white border border-zinc-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent shadow-sm transition-all"
                  />
                </div>

                {/* Mobile Filter Scroll (Horizontal) */}
                <div className="block lg:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                  <div className="flex gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-bold transition-all border ${filterCategory === cat
                          ? "bg-zinc-900 text-white border-zinc-900"
                          : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desktop Filter List (Vertical) */}
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
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium flex justify-between items-center ${filterCategory === cat
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

            {/* --- FEED LIST --- */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex justify-between items-end mb-2 px-1">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  Recent Updates
                </h2>
                <span className="text-xs md:text-sm font-semibold text-zinc-400 bg-white px-3 py-1 rounded-full border border-zinc-200">
                  {filteredNotices.length} Notices
                </span>
              </div>

              {/* 4. Empty State Handling */}
              {filteredNotices.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-zinc-400">
                  <Search className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-lg font-semibold">No notices found</p>
                  <p className="text-sm">
                    Try adjusting your search or filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setFilterCategory("All");
                    }}
                    className="mt-4 text-blue-600 font-bold hover:underline text-sm"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                filteredNotices.map((notice) => (
                  <Card
                    key={notice.id}
                    onClick={() => setSelectedNotice(notice)}
                    className="group relative border-0 bg-white rounded-[1.5rem] md:rounded-[2rem] p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-visible"
                  >
                    <div className="flex flex-row items-stretch gap-3 md:gap-6 p-2">
                      {/* Date Badge */}
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

                      {/* Media Thumbnail */}
                      <MediaThumbnail
                        type={notice.mediaType}
                        url={notice.mediaUrl}
                        className="w-24 h-24 sm:w-32 sm:h-auto rounded-2xl border border-zinc-100 shrink-0"
                      />

                      {/* Text Content */}
                      <div className="flex-1 py-1 min-w-0 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`w-2 h-2 rounded-full ${notice.accent}`}
                          />
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                            {notice.category}
                          </span>
                          {/* Mobile Date Fallback */}
                          <span className="sm:hidden text-[10px] text-zinc-400 font-bold ml-auto flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {notice.date}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-xl font-bold text-zinc-900 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors mb-1">
                          {notice.title}
                        </h3>

                        <p className="text-zinc-500 text-xs sm:text-sm line-clamp-2 pr-2">
                          {notice.description}
                        </p>
                      </div>

                      {/* Desktop External Link Icon */}
                      <div className="hidden md:flex items-center justify-center self-center w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 shrink-0 mr-2">
                        <ExternalLink className="w-4 h-4" />
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

      {/* --- RESPONSIVE POPUP MODAL --- */}
      {selectedNotice && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedNotice(null)}
          />

          {/* Modal Container */}
          <div
            className="
              relative w-full md:max-w-5xl bg-white shadow-2xl overflow-hidden 
              
              /* Mobile Styles (Bottom Sheet) */
              h-[90vh] rounded-t-[2rem] 
              animate-in slide-in-from-bottom-12 duration-300

              /* Desktop Styles (Center Modal) */
              md:h-[85vh] md:rounded-[2.5rem] 
              md:animate-in md:zoom-in-95 
              
              flex flex-col md:flex-row
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Mobile Floating) */}
            <button
              onClick={() => setSelectedNotice(null)}
              className="md:hidden absolute top-4 right-4 z-50 p-2 bg-zinc-900 text-white rounded-full shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* --- LEFT PANEL (Content) --- */}
            <div className="order-2 md:order-1 flex-1 md:w-1/3 bg-zinc-50 p-6 md:p-10 border-r border-zinc-100 flex flex-col overflow-y-auto">
              <div className="flex items-center gap-2 mb-4 pt-4 md:pt-0">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-white ${selectedNotice.accent}`}
                >
                  {selectedNotice.category}
                </span>
                <span className="text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  {selectedNotice.date}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-4 md:mb-6 text-zinc-900">
                {selectedNotice.title}
              </h2>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-8">
                {selectedNotice.description}
              </p>

              <div className="mt-auto space-y-3 pb-8 md:pb-0">
                {selectedNotice.mediaUrl && (
                  <a
                    href={selectedNotice.mediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-xl bg-zinc-900 text-white font-bold text-sm hover:opacity-90 transition-transform hover:scale-[1.02]"
                  >
                    <Download className="w-4 h-4" /> Download Attachment
                  </a>
                )}
              </div>
            </div>

            {/* --- RIGHT PANEL (Media Preview) --- */}
            <div className="order-1 md:order-2 h-136 md:h-auto md:flex-[1.5] bg-zinc-900 relative flex items-center justify-center p-0 md:p-4 overflow-hidden shrink-0">
              {/* Desktop Close Button */}
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute top-6 right-6 z-30 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors hidden md:block"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Media Content */}
              {selectedNotice.mediaType === "image" &&
                selectedNotice.mediaUrl ? (
                <img
                  src={selectedNotice.mediaUrl}
                  alt="Full View"
                  className="w-full h-full object-cover md:object-contain md:rounded-lg"
                />
              ) : selectedNotice.mediaType === "pdf" &&
                selectedNotice.mediaUrl ? (
                // PDF Viewer
                <div className="w-full h-full relative group">
                  <iframe
                    src={`${selectedNotice.mediaUrl}#toolbar=0&view=FitH`}
                    className="w-full h-full bg-white md:rounded-xl"
                    title="PDF Viewer"
                  />
                  <div className="md:hidden absolute inset-0 bg-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="text-zinc-500 flex flex-col items-center text-center">
                  <FileText className="w-16 h-16 opacity-20 mb-4" />
                  <p className="opacity-50 text-sm">No Preview Available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
