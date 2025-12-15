"use client";

import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  ArrowRight,
  ArrowLeft,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Header from "@/components/header";

// --- TYPES ---
type Category = "All" | "Architecture" | "Process" | "Campus" | "Events";

interface GalleryItem {
  id: number;
  type: "video" | "image";
  src: string;
  poster?: string;
  title: string;
  category: Exclude<Category, "All">;
  year: string;
  width: number;
  height: number;
}

// --- DATA ---
const categories: Category[] = [
  "All",
  "Architecture",
  "Process",
  "Campus",
  "Events",
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "video",
    src: "/gallery/cake_mixing/file1.mp4",
    poster: "/gallery/cake_mixing/file8.jpeg",
    title: "Cake Mixing Process",
    category: "Process",
    year: "2024",
    width: 960,
    height: 1280,
  },
  {
    id: 4,
    type: "video",
    src: "/gallery/cake_mixing/file2.mp4",
    poster: "/gallery/cake_mixing/file2.png",
    title: "Cake Mixing Demo",
    category: "Events",
    year: "2024",
    width: 720,
    height: 1280,
  },
  {
    id: 7,
    type: "video",
    src: "/gallery/cake_mixing/file3.mp4",
    poster: "/gallery/cake_mixing/file3.png",
    title: "Cake Mixing Techniques",
    category: "Events",
    year: "2024",
    width: 1080,
    height: 1920,
  },
  {
    id: 8,
    type: "image",
    src: "/gallery/cake_mixing/file11.jpeg",
    title: "Mixing Equipment",
    category: "Process",
    year: "2024",
    width: 1200,
    height: 1200,
  },
  {
    id: 9,
    type: "image",
    src: "/gallery/cake_mixing/file12.jpeg",
    title: "Ingredient Preparation",
    category: "Architecture",
    year: "2023",
    width: 874,
    height: 1280,
  },
  {
    id: 10,
    type: "image",
    src: "/gallery/cake_mixing/file13.jpeg",
    title: "Batter Consistency",
    category: "Architecture",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 11,
    type: "image",
    src: "/gallery/cake_mixing/file14.jpeg",
    title: "Mixing Station",
    category: "Architecture",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 12,
    type: "image",
    src: "/gallery/cake_mixing/file15.jpeg",
    title: "Texture Detail",
    category: "Architecture",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 13,
    type: "image",
    src: "/gallery/cake_mixing/file16.jpeg",
    title: "Quality Control",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 21,
    type: "image",
    src: "/gallery/cake_mixing/file31.jpeg",
    title: "Mixing Process",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 22,
    type: "image",
    src: "/gallery/cake_mixing/file32.jpeg",
    title: "Final Blend",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 23,
    type: "image",
    src: "/gallery/cake_mixing/file33.jpeg",
    title: "Ready for Baking",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 24,
    type: "image",
    src: "/gallery/cake_mixing/file34.jpeg",
    title: "Cake Mix Complete",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 14,
    type: "image",
    src: "/gallery/cake_mixing/file35.jpeg",
    title: "Batch Preparation",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 15,
    type: "image",
    src: "/gallery/cake_mixing/file36.jpeg",
    title: "Professional Setup",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 16,
    type: "image",
    src: "/gallery/cake_mixing/file37.jpeg",
    title: "Mixing Details",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 17,
    type: "image",
    src: "/gallery/cake_mixing/file20.jpeg",
    title: "Ingredient Mix",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 18,
    type: "image",
    src: "/gallery/cake_mixing/file21.jpeg",
    title: "Homogenized Blend",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 19,
    type: "image",
    src: "/gallery/cake_mixing/file22.jpeg",
    title: "Smooth Mixture",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 20,
    type: "image",
    src: "/gallery/cake_mixing/file23.jpeg",
    title: "Production Line",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 25,
    type: "image",
    src: "/gallery/1.jpeg",
    title: "Urban Verticality",
    category: "Architecture",
    year: "2023",
    width: 1000,
    height: 1500,
  },
  {
    id: 26,
    type: "image",
    src: "/gallery/2.jpeg",
    title: "Campus Life",
    category: "Campus",
    year: "2024",
    width: 1280,
    height: 1440,
  },
  {
    id: 27,
    type: "image",
    src: "/gallery/3.jpeg",
    title: "Ceramics Workshop",
    category: "Process",
    year: "2023",
    width: 853,
    height: 1280,
  },
  {
    id: 28,
    type: "image",
    src: "/gallery/cake_mixing/file38.jpeg",
    title: "Abstract Objects",
    category: "Architecture",
    year: "2022",
    width: 1600,
    height: 900,
  },
];

