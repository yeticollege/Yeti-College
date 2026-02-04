"use client";

import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  PanInfo,
  Variants,
} from "framer-motion";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Loader2,
  Play,
  Volume2,
  VolumeX,
  SearchX,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Header from "@/components/header";

// --- TYPES ---
type Category = string;

export interface GalleryItem {
  id: number;
  type: "video" | "image";
  src: string;
  poster?: string;
  title: string;
  category: string;
  year: string;
  width: number;
  height: number;
}

// --- UTILS ---
const convertGoogleDriveUrl = (url: string): string => {
  if (!url) return url;
  if (url.includes("drive.google.com/uc?export=view&id=")) return url;
  if (!url.includes("drive.google.com")) return url;

  let idMatch;
  const fileMatch = url.match(/\/file\/d\/([^/]+)\//);
  if (fileMatch && fileMatch[1]) idMatch = fileMatch[1];

  if (!idMatch) {
    const paramMatch = url.match(/[?&]id=([^&]+)/);
    if (paramMatch && paramMatch[1]) idMatch = paramMatch[1];
  }

  if (idMatch) {
    return `https://drive.google.com/uc?export=view&id=${idMatch}`;
  }
  return url;
};

const getProxyUrl = (src: string) => {
  if (!src) return "";
  if (src.includes("drive.google.com")) {
    const convertedSrc = convertGoogleDriveUrl(src);
    return `/api/image-proxy?url=${encodeURIComponent(convertedSrc)}`;
  }
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return `/api/image-proxy?url=${encodeURIComponent(src)}`;
  }
  return src;
};

const getSpanClass = (width: number, height: number): string => {
  const ratio = width / height;
  if (ratio > 1.3) return "col-span-1 md:col-span-2 row-span-1";
  if (ratio < 0.8) return "col-span-1 row-span-2";
  if (ratio >= 0.8 && ratio <= 1.2 && width > 1100)
    return "col-span-1 md:col-span-2 row-span-2";
  return "col-span-1 row-span-1";
};

// --- HOOKS ---
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
    events.forEach((e) => window.addEventListener(e, resetTimer));
    return () => {
      events.forEach((e) => window.removeEventListener(e, resetTimer));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isActive, resetTimer]);

  return visible;
};

// --- COMPONENTS ---

// 1. Progressive Media (Handles loading states & errors)
const ProgressiveMedia = ({
  src,
  alt,
  className,
  isVideo,
  poster,
}: {
  src: string;
  alt: string;
  className?: string;
  isVideo?: boolean;
  poster?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  // Safety: Force loaded state after 5s to prevent infinite spinner
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Video Autoplay on Hover
  useEffect(() => {
    if (!isVideo || !videoRef.current) return;
    if (hovered) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered, isVideo]);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setIsLoaded(true); // Hide spinner on error

  const mediaSrc = getProxyUrl(src);
  const posterSrc = poster ? getProxyUrl(poster) : null;

  return (
    <div
      className="w-full h-full relative bg-zinc-200 overflow-hidden"
      onMouseEnter={() => isVideo && setHovered(true)}
      onMouseLeave={() => isVideo && setHovered(false)}
    >
      {/* Loading Spinner */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center text-zinc-400 z-10 transition-opacity duration-500",
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100",
        )}
      >
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>

      {isVideo ? (
        <>
          {posterSrc ? (
            <motion.img
              src={posterSrc}
              alt={alt}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: hovered ? 0 : 1,
                filter: isLoaded ? "blur(0px)" : "blur(10px)",
              }}
              transition={{ duration: 0.5 }}
              onLoad={handleLoad}
              onError={handleError}
              className={cn(
                "absolute inset-0 w-full h-full object-cover z-20",
                className,
              )}
            />
          ) : (
            <div className="absolute inset-0 bg-zinc-800 z-0" />
          )}

          <video
            ref={videoRef}
            src={mediaSrc}
            muted
            loop
            playsInline
            onLoadedData={!posterSrc ? handleLoad : undefined}
            onError={!posterSrc ? handleError : undefined}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-10",
              posterSrc
                ? hovered
                  ? "opacity-100"
                  : "opacity-0"
                : "opacity-100",
            )}
          />

          <div className="absolute top-3 right-3 z-30 bg-black/40 backdrop-blur-md p-2 rounded-full text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <Play className="w-3 h-3 fill-white stroke-none" />
          </div>
        </>
      ) : (
        <motion.img
          src={mediaSrc}
          alt={alt}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.1,
            filter: isLoaded ? "blur(0px)" : "blur(10px)",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onLoad={handleLoad}
          onError={handleError}
          className={cn("w-full h-full object-cover", className)}
        />
      )}
    </div>
  );
};

