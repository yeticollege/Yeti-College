"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X, ArrowRight, Plus } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PopupData {
  id: string;
  title: string;
  description: string;
  imageUrl?: string | null;
  buttonText: string;
  buttonLink: string;
}

// Configuration
// CARD_WIDTH is now handled via Tailwind (sm:w-[360px])
const HEIGHT_WITH_IMG = 400;
const HEIGHT_NO_IMG = 240;
const GAP_SIZE = 12;
const MAX_VISIBLE = 3;

// Snappy, heavy-feeling spring curve
const SWISS_SPRING = "cubic-bezier(0.25, 1, 0.5, 1)";

export default function DynamicPopup() {
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [closingIds, setClosingIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchPopup = async () => {
      try {
        const res = await fetch("/api/popup");
        if (!res.ok) return;

        const data = await res.json();
        const allPopups: PopupData[] = Array.isArray(data) ? data : [data];
        const closedIds = JSON.parse(
          sessionStorage.getItem("closed_popup_ids") || "[]",
        );

        const active = allPopups.filter((p) => !closedIds.includes(p.id));

        if (active.length) {
          setPopups(active.slice(0, MAX_VISIBLE));
          setTimeout(() => setIsReady(true), 1000);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchPopup();
  }, []);

  // Close popup function
  const handleClose = useCallback((id: string) => {
    setClosingIds((p) => [...p, id]);
    setTimeout(() => {
      setPopups((p) => p.filter((x) => x.id !== id));
      setClosingIds((p) => p.filter((x) => x !== id));
      const closed = JSON.parse(
        sessionStorage.getItem("closed_popup_ids") || "[]",
      );
      sessionStorage.setItem(
        "closed_popup_ids",
        JSON.stringify([...closed, id]),
      );
    }, 400);
  }, []);

  // Click handler for button + navigation
  const handleButtonClick = (id: string, href: string, e: React.MouseEvent) => {
    e.preventDefault(); // prevent default navigation
    handleClose(id); // close popup

    setTimeout(() => {
      window.location.href = href;
    }, 200);
  };

  // Toggle stack on mobile click, or hover on desktop
  const handleInteraction = (active: boolean) => {
    setIsHovering(active);
  };

  if (!popups.length) return null;

  return (
    // Responsive container positioning:
    // Mobile: bottom-4 left-4 right-4 (full width minus padding)
    // Desktop (sm): bottom-8 right-8 (fixed corner)
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-8 sm:right-8 z-[100] pointer-events-none font-sans antialiased">
      <div
        className="relative flex flex-col items-end pointer-events-auto w-full sm:w-[360px]"
        onMouseEnter={() => handleInteraction(true)}
        onMouseLeave={() => handleInteraction(false)}
        onClick={() => handleInteraction(!isHovering)} // Tap to expand on mobile
      >
        {popups.map((popup, index) => {
          const isClosing = closingIds.includes(popup.id);
          const isFront = index === 0;
          const hasImage = !!popup.imageUrl;
          const height = hasImage ? HEIGHT_WITH_IMG : HEIGHT_NO_IMG;

          // Stacking Math
          const offset = popups
            .slice(0, index)
            .reduce(
              (acc, p) =>
                acc + (p.imageUrl ? HEIGHT_WITH_IMG : HEIGHT_NO_IMG) + GAP_SIZE,
              0,
            );

          const translateY = isHovering ? -offset : -index * 10;
          const scale = isHovering ? 1 : 1 - index * 0.04;
          const opacity = isClosing ? 0 : 1;

          return (
            <div
              key={popup.id}
              className={cn(
                "absolute bottom-0 right-0 w-full flex flex-col",
                "bg-[#fafafa] border border-gray-200",
                "rounded-[32px] overflow-hidden origin-bottom",
                "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]",
                "transition-all duration-700 will-change-transform",
              )}
              style={{
                height,
                zIndex: 50 - index,
                opacity,
                transform: isReady
                  ? `translate3d(0, ${translateY}px, 0) scale(${scale})`
                  : `translate3d(0, 110%, 0) scale(0.95)`,
                transitionTimingFunction: SWISS_SPRING,
                pointerEvents: isHovering || isFront ? "auto" : "none",
              }}
              // Stop propagation on the card so clicking inside doesn't toggle the stack unnecessarily
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose(popup.id);
                }}
                className="absolute top-4 right-4 z-30 h-8 w-8 flex items-center justify-center
                  rounded-full bg-white border border-gray-200 text-gray-400
                  hover:bg-black hover:text-white hover:border-black hover:scale-110
                  transition-all duration-200 group"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header / Image */}
              {hasImage ? (
                <div className="relative h-[200px] w-full p-2">
                  <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-gray-100">
                    <img
                      src={popup.imageUrl!}
                      alt=""
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none" />
                  </div>
                </div>
              ) : (
                <div className="relative h-[110px] w-full bg-[#f4f4f5] overflow-hidden border-b border-gray-100">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(#000 1px, transparent 1px)",
                      backgroundSize: "12px 12px",
                    }}
                  />
                  <div className="absolute top-5 left-6">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Notification
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 px-6 pb-6 pt-2 flex flex-col justify-between">
                <div>
                  {!hasImage && <div className="h-2" />}
                  <h3 className="text-[20px] sm:text-[22px] leading-[1.1] font-bold text-black tracking-tight">
                    {popup.title}
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-gray-500 font-medium tracking-normal line-clamp-3">
                    {popup.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href={popup.buttonLink}
                  onClick={(e) =>
                    handleButtonClick(popup.id, popup.buttonLink, e)
                  }
                  className="
                    mt-5 group relative w-full flex items-center justify-between
                    bg-black text-white
                    pl-6 pr-2 py-2.5 rounded-full
                    hover:bg-[#ff4400] transition-colors duration-300
                  "
                >
                  <span className="text-sm font-bold tracking-wide">
                    {popup.buttonText}
                  </span>
                  <div
                    className="
                      h-9 w-9 rounded-full bg-white text-black
                      flex items-center justify-center
                      group-hover:scale-90 transition-transform duration-300
                    "
                  >
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </Link>
              </div>

              {/* Stack Badge */}
              {popups.length > 1 && !isHovering && isFront && (
                <button
                  onClick={() => setIsHovering(true)}
                  className="absolute top-4 left-6 z-20 cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white shadow-xl hover:bg-gray-800 transition-colors">
                    <Plus className="w-3 h-3" />
                    <span className="text-xs font-bold tracking-tight">
                      {popups.length - 1}
                    </span>
                  </div>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