// --- CUSTOM HOOKS ---

const useScrollLock = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [lock]);
};

const useIdleHide = (isActive: boolean, timeoutMs = 3000) => {
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (!isActive) return;
    setVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(false), timeoutMs);
  }, [isActive, timeoutMs]);

  useEffect(() => {
    if (!isActive) return;
    resetTimer();
    const events = [
      "mousemove",
      "mousedown",
      "resize",
      "keydown",
      "touchstart",
      "wheel",
    ];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isActive, resetTimer]);

  return visible;
};

// --- LOGIC: DYNAMIC GRID CALCULATION ---

/**
 * Calculates CSS Grid spans based on the natural aspect ratio of the media.
 * We use a base row height (e.g., 250px) in the CSS.
 */
const getSpanClass = (width: number, height: number): string => {
  const ratio = width / height;

  // Case 1: Landscape / Wide (16:9, 4:3) -> Span 2 columns, 1 row
  // Threshold: wider than 4:3 (1.33)
  if (ratio > 1.3) {
    return "col-span-1 md:col-span-2 row-span-1";
  }

  // Case 2: Portrait / Tall (9:16, 2:3) -> Span 1 column, 2 rows
  // Threshold: taller than 4:5 (0.8)
  if (ratio < 0.8) {
    return "col-span-1 row-span-2";
  }

  // Case 3: Big Square / High Res Feature -> Span 2 columns, 2 rows
  // Only applies if it's roughly square AND high resolution
  if (ratio >= 0.8 && ratio <= 1.2 && width > 1100) {
    return "col-span-1 md:col-span-2 row-span-2";
  }

  // Case 4: Standard Square / Small -> Span 1 column, 1 row
  return "col-span-1 row-span-1";
};

// --- SUB COMPONENTS ---

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
  gridClass: string;
}