// 2. Gallery Card
const GalleryCard = ({ item, onClick, gridClass }: GalleryCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative group rounded-[24px] overflow-hidden cursor-zoom-in bg-zinc-100 border border-zinc-200",
        gridClass,
      )}
      onClick={onClick}
    >
      <div className="absolute inset-0 w-full h-full">
        <ProgressiveMedia
          src={item.src}
          poster={item.poster}
          alt={item.title}
          isVideo={item.type === "video"}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 z-40 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                {item.category}
              </p>
              <h3 className="font-bold text-sm md:text-base leading-tight">
                {item.title}
              </h3>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 3. Lightbox (Swiss Style & Dynamic Sizing)
interface LightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  total: number;
  currentIndex: number;
  direction: number;
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.85,
    rotateY: direction > 0 ? 15 : -15,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.85,
    rotateY: direction < 0 ? 15 : -15,
  }),
};

const Lightbox = ({
  item,
  isOpen,
  onClose,
  onNext,
  onPrev,
  total,
  currentIndex,
  direction,
}: LightboxProps) => {
  useScrollLock(isOpen);
  const controlsVisible = useIdleHide(isOpen, 4000);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(true), [item?.id]);

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
  }, [isOpen, onClose, onNext, onPrev, item]);

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -10000) onNext();
    else if (swipe > 10000) onPrev();
  };

  if (!item) return null;

  // --- DYNAMIC ASPECT RATIO CALCULATION ---
  // Calculates exact dimensions to fit within 90vw/80vh while maintaining ratio.
  const aspect = item.width && item.height ? item.width / item.height : 16 / 9;
  const dynamicStyle = {
    "--aspect": aspect,
    width: `min(90vw, calc(80vh * ${aspect}))`,
    height: `min(80vh, calc(90vw / ${aspect}))`,
  } as React.CSSProperties;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] bg-zinc-950/95 backdrop-blur-2xl flex flex-col"
    >
      {/* Header Info */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: controlsVisible ? 1 : 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between p-6 pointer-events-none"
      >
        <div className="pointer-events-auto bg-zinc-900/50 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-white/80 font-mono text-xs tracking-widest shadow-2xl">
          {String(currentIndex + 1).padStart(2, "0")}{" "}
          <span className="text-white/20">/</span>{" "}
          {String(total).padStart(2, "0")}
        </div>

        <button
          onClick={onClose}
          className="pointer-events-auto group p-3 rounded-full bg-zinc-900/50 border border-white/10 hover:bg-white/10 text-white transition-all backdrop-blur-xl shadow-2xl"
        >
          <X className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>

      {/* Main Content Area */}
      <div
        className="flex-1 w-full h-full flex items-center justify-center overflow-hidden relative perspective-[1000px]"
        onClick={onClose}
      >
        {/* Navigation Arrows */}
        <AnimatePresence>
          {controlsVisible && (
            <>
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="hidden md:flex absolute left-8 z-50 p-5 rounded-full bg-black/20 hover:bg-black/40 border border-white/5 text-white backdrop-blur-md transition-all group"
              >
                <ChevronLeft className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.button>
              <motion.button
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="hidden md:flex absolute right-8 z-50 p-5 rounded-full bg-black/20 hover:bg-black/40 border border-white/5 text-white backdrop-blur-md transition-all group"
              >
                <ChevronRight className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Dynamic Image Container */}
        <div
          className="relative w-full h-full flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={item.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={dynamicStyle} // <-- Appling dynamic width/height
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className={cn(
                "relative shadow-2xl overflow-hidden touch-none ring-1 ring-white/10 bg-black",
                "rounded-[20px] md:rounded-[32px]", // Swiss Roundness
              )}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                  <Loader2 className="animate-spin text-white/50 w-10 h-10" />
                </div>
              )}

              {item.type === "video" ? (
                <video
                  src={getProxyUrl(item.src)}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onLoadedData={() => setIsLoading(false)}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={getProxyUrl(item.src)}
                  alt={item.title}
                  draggable={false}
                  onLoad={() => setIsLoading(false)}
                  className="w-full h-full object-contain select-none"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Dock */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: controlsVisible ? 1 : 0 }}
        className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-4 bg-zinc-900/80 backdrop-blur-2xl border border-white/10 pl-6 pr-3 py-3 rounded-full shadow-2xl max-w-full md:max-w-2xl overflow-hidden">
          <div className="flex flex-col min-w-0 mr-4">
            <h2 className="text-sm font-bold text-white truncate leading-tight">
              {item.title}
            </h2>
            <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-medium uppercase tracking-widest leading-tight">
              <span>{item.category}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span>{item.year}</span>
            </div>
          </div>

          <div className="w-px h-8 bg-white/10 mx-1 hidden sm:block" />

          <div className="flex items-center gap-1 shrink-0">
            {item.type === "video" && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2.5 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            )}

            <a
              href={getProxyUrl(item.src)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() =>
                navigator.share &&
                navigator.share({
                  url: window.location.href,
                  title: item.title,
                })
              }
              className="p-2.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN PAGE ---
