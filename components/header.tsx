"use client";

import React, { useState, useMemo } from "react";
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
  FileText,
  Image as ImageIcon,
  ComputerIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";

// --- DOMAIN UTILITY (Simulated/Placeholder) ---
// IMPORTANT: In a real application, you'd get the domain from window.location.hostname
// or a server-side context. For this code example, we will hardcode it for demonstration.
const getCurrentDomain = () => {
  // Replace this with your actual logic to get the domain
  // Example for testing the filter:
  // return "kennt.edu.np"; // Will hide BCA
  // return "yeti.edu.np"; // Will show BCA

  // Using a safe placeholder that will require you to set the real domain logic:
  if (typeof window !== "undefined") {
    return window.location.hostname;
  }
  return "";
};

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
    icon: User,
    label: "Message From Director",
    desc: "Strategic vision",
  },
  {
    href: "/about/message/principal",
    label: "Message From Principal",
    icon: User,
    desc: "Academic focus",
  },
  {
    href: "/about/message/hod",
    label: "Message From HOD",
    icon: User,
    desc: "Admission focus",
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
  {
    href: "/about/affiliation",
    label: "Affiliation",
    icon: Users,
    desc: "Affiliated Universities",
  },
];

const programLinks = [
  {
    href: "/programs/mba",
    label: "Master in Business Administration",
    code: "MBA",
    icon: Briefcase,
  },
  {
    href: "/programs/bhm",
    label: "Bachelor in Hotel Management",
    code: "BHM",
    icon: Hotel,
  },
  {
    href: "/programs/babm",
    label: "Bachelor in Airlines Business Management",
    code: "BABM",
    icon: Globe,
  },
  {
    href: "/programs/bamm",
    label: "Bachelor in MICE (Event) Management",
    code: "Bamm",
    icon: Globe,
  },
  {
    href: "/programs/bttm",
    label: "Bachelor in Tourism & MICE Management",
    code: "BTTM",
    icon: Briefcase,
  },
  {
    href: "/programs/bca",
    label: "Bachelor of Computer Application",
    code: "BCA",
    icon: Cpu,
  },
  // {
  //   href: "/programs/bsccsi",
  //   label: "B.Sc Computer Science and Software Development Innovation",
  //   code: "B.Sc CSI",
  //   icon: ComputerIcon,
  // },
  {
    href: "/programs/bscictc",
    label: "B.Sc Information and Communication Technology-Cybersecurity",
    code: "BCA",
    icon: Cpu,
  },
];
const standardLinks = [
  { label: "Notices", href: "/notices", icon: FileText },
  { label: "Events", href: "/events", icon: CalendarDays },
  { label: "blog", href: "/blog", icon: Globe },
  { label: "Gallery", href: "/gallery", icon: ImageIcon },
  { label: "Contact", href: "/contact", icon: User },
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

// Helper component for Mobile Dropdowns
const MobileMenuSection = ({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-zinc-100 last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 text-left font-bold text-zinc-900"
    >
      {title}
      <ChevronDown
        className={cn(
          "w-5 h-5 text-zinc-400 transition-transform duration-300",
          isOpen ? "rotate-180" : "rotate-0"
        )}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-4 pt-2 text-zinc-600">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- MAIN COMPONENT ---
export default function Header() {
  const [activeMenu, setActiveMenu] = useState<"about" | "programs" | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);

  // SEARCH STATES
  const [programSearchQuery, setProgramSearchQuery] = useState("");
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");

  const handleMouseLeave = () => setActiveMenu(null);

  const toggleMobileSection = (section: string) => {
    setMobileExpand(mobileExpand === section ? null : section);
  };

  // --- BCA FILTERING LOGIC ---
  const currentDomain = useMemo(() => getCurrentDomain(), []);

  const isBCAForbidden = useMemo(() => {
    // Check if the domain is exactly 'kennt.edu.np' or 'www.kennt.edu.np'
    return (
      currentDomain === "http://localhost:3000/" ||
      currentDomain === "www.kennt.edu.np"
    );
  }, [currentDomain]);

  // 1. Filter the base program links array
  const availableProgramLinks = useMemo(() => {
    return programLinks.filter((link) => {
      // Exclude BCA if the domain restriction applies
      if (isBCAForbidden && link.code === "BCA") {
        return false;
      }
      return true;
    });
  }, [isBCAForbidden]);

  // 2. Filter Programs for Desktop Menu (uses the filtered list)
  const filteredPrograms = useMemo(() => {
    if (!programSearchQuery) return availableProgramLinks;
    const lowerQ = programSearchQuery.toLowerCase();
    return availableProgramLinks.filter(
      (p) =>
        p.label.toLowerCase().includes(lowerQ) ||
        p.code.toLowerCase().includes(lowerQ)
    );
  }, [programSearchQuery, availableProgramLinks]);

  // 3. Filter Everything for Mobile Menu (uses the filtered list)
  const filteredMobileItems = useMemo(() => {
    if (!mobileSearchQuery) return [];
    const lowerQ = mobileSearchQuery.toLowerCase();

    const programs = availableProgramLinks.filter((p) =>
      p.label.toLowerCase().includes(lowerQ)
    );
    const about = aboutLinks.filter((a) =>
      a.label.toLowerCase().includes(lowerQ)
    );
    const standard = standardLinks.filter((s) =>
      s.label.toLowerCase().includes(lowerQ)
    );

    return [
      ...programs.map((i) => ({
        ...i,
        type: "Program",
        href: i.href,
        icon: i.icon,
      })),
      ...about.map((i) => ({
        ...i,
        type: "About",
        href: i.href,
        icon: i.icon,
      })),
      ...standard.map((i) => ({
        ...i,
        type: "Page",
        href: i.href,
        icon: i.icon,
      })),
    ];
  }, [mobileSearchQuery, availableProgramLinks]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-zinc-100"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* --- LEFT: LOGO --- */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <NextImage
              src="/logo.png"
              alt="Yeti International College logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* --- CENTER: DESKTOP NAV --- */}
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
            {standardLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 text-sm font-semibold uppercase tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* --- RIGHT: ACTIONS & SECONDARY LOGO --- */}
          <div className="flex items-center gap-4">
            {/* START: Secondary Logo (Affiliation) */}
            <div className="hidden xl:flex items-center gap-3 mr-2 group">
              {/* <div className="text-right">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">
                  Affiliated
                </div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
                  With
                </div>
              </div> */}
              {/* Vertical Divider */}
              <div className="h-8 w-px bg-zinc-200" />

              {/* Secondary Logo Image */}
              <Link
                href="https://www.kennt.edu.np/"
                className="relative w-32 h-32  group-hover:opacity-100 transition-all duration-300"
              >
                <NextImage
                  src="/kennt-logo.png" // Replace with your secondary logo
                  alt="Affiliate University"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
            {/* END: Secondary Logo */}

            <Link href="/apply">
              <Button className="hidden sm:flex rounded-full px-6 font-bold cursor-pointer tracking-wide bg-zinc-900 text-white hover:bg-zinc-800">
                Apply Now
              </Button>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-zinc-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU CONTENT --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "calc(100vh - 80px)" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-20 left-0 w-full bg-white z-40 border-t border-zinc-100 overflow-y-auto"
            >
              <div className="p-6 flex flex-col min-h-full">
                {/* Mobile Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    placeholder="Search programs, pages..."
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-full pl-9 pr-10 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                  />
                  {mobileSearchQuery && (
                    <button
                      onClick={() => setMobileSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* SEARCH RESULTS VIEW */}
                {mobileSearchQuery ? (
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                      Search Results ({filteredMobileItems.length})
                    </h3>
                    {filteredMobileItems.length > 0 ? (
                      filteredMobileItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 border border-zinc-100/50"
                        >
                          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
                            {item.icon ? (
                              <item.icon className="w-4 h-4" />
                            ) : (
                              <ArrowRight className="w-4 h-4" />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-zinc-900">
                              {item.label}
                            </div>
                            <div className="text-[10px] uppercase font-bold text-zinc-400">
                              {item.type}
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="text-center py-8 text-zinc-400 text-sm">
                        No matches found for "{mobileSearchQuery}"
                      </div>
                    )}
                  </div>
                ) : (
                  /* DEFAULT MENU VIEW */
                  <>
                    <MobileMenuSection
                      title="Programs"
                      isOpen={mobileExpand === "programs"}
                      onToggle={() => toggleMobileSection("programs")}
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {/* Use the filtered list here */}
                        {availableProgramLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 text-sm font-medium text-zinc-600"
                          >
                            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                              <link.icon className="w-4 h-4 text-zinc-500" />
                            </div>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </MobileMenuSection>

                    <MobileMenuSection
                      title="About Us"
                      isOpen={mobileExpand === "about"}
                      onToggle={() => toggleMobileSection("about")}
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {aboutLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 text-sm font-medium text-zinc-600"
                          >
                            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                              <link.icon className="w-4 h-4 text-zinc-500" />
                            </div>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </MobileMenuSection>

                    <div className="flex flex-col gap-1 py-2">
                      {standardLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-3 border-b border-zinc-100 text-sm font-bold uppercase tracking-wide text-zinc-500 hover:text-zinc-900"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    {/* Mobile Footer Area */}
                    <div className="mt-8 space-y-6">
                      <Link href="/apply">
                        <Button className="w-full rounded-full py-6 font-bold tracking-wide bg-zinc-900 text-white hover:bg-zinc-800">
                          Apply Now
                        </Button>
                      </Link>

                      {/* Mobile Secondary Logo */}
                      <div className="flex items-center justify-center gap-4 pt-4 border-t border-zinc-100 opacity-60">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                          Affiliated With
                        </span>
                        {/* Replace with your secondary logo path */}
                        <div className="relative w-24 h-24">
                          <NextImage
                            src="/kennt-logo.png"
                            alt="Affiliate"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* DESKTOP MEGA MENU DROPDOWN */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl shadow-zinc-900/5 overflow-hidden hidden lg:block"
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

                {/* === PROGRAMS MENU CONTENT === */}
                {activeMenu === "programs" && (
                  <div className="grid grid-cols-12 gap-8 h-full">
                    <div className="col-span-3 flex flex-col">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                          Programs
                        </h3>
                        <p className="text-zinc-500 text-xs mb-4 leading-relaxed">
                          Explore our accredited programs.
                        </p>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="text"
                            value={programSearchQuery}
                            onChange={(e) =>
                              setProgramSearchQuery(e.target.value)
                            }
                            placeholder="Find a program..."
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-full pl-9 pr-10 py-2 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                          />
                          {programSearchQuery && (
                            <button
                              onClick={() => setProgramSearchQuery("")}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
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
                        <Link href="/apply">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="w-full font-bold text-[10px] uppercase tracking-wider cursor-pointer relative z-10"
                          >
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-9">
                      <div className="max-h-[60vh] overflow-y-auto pr-2 pb-2 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {/* Use the filtered list here */}
                          {filteredPrograms.length > 0 ? (
                            filteredPrograms.map((link) => (
                              <ProgramCard key={link.label} item={link} />
                            ))
                          ) : (
                            <div className="col-span-4 py-12 text-center">
                              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Search className="w-5 h-5 text-zinc-300" />
                              </div>
                              <p className="text-zinc-400 font-medium">
                                No programs found for "{programSearchQuery}"
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop Overlay */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-zinc-900/20 backdrop-blur-[2px] z-40 pointer-events-none top-[80px] hidden lg:block"
            />
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
