"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, X, Code2, Layers } from "lucide-react";

// --- DATA CONFIGURATION ---
const TEAM = [
  {
    name: "Sumit Pokhrel",
    role: "Frontend",
    image: "/sumit.jpg", // ⚠️ Replace with actual path
    link: "https://sumit.info.np",
    badge: "lead developer",
  },
  {
    name: "Chandan Kushwaha",
    role: "Backend",
    image: "/chandan.jpg", // ⚠️ Replace with actual path
    link: "https://github.com/Chandan-kushwaha01",
    badge: null,
  },
];

const TECH_STACK = [
  "Next.js 15",
  "React 19",
  "Tailwind",
  "Motion",
  "TypeScript",
];

// --- ANIMATION VARIANTS ---
const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVar = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

export default function DeveloperCredit() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#F4F4F4] text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto min-h-screen flex flex-col justify-between px-6 py-8 md:p-16 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVar}
      >
        {/* --- HEADER --- */}
        <motion.header
          variants={itemVar}
          className="flex items-center justify-between border-b-2 border-black pb-6 mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-black animate-pulse" />
            <span className="font-bold text-xs tracking-[0.2em] uppercase">
              Credits
            </span>
          </div>
          <Link
            href="/about/team"
            className="group flex items-center gap-2 text-sm font-medium hover:text-zinc-600 transition-colors"
          >
            <span>Close</span>
            <div className="bg-black text-white p-1 group-hover:rotate-90 transition-transform duration-300">
              <X size={14} />
            </div>
          </Link>
        </motion.header>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* LEFT: Massive Typography */}
          <motion.div
            variants={itemVar}
            className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center h-full sticky top-20"
          >
            <h1 className="text-[13vw] lg:text-[7rem] xl:text-[8.5rem] font-bold tracking-tighter leading-[0.85] uppercase mb-6">
              The
              <br />
              <span className="text-zinc-400">Builders.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-lg font-medium text-zinc-600 leading-relaxed">
              Architecting digital experiences through clean code, robust
              backends, and precise design systems.
            </p>

            {/* Tech Stack List (Moved here for better balance) */}
            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                Technology Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-zinc-300 text-xs font-mono rounded-full hover:bg-black hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Developer Cards */}
          <motion.div
            variants={itemVar}
            className="lg:col-span-5 xl:col-span-4 flex flex-col space-y-12 border-l-0 lg:border-l border-zinc-300 lg:pl-10"
          >
            {TEAM.map((dev, index) => (
              <a
                key={index}
                href={dev.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-200 mb-4 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Badge (Only if exists, emphasizes Sumit) */}
                  {dev.badge && (
                    <div className="absolute top-0 left-0 bg-black text-white px-3 py-2 text-xs font-bold uppercase tracking-widest z-10">
                      {dev.badge}
                    </div>
                  )}

                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                    <div className="bg-white p-3 rounded-full text-black">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Text Details */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-zinc-400">
                      {dev.name}
                    </h2>
                    <p className="text-sm text-zinc-500 font-mono mt-1 uppercase tracking-wide">
                      {dev.role}
                    </p>
                  </div>
                  {/* Numbering: 01, 02 */}
                  <span className="text-xs font-bold text-zinc-300 font-mono">
                    0{index + 1}
                  </span>
                </div>
              </a>
            ))}

            <div className="pt-8 border-t border-zinc-300">
              <p className="text-sm text-zinc-600">
                Want to build something together? <br />
                <a
                  href="mailto:hello@example.com"
                  className="text-black font-bold border-b border-black hover:text-zinc-500 hover:border-zinc-500 transition-all"
                >
                  Send us a message
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- FOOTER --- */}
        <motion.footer
          variants={itemVar}
          className="mt-20 md:mt-0 flex items-end justify-between text-xs font-mono text-zinc-400 uppercase border-t border-zinc-200 pt-6"
        >
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <Code2 size={12} /> V2.0.1
            </div>
            <div className="flex items-center gap-1">
              <Layers size={12} /> {TECH_STACK.length} Technologies
            </div>
          </div>
          <div className="text-right">
            Kathmandu, Nepal <br />© {currentYear}
          </div>
        </motion.footer>
      </motion.div>
    </main>
  );
}
