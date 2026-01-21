"use client";

import * as React from "react";
import Link from "next/link";
// @ts-ignore - embla-carousel-autoplay does not ship TypeScript declarations
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowUpRight,
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// 1. Import the database directly
// Make sure the path matches where you saved coursedata.ts
import { coursesDB } from "@/public/data/coursedata";

export default function Programs() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  // 2. Transform the coursesDB object into the array format the Carousel expects
  // We use useMemo to avoid re-calculating this on every render, though strictly not necessary for static data
  const programs = React.useMemo(() => {
    return Object.entries(coursesDB).map(([key, course], index) => ({
      id: index + 1,
      // Map 'code' (MBA) to the big title, and 'title' to the subtitle
      title: course.code,
      fullTitle: course.title,
      category: course.category,
      duration: course.duration,
      // Handle credits if it's a number or string in the DB
      credits: `${course.credits} Credits`,
      description: course.description,
      image: course.image,
      // Generate the link based on the object key (e.g., /programs/mba)
      href: `/programs/${key}`,
    }));
  }, []);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Safety check: if database is empty
  if (programs.length === 0) return null;

  return (
    <section className="py-24 bg-[#FAFAFA] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.9] mb-4">
              Our Academic Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-xl ">
              Comprehensive curriculums designed to build your future.
            </p>
          </div>

          {/* Controls */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              className="w-10 h-10 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="w-10 h-10 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-5 pb-6">
            {programs.map((program) => (
              <CarouselItem
                key={program.id}
                className="pl-5 md:basis-1/2 lg:basis-1/3"
              >
                <Link
                  href={program.href}
                  className="group flex flex-col h-full bg-white rounded-[1rem] border border-slate-200 overflow-hidden hover:border-blue-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  {/* Top Half: Image & Category */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-2xl bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-800 shadow-sm border border-white/50">
                        {program.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Half: Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Title Row */}
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
                          {program.fullTitle}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {program.description}
                    </p>

                    {/* Footer: Duration & Credits Grid */}
                    <div className="mt-auto pt-5 border-t border-slate-100 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-md bg-blue-50 text-blue-600">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">
                            Duration
                          </span>
                          <span className="text-sm font-semibold text-slate-700">
                            {program.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 border-l border-slate-100 pl-4">
                        <div className="p-1.5 rounded-md bg-purple-50 text-purple-600">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">
                            Credits
                          </span>
                          <span className="text-sm font-semibold text-slate-700">
                            {program.credits}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Mobile Indicator */}
        <div className="mt-8 flex justify-center md:hidden">
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index + 1
                    ? "w-6 bg-blue-600"
                    : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
