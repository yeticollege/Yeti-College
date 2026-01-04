// components/media-thumbnail.tsx
import React from "react";
import { FileText } from "lucide-react";

interface MediaThumbnailProps {
  type: string; // "pdf" | "image" | "none" | string
  url?: string | null;
  className?: string;
}

export const MediaThumbnail = ({
  type,
  url,
  className = "",
}: MediaThumbnailProps) => {
  if (type === "image" && url) {
    return (
      <div className={`relative overflow-hidden bg-zinc-100 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
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
