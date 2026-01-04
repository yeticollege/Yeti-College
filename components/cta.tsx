import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-white border-t border-zinc-100">
      <div className="max-w-5xl mx-auto">
        {/* Simple Top Label */}
        <div className="mb-8 flex justify-center">
          <span className="px-3 py-1 rounded-full border border-zinc-200 text-xs font-medium text-zinc-500 uppercase tracking-wider">
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