const GalleryCard = ({ item, onClick, gridClass }: GalleryCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (item.type !== "video" || !videoRef.current) return;

    if (isHovered) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered, item.type]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        // Core Layout Styles
        "relative group bg-zinc-100 rounded-2xl overflow-hidden cursor-zoom-in border border-zinc-200/50",
        // Dynamic Grid Spanning
        gridClass
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Container */}
      <div className="absolute inset-0 w-full h-full">
        {item.type === "video" ? (
          <>
            <motion.img
              layoutId={`media-poster-${item.id}`}
              src={item.poster}
              alt={item.title}
              className={cn(
                "w-full h-full object-cover transition-opacity duration-500",
                isHovered ? "opacity-0" : "opacity-100"
              )}
            />
            <video
              ref={videoRef}
              src={item.src}
              muted
              loop
              playsInline
              preload="none"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            />
            <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm p-2 rounded-full text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <Play className="w-3 h-3 fill-current" />
            </div>
          </>
        ) : (
          <motion.img
            layoutId={`media-${item.id}`}
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      {/* Overlay: View Button */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
            <Maximize2 className="w-3.5 h-3.5 text-zinc-900" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">
              View
            </span>
          </div>
        </div>
      </div>

      {/* Overlay: Text Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-white text-sm font-medium truncate translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {item.title}
        </p>
        <p className="text-white/60 text-[10px] uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {item.category} • {item.year}
        </p>
      </div>
    </motion.div>
  );
};

interface LightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  total: number;
  currentIndex: number;
}

const Lightbox = ({
  item,
  isOpen,
  onClose,
  onNext,
  onPrev,
  total,
  currentIndex,
}: LightboxProps) => {
  useScrollLock(isOpen);
  const controlsVisible = useIdleHide(isOpen);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [item?.id]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === " " && item?.type === "video") {
        e.preventDefault();
        setIsMuted((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev, item?.type]);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col"
    >
      {/* Top Bar */}
      <AnimatePresence>
        {controlsVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-50 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"
          >
            <div className="flex items-center gap-4 text-white/80 font-mono text-xs pointer-events-auto">
              <span className="tabular-nums">
                {(currentIndex + 1).toString().padStart(2, "0")} /{" "}
                {total.toString().padStart(2, "0")}
              </span>
              <span className="hidden md:inline-block text-white/20">|</span>
              <span className="hidden md:inline-block tracking-widest uppercase opacity-60">
                {item.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="group relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors pointer-events-auto"
            >
              <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div
        className="flex-1 relative w-full h-full flex items-center justify-center p-4 md:p-10"
        onClick={onClose}
      >
        {/* Navigation Zones */}
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[15%] z-20 hidden md:flex items-center justify-start pl-4 transition-cursor",
            controlsVisible ? "cursor-pointer" : "cursor-none"
          )}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <AnimatePresence>
            {controlsVisible && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/5"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[15%] z-20 hidden md:flex items-center justify-end pr-4 transition-cursor",
            controlsVisible ? "cursor-pointer" : "cursor-none"
          )}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <AnimatePresence>
            {controlsVisible && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/5"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Media */}
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}

          <motion.div
            layoutId={`card-container-${item.id}`} // Shared layout ID for box transition
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative overflow-hidden shadow-2xl bg-zinc-900 rounded-lg pointer-events-auto z-10",
              item.width > item.height
                ? "w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[1200px] aspect-video"
                : "h-full max-h-[85vh] aspect-[2/3]"
            )}
          >
            {item.type === "video" ? (
              <>
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onLoadedData={() => setIsLoading(false)}
                  className="w-full h-full object-contain bg-black"
                />
                <AnimatePresence>
                  {controlsVisible && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="absolute bottom-6 right-6 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors z-30"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </motion.button>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <motion.img
                layoutId={`media-${item.id}`} // Shared layout ID for image transition
                src={item.src}
                alt={item.title}
                onLoad={() => setIsLoading(false)}
                className="w-full h-full object-contain bg-black"
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Panel */}
      <AnimatePresence>
        {controlsVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center px-4 z-50 pointer-events-none"
          >
            <div
              className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-1.5 rounded-[2rem] shadow-2xl pointer-events-auto max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 rounded-[1.7rem] bg-white/5">
                <div className="text-center md:text-left">
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h2>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-1">
                    <span>{item.year}</span>
                    <span>•</span>
                    <span>{item.category}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-white text-zinc-900 hover:bg-zinc-200 flex items-center justify-center transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <div className="w-px h-8 bg-white/10 mx-2 hidden md:block" />
                  <div className="hidden md:flex gap-1">
                    <button
                      onClick={onPrev}
                      className="w-10 h-10 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onNext}
                      className="w-10 h-10 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function SwissGallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredItems.length) % filteredItems.length
        : null
    );
  }, [filteredItems.length]);

  return (
    <>
      <Header />
      <section className="py-24 bg-white text-zinc-900 min-h-screen">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
          {/* Header Section */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-12 mb-16 border-b border-zinc-100 pb-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-4 block">
                / 04 Portfolio
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.9]">
                Visual.
                <br />
                <span className="tracking-widest text-zinc-300">Archive</span>
              </h1>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "relative px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border select-none outline-none focus-visible:ring-2 ring-zinc-400 ring-offset-2",
                    filter === cat
                      ? "border-zinc-900 text-white bg-zinc-900 shadow-lg shadow-zinc-900/20"
                      : "border-zinc-200 text-zinc-500 hover:border-zinc-900 hover:text-zinc-900 bg-transparent"
                  )}
                >
                  {cat}
                  {filter === cat && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-zinc-900 -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <LayoutGroup>
            {/* 
              GRID UPDATE: 
              - `grid-flow-dense` is critical for packing different sized items 
              - `auto-rows` set to smaller increments (250px) allows for granular vertical spanning
            */}
            <motion.div
              layout
              className="grid grid-flow-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    onClick={() => setSelectedIndex(index)}
                    gridClass={getSpanClass(item.width, item.height)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            item={filteredItems[selectedIndex]}
            isOpen={selectedIndex !== null}
            onClose={() => setSelectedIndex(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            total={filteredItems.length}
            currentIndex={selectedIndex}
          />
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
