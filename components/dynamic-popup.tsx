"use client";

import { useState, useEffect, useRef } from "react";
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
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [visiblePopups, setVisiblePopups] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Ref to prevent double-execution in React Strict Mode
  const initialized = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    let timeoutId: NodeJS.Timeout;

    const fetchPopup = async () => {
      if (initialized.current) return;
      initialized.current = true;

      try {
        const res = await fetch("/api/popup");
        if (!res.ok) throw new Error(`Error: ${res.status}`);

        const popupDataFromApi = await res.json();
        if (!popupDataFromApi) return;

        const allPopups: PopupData[] = Array.isArray(popupDataFromApi)
          ? popupDataFromApi
          : [popupDataFromApi];

        if (allPopups.length === 0) return;

        // 1. Manage Global View Count
        const countKey = "popup_global_view_count";
        const rawCount = sessionStorage.getItem(countKey);
        // If it exists, parse and add 1. If not, start at 1.
        const currentViewCount = rawCount ? parseInt(rawCount, 10) + 1 : 1;
        sessionStorage.setItem(countKey, currentViewCount.toString());

        // 2. Get list of specifically closed Popup IDs
        const storedClosedIds = sessionStorage.getItem("closed_popup_ids");
        const closedIds: string[] = storedClosedIds
          ? JSON.parse(storedClosedIds)
          : [];

        // 3. Filter Logic
        const activePopups = allPopups.filter((popup) => {
          const isClosed = closedIds.includes(popup.id);

          // Condition A: If NOT closed, show on every reload.
          if (!isClosed) return true;

          // Condition B: If CLOSED, show every 2nd reload.
          // (Shows on 1, 3, 5... Hides on 2, 4, 6...)
          // If you want it to hide immediately after closing and show on the NEXT reload, change logic here.
          // Current: It acts as a "nag" feature.
          return currentViewCount % 2 !== 0;
        });

        if (activePopups.length > 0) {
          setPopups(activePopups);

          // Stagger appearance
          timeoutId = setTimeout(() => {
            setVisiblePopups(activePopups.map((p) => p.id));
          }, 500);
        }
      } catch (error) {
        console.error("Failed to load popup:", error);
      }
    };

    fetchPopup();

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = (id: string) => {
    // 1. Remove from visual state
    setVisiblePopups((prev) => prev.filter((popupId) => popupId !== id));

    // 2. Add ID to session storage
    const storedClosedIds = sessionStorage.getItem("closed_popup_ids");
    const closedIds: string[] = storedClosedIds
      ? JSON.parse(storedClosedIds)
      : [];

    if (!closedIds.includes(id)) {
      const newClosedIds = [...closedIds, id];
      sessionStorage.setItem("closed_popup_ids", JSON.stringify(newClosedIds));
    }
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.style.display = "none";
  };

  if (!isMounted || visiblePopups.length === 0) return null;

  return (
    // pointer-events-none ensures clicks pass through the empty areas of the container
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col-reverse gap-4 md:bottom-8 md:right-8 items-end pointer-events-none">
      {popups.map((popup) => {
        if (!visiblePopups.includes(popup.id)) return null;

        return (
          <div
            key={popup.id}
            role="dialog"
            aria-labelledby={`popup-title-${popup.id}`}
            aria-describedby={`popup-desc-${popup.id}`}
            // pointer-events-auto restores clickability for the popup itself
            className="pointer-events-auto relative w-[340px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden font-sans animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
          >
            {/* Close Button */}
            <button
              onClick={() => handleClose(popup.id)}
              className="absolute top-3 right-3 z-20 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors group shadow-sm border border-transparent hover:border-gray-200 cursor-pointer"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 text-gray-800 group-hover:scale-90 transition-transform" />
            </button>

            {/* Optional Image */}
            {popup.imageUrl ? (
              <div className="h-32 w-full bg-gray-50 relative overflow-hidden">
                <img
                  src={popup.imageUrl}
                  alt={popup.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            ) : null}

            {/* Content */}
            <div className="p-6 pt-5 flex flex-col items-start gap-4">
              <div className="text-left">
                <h3
                  id={`popup-title-${popup.id}`}
                  className="text-lg font-bold tracking-tight text-gray-900 leading-tight"
                >
                  {popup.title}
                </h3>
                <p
                  id={`popup-desc-${popup.id}`}
                  className="text-sm font-medium text-gray-500 mt-1.5 leading-relaxed"
                >
                  {popup.description}
                </p>
              </div>

              {/* Button applied directly to Link to avoid hydration errors */}
              <Link
                href={popup.buttonLink}
                className="w-full group focus:outline-none py-3 px-6 bg-[#ff3e00] text-white rounded-2xl font-semibold text-sm tracking-wide transition-all active:scale-95 hover:bg-[#e63800] shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                {popup.buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
