"use client";

import Link from "next/link";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// Define the interface to match your JSON structure
type Article = {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt?: string;
};

export default function blog() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Initialize the plugin in a ref
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  // Fetch data from the JSON file
  React.useEffect(() => {
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.posts || []);
      })
      .catch((err) => console.error("Failed to fetch blog:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="py-24 text-center">Loading updates...</div>;
  }

  return (
    <section className="py-24 bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-6 justify-center">
        {/* Swiss Header: Strong Grid + Heavy Top Line */}
        <div className="border-t border-zinc-900 pt-8 mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            {/* Label Column */}
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-zinc-500">
                / 03 Updates
              </span>
            </div>
            {/* Main Headline Column */}
            <div className="lg:col-span-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.9]">
                Latest blog
              </h2>
            </div>
            {/* Controls Column (Aligned Right) */}
            <div className="lg:col-span-3 flex justify-start lg:justify-end pb-2">
              <div className="flex gap-2">
                <button
                  onClick={() => api?.scrollPrev()}
                  aria-label="Previous slide"
                  className="h-12 w-12 flex items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={() => api?.scrollNext()}
                  aria-label="Next slide"
                  className="h-12 w-12 flex items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          // @ts-ignore - embla-carousel-autoplay does not ship TypeScript declarations

          plugins={[plugin.current]}
          className="w-full"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-8">
            {articles.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-8 md:basis-1/2 lg:basis-1/3"
              >
                {/* Wrapped in Link for navigation to detail page */}
                <Link href={`/blog/${item.id}`}>
                  <div className="group cursor-pointer flex flex-col h-full">
                    {/* 1. Image: Soft Rounded Corners (Subtle Roundness) */}
                    <div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[16/10] mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://placehold.co/600x400/f4f4f5/a1a1aa?text=blog";
                        }}
                      />
                      {/* Grainy/Dark overlay for depth on hover */}
                      <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors duration-500" />

                      {/* Floating category tag */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-zinc-900">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* 2. Content: Swiss Typography */}
                    <div className="flex flex-col flex-grow">
                      {/* Date Line */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="h-px w-4 bg-zinc-300" />
                        <span className="text-xs font-mono text-zinc-500 uppercase">
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="flex justify-between items-start gap-4 group/title">
                        <h3 className="text-xl font-bold leading-tight text-zinc-900 group-hover:text-zinc-600 transition-colors line-clamp-2">
                          {item.title}
                        </h3>

                        {/* Icon anchor */}
                        <div className="h-8 w-8 rounded-full border border-zinc-200 flex items-center justify-center flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Footer Actions: Link and Mobile Controls */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-6 relative">
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center px-8 py-4 text-sm font-bold transition-all bg-white border border-zinc-200 rounded-full hover:bg-zinc-900 hover:text-white hover:border-zinc-900 group"
            >
              View all blog
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Controls (Minimal dots or arrows) */}
            <div className="flex justify-end gap-3 md:hidden w-full">
              <CarouselPrevious className="static translate-y-0 border-zinc-200 h-12 w-12 rounded-full" />
              <CarouselNext className="static translate-y-0 border-zinc-200 h-12 w-12 rounded-full" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