interface SwissGalleryProps {
  initialItems: GalleryItem[];
}

export default function SwissGallery({ initialItems }: SwissGalleryProps) {
  const [filter, setFilter] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const categories = useMemo(() => {
    const counts: Record<string, number> = { All: initialItems.length };
    initialItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    const uniqueCats = Array.from(
      new Set(initialItems.map((i) => i.category)),
    ).sort();
    return ["All", ...uniqueCats].map((cat) => ({
      name: cat,
      count: counts[cat],
    }));
  }, [initialItems]);

  const filteredItems = useMemo(
    () =>
      filter === "All"
        ? initialItems
        : initialItems.filter((item) => item.category === filter),
    [filter, initialItems],
  );

  const handleNext = useCallback(() => {
    setDirection(1);
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null,
    );
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredItems.length) % filteredItems.length
        : null,
    );
  }, [filteredItems.length]);

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-white text-zinc-900 pb-24 pt-32">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-12 mb-20 border-b border-zinc-100 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-6 block">
                / 04 Portfolio
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-zinc-950 leading-[0.85] select-none">
                Visual.
                <br />
                <span className="text-zinc-200">Archive</span>
              </h1>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setFilter(cat.name)}
                  className={cn(
                    "relative px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300 border select-none outline-none focus-visible:ring-2 ring-zinc-400 ring-offset-2",
                    filter === cat.name
                      ? "border-zinc-900 bg-zinc-900 text-white shadow-lg shadow-zinc-900/20"
                      : "border-zinc-200 text-zinc-500 hover:border-zinc-900 hover:text-zinc-900 bg-transparent",
                  )}
                >
                  {cat.name}
                  <span
                    className={cn(
                      "ml-2 opacity-60 text-[10px]",
                      filter === cat.name ? "text-zinc-300" : "text-zinc-400",
                    )}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Grid */}
          <LayoutGroup>
            <motion.div
              layout
              className="grid grid-flow-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <GalleryCard
                      key={item.id}
                      item={item}
                      onClick={() => {
                        setSelectedIndex(index);
                        setDirection(0);
                      }}
                      gridClass={getSpanClass(item.width, item.height)}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="col-span-full h-[400px] flex flex-col items-center justify-center text-zinc-400"
                  >
                    <SearchX className="w-16 h-16 mb-4 opacity-20" />
                    <p className="text-lg font-medium">
                      No items found for "{filter}"
                    </p>
                    <button
                      onClick={() => setFilter("All")}
                      className="mt-4 text-sm underline hover:text-zinc-900 transition-colors"
                    >
                      Clear filter
                    </button>
                  </motion.div>
                )}
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
            direction={direction}
          />
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
