"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Trophy,
  Users,
  Building2,
  Briefcase,
  Globe,
  CalendarDays,
  Cpu,
  Hotel,
  User,
  ArrowRight,
  History,
  GraduationCap,
  X,
  Menu,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// --- DATA ---
const aboutLinks = [
  {
    href: "/about",
    label: "About Us",
    icon: History,
    desc: "Our history & legacy",
  },
  {
    href: "/about/message/ceo",
    label: "Message From CEO",
    icon: User,
    desc: "Leadership insights",
  },
  {
    href: "/about/message/director",
    label: "Message From Director",
    icon: User,
    desc: "Strategic vision",
  },
  {
    href: "/about/message/principal",
    label: "Message From Principal",
    icon: User,
    desc: "Academic focus",
  },
  {
    href: "/about/mission-vision",
    label: "Mission & Vision",
    icon: Trophy,
    desc: "Our core values",
  },
  {
    href: "/about/facilities",
    label: "Facilities",
    icon: Building2,
    desc: "Campus infrastructure",
  },
  {
    href: "/about/team",
    label: "Our Team",
    icon: Users,
    desc: "Faculty & staff",
  },
];

const programLinks = [
  {
    href: "/programs/mba",
    label: "Master in Business Admin",
    code: "MBA",
    icon: Briefcase,
  },
  {
    href: "/programs/bhm",
    label: "Bachelor in Hotel Mgmt",
    code: "BHM",
    icon: Hotel,
  },
  {
    href: "/programs/babm",
    label: "Bachelor in Airlines Business Mgmt",
    code: "BABM",
    icon: Globe,
  },
  {
    href: "/programs/bamm",
    label: "Masters in Airlines Mgmt",
    code: "Bamm",
    icon: Globe,
  },
  {
    href: "/programs/bamm",
    label: "Bachelor in Event Mgmt",
    code: "BAMM",
    icon: CalendarDays,
  },
  {
    href: "/programs/bttm",
    label: "Bachelor in Tourism",
    code: "BTTM",
    icon: Briefcase,
  },
  {
    href: "/programs/bca",
    label: "Bachelor in Computer App",
    code: "BCA",
    icon: Cpu,
  },
  // Added extra items to demonstrate the 4xn layout
];

// --- SUB-COMPONENTS ---
const NavItem = ({
  label,
  active,
  onMouseEnter,
}: {
  label: string;
  active: boolean;
  onMouseEnter: () => void;
}) => (
  <div
    onMouseEnter={onMouseEnter}
    className="relative h-full flex items-center cursor-pointer px-4 group"
  >
    <span
      className={cn(
        "text-sm font-semibold uppercase tracking-wide transition-colors duration-200 flex items-center gap-1",
        active ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-900"
      )}
    >
      {label}
      <ChevronDown
        className={cn(
          "w-4 h-4 transition-transform duration-300",
          active ? "rotate-180" : "rotate-0"
        )}
      />
    </span>
    <div className="absolute bottom-0 left-0 w-full h-6 translate-y-full bg-transparent" />
  </div>
);

const AboutListItem = ({ item }: { item: (typeof aboutLinks)[0] }) => (
  <Link
    href={item.href}
    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-all duration-300 border border-transparent hover:border-zinc-100"
  >
    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
      <item.icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-black">
        {item.label}
      </h4>
      <p className="text-xs text-zinc-400 font-medium group-hover:text-zinc-500">
        {item.desc}
      </p>
    </div>
    <ChevronRight className="w-4 h-4 ml-auto text-zinc-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
  </Link>
);

const ProgramCard = ({ item }: { item: (typeof programLinks)[0] }) => (
  <Link
    href={item.href}
    className="group relative overflow-hidden bg-zinc-50 rounded-2xl p-4 border border-zinc-100 hover:border-zinc-300 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/50 flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-3">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform duration-300">
        <item.icon className="w-4 h-4 text-zinc-700" />
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-zinc-900 transition-colors">
        {item.code}
      </span>
    </div>
    <h3 className="text-sm font-bold text-zinc-900 leading-tight mb-2 mt-auto">
      {item.label}
    </h3>
    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-zinc-900 transition-colors mt-1">
      View <ArrowRight className="w-3 h-3" />
    </div>
  </Link>
);

