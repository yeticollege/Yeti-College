"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { noticesData, MediaThumbnail } from "@/app/notices/page";

export default function NoticeSnippet() {
  // Grab top 3 notices
  const latestNotices = noticesData.slice(0, 3);

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-zinc-900 mb-2">
              Notice<span className="text-zinc-400">Board.</span>
            </h2>
            <p className="text-zinc-500 font-medium text-lg">
              Latest circulars and updates from the administration.
            </p>
          </div>
          <Link
            href="/notices"
            className="hidden md:flex group items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-sm font-bold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all"
          >
            View Archive
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNotices.map((notice) => (
            <Link href="/notices" key={notice.id} className="block h-full">
              <div className="group h-full bg-zinc-50 rounded-[2.5rem] p-3 border border-zinc-100 hover:border-zinc-300 hover:shadow-2xl transition-all duration-500 flex flex-col">
                {/* 1. Media Preview Area (Large) */}
                <div className="h-48 w-full rounded-[2rem] overflow-hidden mb-4 relative">
                  <MediaThumbnail
                    type={notice.mediaType}
                    url={notice.mediaUrl}
                    className="w-full h-full bg-white"
                  />
                  {/* Overlay Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                    <div className={`w-2 h-2 rounded-full ${notice.accent}`} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">
                      {notice.category}
                    </span>
                  </div>
                </div>

                {/* 2. Content */}
                <div className="px-3 pb-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-zinc-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {notice.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {notice.title}
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6">
                    {notice.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-200/60">
                    <span className="text-xs font-bold text-zinc-400 group-hover:text-zinc-600 transition-colors">
                      Read details
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden">
          <Link
            href="/notices"
            className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-zinc-900 text-sm font-bold text-white"
          >
            View Archive
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
