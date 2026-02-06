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

      {/* Background Watermark Text - Only shows when section is visible */}
      {showBg && (
        <div className="fixed pt-16 inset-0 flex flex-col pointer-events-none select-none">
          <h2 className="text-[8rem] md:text-[15rem] font-black text-white/[0.3] leading-none tracking-tighter uppercase">
            grow with
          </h2>
          <h2 className="text-[6rem] text-end pe-10 md:text-[10rem] font-black text-white/[0.3] leading-none tracking-wider uppercase ml-24 md:ml-64">
            yeti
          </h2>
        </div>
      )}
      <div className="relative max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl p-10 mx-auto">
      <div className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none" />
        {/* Simple Top Label */}
        <div className="mb-8 flex justify-center">
          <span className="px-3 py-1 rounded-full border border-red-500 text-xs font-medium text-zinc-500 uppercase tracking-wider">
            Admissions 2025
          </span>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tighter">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-zinc-500 mb-10 max-w-xl mx-auto font-light">
            Take the first step toward your future with a world-class education
            at Yeti International College.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={"/apply"}>
              <Button className="rounded-full px-10 h-12 text-base bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-105 transition-all duration-300">
                Start Application
              </Button>
            </Link>

            {/* Minimal Text Link Button */}
            <a
              href="/contact"
              className="group flex items-center gap-2 text-zinc-600 font-medium hover:text-zinc-900 transition-colors px-6 py-3"
            >
              Request Info
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