// --- MAIN COMPONENT ---
export default function Header() {
  const [activeMenu, setActiveMenu] = useState<"about" | "programs" | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-zinc-100"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image src="/logo.png" alt="alt" width={100} height={100} />
            <span className="text-2xl font-bold tracking-tight text-zinc-900 hidden sm:block">
              Yeti International College<span className="text-zinc-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex h-full items-center gap-1">
            <NavItem
              label="Programs"
              active={activeMenu === "programs"}
              onMouseEnter={() => setActiveMenu("programs")}
            />
            <NavItem
              label="About"
              active={activeMenu === "about"}
              onMouseEnter={() => setActiveMenu("about")}
            />
            <Link
              href="/events"
              className="px-4 text-sm font-semibold uppercase tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Events
            </Link>
            <Link
              href="/blog"
              className="px-4 text-sm font-semibold uppercase tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              blog
            </Link>
            <Link
              href="/gallery"
              className="px-4 text-sm font-semibold uppercase tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Gallery
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex rounded-full px-6 font-bold tracking-wide bg-zinc-900 text-white hover:bg-zinc-800">
              Apply Now
            </Button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-zinc-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MEGA MENU DROPDOWN */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl shadow-zinc-900/5 overflow-hidden"
            >
              <div className="max-w-[1600px] mx-auto px-6 py-12">
                {/* === ABOUT MENU CONTENT === */}
                {activeMenu === "about" && (
                  <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-4 bg-zinc-50 rounded-3xl p-8 flex flex-col justify-between border border-zinc-100">
                      <div>
                        <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 inline-block">
                          Est. 2002
                        </span>
                        <h3 className="text-3xl font-bold text-zinc-900 mb-4 leading-none">
                          Educating the
                          <br />
                          Leaders of Tomorrow.
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          Yeti International College is a premier institution
                          dedicated to academic excellence.
                        </p>
                      </div>
                      <Link
                        href="/about"
                        className="flex items-center gap-2 text-sm font-bold text-zinc-900 hover:gap-3 transition-all"
                      >
                        Read Our Story <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="col-span-8">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-zinc-100 pb-2">
                        Explore About
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {aboutLinks.map((link) => (
                          <AboutListItem key={link.label} item={link} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* === PROGRAMS MENU CONTENT (4xN Layout) === */}
                {activeMenu === "programs" && (
                  <div className="grid grid-cols-12 gap-8 h-full">
                    {/* Featured Side (Compact) */}
                    <div className="col-span-3 flex flex-col">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                          Programs
                        </h3>
                        <p className="text-zinc-500 text-xs mb-4 leading-relaxed">
                          Explore our {programLinks.length} accredited programs.
                        </p>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="text"
                            placeholder="Find a program..."
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="mt-auto p-5 bg-zinc-900 rounded-2xl text-white relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-zinc-800/50 rounded-full blur-xl" />
                        <GraduationCap className="w-6 h-6 mb-3 text-zinc-400 relative z-10" />
                        <div className="text-xl font-bold mb-1 relative z-10">
                          Fall 2025
                        </div>
                        <p className="text-xs text-zinc-400 mb-3 relative z-10">
                          Applications open.
                        </p>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="w-full font-bold text-[10px] uppercase tracking-wider relative z-10"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>

                    {/* The 4xN Grid Area */}
                    <div className="col-span-9">
                      <div className="max-h-[60vh] overflow-y-auto pr-2 pb-2 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
                        {/* 
                           CHANGED: 
                           1. lg:grid-cols-4 -> Forces 4 columns on large screens
                           2. gap-3 -> Slightly tighter gap for density
                        */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {programLinks.map((link) => (
                            <ProgramCard key={link.label} item={link} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-zinc-900/20 backdrop-blur-[2px] z-40 pointer-events-none top-[80px]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
