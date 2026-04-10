"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Calendar,
  Briefcase,
  Layers,
  Sparkles,
  Code2,
  Library,
  FileText, 
  ExternalLink,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Define props interface
interface CourseClientProps {
  course: any; 
  slug: string;
  initialView?: number | string; // Prop to handle direct URL entry
}

export default function CourseClient({ course, slug, initialView = 0 }: CourseClientProps) {
  const curriculumSectionRef = useRef<HTMLDivElement>(null);

  if (!course) return <div className="p-20 text-center">Course Not Found</div>;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
        {/* --- HERO SECTION --- */}
        <header className="pt-24 pb-20 px-6 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full border border-primary/20 text-primary bg-primary/5 text-xs font-bold uppercase tracking-wider">
                    {course.code}
                  </span>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    {course.category}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 leading-[0.95]">
                  {course.title}
                </h1>
              </motion.div>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-lg md:text-xl leading-relaxed font-medium text-muted-foreground text-balance">
                {course.description}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-3xl overflow-hidden mb-12">
            <StatBox
              icon={<Clock className="w-4 h-4" />}
              label="Duration"
              value={course.duration}
            />
            <StatBox
              icon={<BookOpen className="w-4 h-4" />}
              label="Credits"
              value={`${course.credits}`}
            />
            <StatBox
              icon={<Calendar className="w-4 h-4" />}
              label="Intake"
              value={course.intake}
            />
            <StatBox
              icon={<Layers className="w-4 h-4" />}
              label="Semesters"
              value={`${course.semesters} Sems`}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] rounded-[2rem] overflow-hidden relative shadow-sm border border-border/50 group"
          >
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </motion.div>
        </header>

        {/* --- MAIN CONTENT --- */}
        <div className="max-w-[1600px] mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-8 flex flex-col gap-32">
              {/* 01. OVERVIEW */}
              <section id="overview" className="scroll-mt-32">
                <SectionLabel number="01" title="Overview" />
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
                    {course.overview.map((paragraph: string, i: number) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="bg-card rounded-3xl p-8 space-y-4 border border-border h-fit">
                    <h3 className="font-bold text-xl mb-6 text-foreground">
                      Program Highlights
                    </h3>
                    {course.highlights.map((point: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 02. CURRICULUM & FEE STRUCTURE */}
              <section id="curriculum" ref={curriculumSectionRef} className="scroll-mt-32">
                <SectionLabel number="02" title="Curriculum" />
                <CurriculumTabs 
                  course={course} 
                  slug={slug} 
                  initialView={initialView}
                  sectionRef={curriculumSectionRef} 
                />
              </section>

              {/* 03. CAREERS */}
              <section id="careers" className="scroll-mt-32">
                <SectionLabel number="03" title="Career Paths" />
                <div className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border shadow-sm relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="grid md:grid-cols-2 gap-16">
                      <div>
                        <h3 className="text-3xl font-bold mb-6 tracking-tight">
                          Future Opportunities
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                          Our graduates are leading the industry. With a degree
                          in {course.code}, you open doors to global
                          opportunities.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                              {course.stats.placementRate}
                            </div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">
                              Placement Rate
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center gap-3">
                        {course.careers.map((job: string, i: number) => (
                          <div
                            key={i}
                            className="group flex items-center justify-between p-4 border-b border-border hover:bg-muted/30 transition-colors cursor-default"
                          >
                            <span className="text-xl font-medium text-foreground/80 group-hover:text-primary transition-colors">
                              {job}
                            </span>
                            <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-50 group-hover:opacity-100" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="p-8 rounded-[2rem] bg-card border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Admissions
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-bold text-green-600">
                        Open
                      </span>
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight text-foreground">
                    Fall 2025 Intake
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Applications are now open for the upcoming academic session.
                    Limited seats available.
                  </p>
                  <div className="space-y-3">
                    <Link href={"/apply"}>
                      <Button className="w-full mb-3 h-14 rounded-xl text-base font-bold shadow-none">
                        Apply Now
                      </Button>
                    </Link>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-14 rounded-xl text-base font-bold border-border bg-transparent"
                    >
                      <a href={`/course_brochure/${slug}.pdf`} download>
                        Download Brochure
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

// --- HELPER COMPONENTS ---

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-12 border-b border-border pb-6">
      <span className="text-sm font-mono font-bold text-primary">{number}</span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}

function StatBox({ label, value, icon }: { label: string; value: string; icon: any }) {
  return (
    <div className="bg-card p-8 flex flex-col justify-between h-40 hover:bg-muted/30 transition-colors group">
      <div className="flex justify-between items-start">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
          {label}
        </span>
        <span className="text-muted-foreground/50 group-hover:text-primary transition-colors">
          {icon}
        </span>
      </div>
      <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
        {value}
      </span>
    </div>
  );
}

function CurriculumTabs({ course, slug, initialView, sectionRef }: { course: any, slug: string, initialView: number | string, sectionRef: React.RefObject<HTMLDivElement> }) {
  const [activeTab, setActiveTab] = useState<number | string>(initialView);
  const curriculum = course.curriculum || [];
  const feeUrl = course.feeStructureImage || "";
  const isPdf = feeUrl.toLowerCase().endsWith(".pdf");

  // --- 1. Deep Link Scrolling ---
  useEffect(() => {
    if (initialView === "fee") {
      // Small timeout to allow the browser to complete initial render
      const timer = setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [initialView, sectionRef]);

  // --- 2. Browser Back/Forward Navigation ---
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.endsWith("/fee-structure")) {
        setActiveTab("fee");
      } else {
        setActiveTab(0);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // --- 3. Tab Change & URL Synchronization ---
  const handleTabChange = (tab: number | string) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const baseUrl = `/programs/${slug}`;
      if (tab === "fee") {
        window.history.pushState(null, "", `${baseUrl}/fee-structure`);
      } else {
        window.history.pushState(null, "", baseUrl);
      }
    }
  };

  const isFeeTab = activeTab === "fee";
  const currentYear = !isFeeTab ? curriculum[activeTab as number] : null;

  return (
    <div className="bg-card rounded-[2.5rem] p-2 md:p-8 border border-border">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-2">
        {curriculum.map((year: any, idx: number) => (
          <button
            key={idx}
            onClick={() => handleTabChange(idx)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border",
              activeTab === idx
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-transparent hover:bg-muted"
            )}
          >
            {year.year}
          </button>
        ))}

        {feeUrl && (
          <button
            onClick={() => handleTabChange("fee")}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border",
              activeTab === "fee"
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-transparent text-muted-foreground border-transparent hover:bg-muted"
            )}
          >
            <FileText className="w-4 h-4" />
            Fee Structure
          </button>
        )}
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {isFeeTab ? (
            <motion.div
              key="fee-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-bold text-foreground">Program Fee Structure</h3>
                  <div className="hidden md:block h-px w-32 bg-border/60" />
                </div>
                <div className="flex gap-2">
                  <a href={feeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all text-xs font-bold">
                    <ExternalLink className="w-3.5 h-3.5" /> Open Fullscreen
                  </a>
                  <a href={feeUrl} download className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all text-xs font-bold">
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
              </div>

              <div className="w-full border border-border rounded-2xl overflow-hidden bg-muted/10 min-h-[500px] flex items-center justify-center">
                {isPdf ? (
                  <iframe src={`${feeUrl}#toolbar=0&view=FitH`} className="w-full h-[700px] rounded-2xl" title="Fee Structure PDF" />
                ) : (
                  <img src={feeUrl} alt="Fee Structure" className="max-w-full h-auto object-contain shadow-2xl" />
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16"
            >
              {currentYear?.semesters.map((sem: any, sIdx: number) => (
                <div key={sIdx} className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl font-bold text-foreground">{sem.semester}</h3>
                    <div className="h-px flex-1 bg-border/60" />
                  </div>
                  <div className="space-y-3">
                    {sem.subjects.map((sub: string, i: number) => (
                      <div key={i} className="p-4 rounded-xl border border-border bg-background">
                         <span className="text-sm font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}