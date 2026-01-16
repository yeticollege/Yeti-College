"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

interface PopupData {
  id: string;
  title: string;
  description: string;
  imageUrl?: string | null;
  buttonText: string;
  buttonLink: string;
}

export default function DynamicPopup() {
  const [data, setData] = useState<PopupData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const fetchPopup = async () => {
      try {
        const res = await fetch("/api/popup", {
          next: { revalidate: 60 },
        });

        if (!res.ok) return;

        const popupData = await res.json();
        if (!popupData) return;

        // --- NEW LOGIC START ---

        // Get current view count from Session Storage (clears when tab closes)
        const currentCount = parseInt(
          sessionStorage.getItem("popup_view_count") || "0"
        );
        const newCount = currentCount + 1;

        // Update storage
        sessionStorage.setItem("popup_view_count", newCount.toString());

        // Logic: Show on 1st load (New Session) OR after every 3 reloads (1, 4, 7, etc.)
        // (newCount - 1) % 3 === 0 checks if the increment is a multiple of 3 relative to start
        const shouldShow = newCount === 1 || (newCount - 1) % 3 === 0;

        if (shouldShow) {
          setData(popupData);
          // Small delay before showing for animation effect
          setTimeout(() => setIsVisible(true), 1000);
        }

        // --- NEW LOGIC END ---
      } catch (error) {
        console.error("Failed to load popup", error);
      }
    };

    fetchPopup();
  }, []);

  const handleClose = () => {
    // We simply hide it visually. We do NOT save a permanent dismissal
    // to localStorage, so it can pop up again in 3 reloads.
    setIsVisible(false);
  };

  if (!isMounted || !data || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] md:bottom-8 md:right-8 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <div className="relative w-[340px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden font-sans">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors group shadow-sm"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 text-gray-800 group-hover:scale-90 transition-transform" />
        </button>

        {/* Optional Image */}
        {data.imageUrl && (
          <div className="h-32 w-full bg-gray-100 relative">
            <img
              src={data.imageUrl}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 pt-5 flex flex-col items-start gap-4">
          <div className="text-left">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 leading-tight">
              {data.title}
            </h3>
            <p className="text-sm font-medium text-gray-500 mt-1.5 leading-relaxed">
              {data.description}
            </p>
          </div>

          <Link href={data.buttonLink} className="w-full group">
            <button className="w-full py-3 px-6 bg-[#ff3e00] text-white rounded-2xl font-semibold text-sm tracking-wide transition-all active:scale-95 hover:bg-[#e63800] shadow-sm hover:shadow-md flex items-center justify-center gap-2">
              {data.buttonText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
