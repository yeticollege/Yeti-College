"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Search,
  Sparkles,
  LayoutGrid,
  X,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Import your data
import { coursesDB } from "@/public/data/coursedata";
import Programs from "../../components/programs";

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Extract unique categories from DB
  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(Object.values(coursesDB).map((c) => c.category))),
    ];
  }, []);

  // 2. Filter logic (Memoized for performance)
  const filteredCourses = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return Object.entries(coursesDB).filter(([_, course]) => {
      // Category Match
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;

      // Search Match (Title or Code)
      const matchesSearch =
        course.title.toLowerCase().includes(query) ||
        course.code.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-6 overflow-hidden">
          {/* Background Decorative Blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[0%] right-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Academic Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6">
                Explore Our Programs
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover industry-relevant degrees designed to empower the next
                generation of leaders, innovators, and professionals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- CONTROLS SECTION (Search & Filter) --- */}
        <section className="px-6 pb-8 sticky top-20 z-30 pointer-events-none">
          <div className="max-w-[1600px] mx-auto pointer-events-auto">
            <div className="bg-background/80 backdrop-blur-xl border border-border/60 shadow-lg shadow-black/5 rounded-[2rem] p-4 flex flex-col md:flex-row items-center gap-4 justify-between">
              {/* Category Filter - Scrollable on mobile */}
              <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <div className="flex gap-2 min-w-max">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border select-none",
                        activeCategory === cat
                          ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                          : "bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-[320px] group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses (e.g. BCA)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-11 pr-10 rounded-full bg-muted/50 border border-transparent focus:bg-background focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Results Count Label */}
            <div className="mt-4 px-4 flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-60">
              <LayoutGrid className="w-3 h-3" />
              <span>{filteredCourses.length} Programs Found</span>
            </div>
          </div>
        </section>

        {/* --- GRID SECTION --- */}
        <section className="px-6 pb-32">
          <div className="max-w-[1600px] mx-auto">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredCourses.map(([slug, course]) => (
                  <CourseCard key={slug} slug={slug} course={course} />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-32 text-center"
              >
                <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-10 h-10 text-muted-foreground/50" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  No programs found
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  We couldn't find any courses matching "{searchQuery}". Try
                  searching for something else or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// --- IMPROVED COURSE CARD ---

function CourseCard({ slug, course }: { slug: string; course: any }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      <Link href={`/programs/${slug}`} className="block h-full">
        <div className="h-full bg-card rounded-[2rem] border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 flex flex-col relative">
          {/* Image Area */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Top Tags */}
            <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-sm">
                {course.code}
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>

            {/* Title Overlay (Bottom Left of Image) */}
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-block px-3 py-1 rounded-md bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider mb-2">
                {course.category}
              </span>
              <h3 className="text-2xl font-bold text-white leading-tight">
                {course.title}
              </h3>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            {/* Description */}
            <p className="text-muted-foreground line-clamp-2 mb-8 text-sm leading-relaxed">
              {course.description}
            </p>

            <div className="mt-auto space-y-6">
              {/* Meta Info Pill */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                <div className="flex-1 flex items-center gap-3 border-r border-border/50">
                  <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted-foreground shadow-sm">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground/70">
                      Duration
                    </div>
                    <div className="text-sm font-bold text-foreground">
                      {course.duration}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-3 pl-2">
                  <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted-foreground shadow-sm">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground/70">
                      Credits
                    </div>
                    <div className="text-sm font-bold text-foreground">
                      {course.credits} Cr.
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                <span>View Curriculum</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
