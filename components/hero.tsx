"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import CountUp from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

// IMPORTANT: Ensure this path is correct
import { coursesDB } from "@/public/data/coursedata";

// --- Data Transformation for Courses ---
const ALL_COURSES = Object.entries(coursesDB).map(([key, course]) => ({
  slug: key,
  ...course,
}));

// --- Types ---
interface CourseResult {
  slug: string;
  title: string;
  code: string;
  category: string;
  image: string;
}

// --- Icons ---
const Icons = {
  Search: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  X: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  Clock: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Grip: () => (
    <svg
      className="w-8 h-1 text-white/20"
      fill="currentColor"
      viewBox="0 0 24 4"
    >
      <rect width="24" height="4" rx="2" />
    </svg>
  ),
  ArrowRight: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  ),
};

// --- Helper: Highlight Matched Text ---
const HighlightedText = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  if (!highlight.trim()) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            key={i}
            className="text-blue-400 font-bold underline decoration-blue-400/30 underline-offset-2"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

// --- Component: Enhanced Search Bar ---
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<CourseResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Filter logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }
    const filtered = ALL_COURSES.filter(
      (c) =>
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.code.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    setResults(filtered);
    setSelectedIndex(-1);
  }, [query]);

  // Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > -1 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleSelect(results[selectedIndex].slug);
      } else if (query) {
        console.log("Full search for:", query);
        router.push(`/programs?search=${encodeURIComponent(query)}`);
        setIsFocused(false);
      }
    } else if (e.key === "Escape") {
      inputRef.current?.blur();
      setIsFocused(false);
    }
  };

  const handleSelect = (slug: string) => {
    setQuery("");
    setIsFocused(false);
    router.push(`/programs/${slug}`);
  };

  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative z-50 w-full max-w-lg mx-auto md:mx-0">
      {/* Input Area */}
      <div
        className={`relative flex items-center bg-white/5 backdrop-blur-xl border transition-all duration-300 rounded-2xl ${
          isFocused
            ? "border-blue-500/50 bg-zinc-900/90 shadow-2xl ring-4 ring-blue-500/10"
            : "border-white/10 shadow-lg hover:border-white/20"
        }`}
      >
        <div
          className={`pl-4 transition-colors ${
            isFocused ? "text-blue-400" : "text-slate-400"
          }`}
        >
          <Icons.Search />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder="Search for programs, codes..."
          className="flex-1 bg-transparent text-white placeholder-slate-500 text-base px-4 py-4 outline-none w-full"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={clearSearch}
              className="p-2 mr-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <Icons.X />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Dropdown Results */}
      <AnimatePresence>
        {isFocused && query.trim().length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-top"
          >
            {results.length > 0 ? (
              <ul className="py-2">
                <div className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                  <span>Suggested Programs</span>
                  <span className="hidden sm:block">Selection</span>
                </div>
                {results.map((course, index) => (
                  <li key={course.slug}>
                    <Link href={`/programs/${course.slug}`} passHref>
                      <div
                        onClick={() => handleSelect(course.slug)}
                        className={`relative cursor-pointer px-4 py-3 flex items-center gap-4 transition-colors ${
                          index === selectedIndex
                            ? "bg-blue-500/20"
                            : "hover:bg-white/5"
                        }`}
                      >
                        {index === selectedIndex && (
                          <motion.div
                            layoutId="active-indicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"
                          />
                        )}
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0 border border-white/10">
                          <img
                            src={course.image}
                            alt={course.code}
                            className="w-full h-full object-cover opacity-80"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`text-sm font-semibold truncate ${
                              index === selectedIndex
                                ? "text-blue-200"
                                : "text-white"
                            }`}
                          >
                            <HighlightedText
                              text={course.title}
                              highlight={query}
                            />
                          </h4>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-slate-400">
                              {course.category}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-600" />
                            <span className="text-xs font-mono text-slate-500 uppercase">
                              {course.code}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`text-slate-500 transition-transform duration-300 ${
                            index === selectedIndex
                              ? "translate-x-0 opacity-100 text-blue-400"
                              : "-translate-x-2 opacity-0"
                          }`}
                        >
                          <Icons.ArrowRight />
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
                  <Icons.Search />
                </div>
                <p className="text-slate-300 font-medium">No programs found</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Static Data for Carousel/Stats ---
const SEAT_DATA = [
  { course: "MBA", seats: 4, total: 60 },
  { course: "BABM", seats: 12, total: 120 },
  { course: "BCA", seats: 8, total: 40 },
  { course: "BTTM", seats: 3, total: 30 },
  { course: "BHM", seats: 15, total: 100 },
  { course: "BAMM", seats: 2, total: 25 },
];

const SLIDES = [
  {
    video: "/videos/slide1.mp4",
    poster:
      "https://images.pexels.com/photos/6187887/pexels-photo-7972356.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    video: "/videos/slide2.mov",
    poster:
      "https://images.pexels.com/photos/34642433/pexels-photo-7972356.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    video: "https://www.pexels.com/download/video/3366872/",
    poster:
      "https://images.pexels.com/photos/3366872/pexels-photo-3738601.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

// --- Sub-Component: Video Slide ---
const VideoSlide = ({ video, poster }: { video: string; poster: string }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative flex-[0_0_100%] h-full">
      <img
        src={poster}
        alt="Background Preview"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

// --- Component: Video Carousel ---
const VideoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: 8000, stopOnInteraction: false }) as any,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-zinc-900">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <VideoSlide key={index} video={slide.video} poster={slide.poster} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 sm:via-black/60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent md:hidden pointer-events-none" />
      <div className="absolute bottom-8 right-8 flex gap-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${
              index === selectedIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Component: Event Card (FIXED) ---
// --- Component: Event Card (FIXED) ---
const EventCard = ({
  constraintsRef,
}: {
  constraintsRef: React.RefObject<any>;
}) => {
  const [event, setEvent] = useState<{
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
  } | null>(null);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch("/api/events/upcoming");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        if (data && data.length > 0) {
          setEvent(data[0]);
        }
      } catch (err) {
        console.error("Failed to load upcoming event:", err);
      }
    }

    fetchEvent();
  }, []);

  const formatMonthDay = (iso?: string) => {
    if (!iso) return { mon: "TBD", day: "--" };
    const d = new Date(iso);
    return {
      mon: d.toLocaleString(undefined, { month: "short" }),
      day: d.getDate().toString(),
    };
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragMomentum={false}
      whileHover={{ scale: 1.01 }}
      whileDrag={{ scale: 1.05, cursor: "grabbing", zIndex: 50 }}
      className="pointer-events-auto cursor-grab w-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
    >
      <div className="w-full bg-black/20 h-4 flex items-center justify-center">
        <Icons.Grip />
      </div>
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
      <div className="p-5 bg-black/40">
        {event ? (
          <>
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-1">
                  Upcoming Event
                </span>
                <h3 className="text-xl font-bold text-white line-clamp-2">
                  {event.title}
                </h3>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center min-w-[60px]">
                <span className="block text-xs uppercase text-slate-400 font-bold">
                  {formatMonthDay(event.date).mon}
                </span>
                <span className="block text-xl font-bold text-white">
                  {formatMonthDay(event.date).day}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
              <Icons.Clock />
              <span>
                {event.time ?? "Time TBA"} • {event.location ?? "Location TBA"}
              </span>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-slate-400 mb-2">No upcoming events</div>
            <div className="text-sm text-slate-500">Check back later</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// --- Main Hero Component ---
export default function Hero() {
  const constraintsRef = useRef(null);

  return (
    <section
      ref={constraintsRef}
      className="relative z-0 min-h-screen flex items-center overflow-hidden font-sans text-white"
    >
      <VideoCarousel />

      <style jsx>{`
        @keyframes vertical-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll 15s linear infinite;
        }
        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full z-10 pointer-events-none">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* --- LEFT SIDE --- */}
          <div className="pointer-events-auto space-y-10 text-center md:text-left animate-in fade-in duration-1000 slide-in-from-left-5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Admissions Open 2025
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  First
                </span>{" "}
                BABM{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  college in Nepal.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed tracking-wider max-w-xl mx-auto md:mx-0 text-balance font-medium">
                Empowering Future, Unleashing Innovation......
              </p>
            </div>

            {/* --- SEARCH SECTION --- */}
            <SearchBar />

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("programs");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    window.location.href = "/programs/bca";
                  }
                }}
                className="px-8 cursor-pointer py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-900/20"
              >
                Explore Programs
              </button>
              <Link href={"/tour"}>
                <button className="px-8 py-4 cursor-pointer bg-white/5 backdrop-blur-sm text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all">
                  Virtual Tour
                </button>
              </Link>
            </div>

            <div className="pt-10 border-t border-white/10 flex flex-wrap gap-8 sm:gap-12 justify-center md:justify-start">
              <StatItem end={7} suffix="+" label="Faculties" />
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <StatItem end={2} suffix="000+" label="Students" />
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <StatItem end={50} suffix="+" label="Collaborators" />
            </div>
          </div>

          {/* --- RIGHT SIDE (Interactive Widgets) --- */}
          <div className="hidden md:flex h-full flex-col justify-center items-end gap-8 pointer-events-none">
            {/* Events Card */}
            <EventCard constraintsRef={constraintsRef} />

            {/* Live Seat Status */}
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              whileHover={{ scale: 1.01 }}
              whileDrag={{ scale: 1.05, cursor: "grabbing", zIndex: 50 }}
              className="pointer-events-auto cursor-grab w-72 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="w-full bg-white/5 h-4 flex items-center justify-center border-b border-white/5">
                <Icons.Grip />
              </div>
              <div className="px-5 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Live Seat Status
                </span>
              </div>
              <div className="relative h-48 overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                <div className="animate-vertical-scroll group-hover:pause-animation">
                  {[...SEAT_DATA, ...SEAT_DATA].map((item, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 border-b border-white/5 flex justify-between items-center"
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white truncate w-36">
                          {item.course}
                        </span>
                        <div className="w-full bg-white/10 h-1 rounded-full mt-1.5">
                          <div
                            className={`h-full rounded-full ${
                              item.seats < 5 ? "bg-red-500" : "bg-emerald-500"
                            }`}
                            style={{
                              width: `${(1 - item.seats / item.total) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-sm font-bold ${
                            item.seats < 5 ? "text-red-400" : "text-emerald-400"
                          }`}
                        >
                          {item.seats}
                        </span>
                        <span className="block text-[10px] text-slate-500 uppercase">
                          left
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const StatItem = ({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) => (
  <div className="flex flex-col items-start">
    <span className="text-4xl font-bold text-white tracking-tighter">
      <CountUp end={end} duration={2.5} suffix={suffix} />
    </span>
    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
      {label}
    </span>
  </div>
);
