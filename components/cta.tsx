"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function CTA() {
  const [showBg, setShowBg] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowBg(entry.isIntersecting),
      { threshold: 0.1 } // trigger when 10% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#14316f] overflow-hidden min-h-[700px] flex items-center"
    >
      {/* 
          FIXED IMAGE CONSTRAINED TO SECTION HEIGHT
          - absolute inset-0: Matches section size
          - clip-path: inset(0): Masks the 'fixed' child so it doesn't bleed out
          - fixed: Image stays still while you scroll
      */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ clipPath: "inset(0)" }}
      >
        <div 
          className={`fixed inset-0 w-full h-full transition-opacity duration-1000 ${
            showBg ? "opacity-40" : "opacity-0"
          }`}
        >
          <img
            src="/bg-salogan.svg" // Replace with your image path
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl bg-white/80 backdrop-blur-md rounded-2xl p-10 mx-auto shadow-2xl">
        <div className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none" />
        
        {/* Simple Top Label */}
        <div className="mb-8 flex justify-center">
          <span className="px-3 py-1 rounded-full border border-red-500 text-xs font-bold text-zinc-500 uppercase tracking-widest">
            Admissions 2025
          </span>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6 tracking-tighter">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-zinc-500 mb-10 max-w-xl mx-auto font-medium">
            Take the first step toward your future with a world-class education
            at Yeti International College.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={"/apply"}>
              <Button className="rounded-full px-10 h-14 text-base font-bold bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-xl">
                Start Application
              </Button>
            </Link>

            {/* Minimal Text Link Button */}
            <Link
              href="/contact"
              className="group flex items-center gap-2 text-zinc-700 font-bold hover:text-zinc-900 transition-colors px-6 py-3"
            >
              Request Info
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}