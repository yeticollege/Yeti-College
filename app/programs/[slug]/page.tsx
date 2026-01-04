"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  Calendar,
  Briefcase,
  Layers,
  Sparkles,
  Cpu,
  Code2,
  Library,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Import your data
import { coursesDB } from "@/public/data/coursedata";
import Link from "next/link";

export default function CourseDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug || "bca";

  const course = coursesDB[slug] || coursesDB["bca"];

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
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
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

              {/* 02. CURRICULUM */}
              <section id="curriculum" className="scroll-mt-32">
                <SectionLabel number="02" title="Curriculum" />
                <CurriculumTabs curriculum={course.curriculum} />
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
                          <div>
                            {/* <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                              {course.stats.startingSalary}
                            </div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">
                              Avg. Salary
                            </div> */}
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

              {/* 04. ELIGIBILITY (Same as before) */}
              {/* ... */}
            </div>

            {/* RIGHT SIDEBAR (Same as before) */}
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
                    <Link href={'/apply'}>
                      <Button className="w-full mb-3 h-14 rounded-xl text-base font-bold shadow-none">
                        Apply Now
                      </Button>
                    </Link>
                    <Button asChild variant="outline" className="w-full h-14 rounded-xl text-base font-bold border-border bg-transparent">
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

// --- SUB COMPONENTS ---

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

function StatBox({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: any;
}) {
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

// --- UPDATED CURRICULUM TABS ---
function CurriculumTabs({ curriculum }: { curriculum: any[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentYear = curriculum[activeTab];

  // Helper to split "CODE Title"
  const formatSubject = (subject: string) => {
    // Basic regex to check for codes like "BUS501 " or "CACS101 "
    const match = subject.match(/^([A-Z]{3,4}\d{3})\s+(.*)/);
    if (match) {
      return { code: match[1], title: match[2] };
    }
    return { code: null, title: subject };
  };

  const getSubjectStyle = (subject: string) => {
    const lowerSub = subject.toLowerCase();
    // Logic for styling special rows
    if (
      lowerSub.includes("project") ||
      lowerSub.includes("internship") ||
      lowerSub.includes("thesis")
    ) {
      return {
        container: "border-primary/40 bg-primary/5 hover:border-primary",
        dot: "bg-primary",
        text: "text-foreground font-semibold",
      };
    }
    if (lowerSub.includes("elective") || lowerSub.includes("seminar")) {
      return {
        container:
          "border-dashed border-accent/50 bg-accent/5 hover:border-accent",
        dot: "bg-accent",
        text: "text-foreground",
      };
    }
    return {
      container: "bg-background border-border hover:border-primary/30",
      dot: "bg-muted-foreground/30 group-hover:bg-primary",
      text: "text-muted-foreground group-hover:text-foreground",
    };
  };

  return (
    <div className="bg-card rounded-[2.5rem] p-2 md:p-8 border border-border">
      {/* Year Selection Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 p-2">
        {curriculum.map((year, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border",
              activeTab === idx
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
            )}
          >
            {year.year}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.3 }}
            className="p-2 md:p-4"
          >
            {/* Semesters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {currentYear.semesters.map((sem: any, sIdx: number) => (
                <div key={sIdx} className="flex flex-col gap-6">
                  {/* Semester Header */}
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {sIdx + 1 + activeTab * 2}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {sem.semester}
                    </h3>
                    <div className="h-px flex-1 bg-border/60" />
                  </div>

                  {/* Core Subjects List */}
                  <div className="space-y-3">
                    {sem.subjects.map((subject: string, subIdx: number) => {
                      const style = getSubjectStyle(subject);
                      const { code, title } = formatSubject(subject);

                      return (
                        <motion.div
                          key={subIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIdx * 0.05 + sIdx * 0.1 }}
                          className={cn(
                            "group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-sm",
                            style.container
                          )}
                        >
                          {/* Code Badge */}
                          {code && (
                            <span className="hidden sm:block text-[10px] font-bold px-2 py-1 rounded bg-muted/50 text-muted-foreground border border-border">
                              {code}
                            </span>
                          )}

                          {!code && (
                            <div
                              className={cn(
                                "w-1.5 h-1.5 rounded-full transition-colors shrink-0",
                                style.dot
                              )}
                            />
                          )}

                          <span
                            className={cn(
                              "text-base transition-colors line-clamp-2",
                              style.text
                            )}
                          >
                            {title}
                          </span>

                          {/* Icons */}
                          {(title.toLowerCase().includes("internship") ||
                            title.toLowerCase().includes("thesis")) && (
                              <Briefcase className="w-4 h-4 ml-auto text-primary shrink-0" />
                            )}
                          {title.toLowerCase().includes("project") && (
                            <Sparkles className="w-4 h-4 ml-auto text-primary shrink-0" />
                          )}
                          {title.toLowerCase().includes("elective") && (
                            <Library className="w-4 h-4 ml-auto text-muted-foreground shrink-0" />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* --- SIMPLE ELECTIVES LIST (Like BCA) --- */}
                  {sem.electives &&
                    sem.electives.length > 0 &&
                    !sem.electiveGroups && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 pt-6 border-t border-dashed border-border/60"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Layers className="w-4 h-4 text-accent" />
                          <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                            {sem.electiveLabel || "Electives"}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {sem.electives.map((elec: string, eIdx: number) => {
                            const { code, title } = formatSubject(elec);
                            return (
                              <div
                                key={eIdx}
                                className="flex items-start gap-2 p-2 rounded-lg bg-muted/30 hover:bg-accent/10 transition-colors"
                              >
                                <Code2 className="w-3 h-3 text-muted-foreground mt-1 shrink-0" />
                                <div className="flex flex-col">
                                  <span className="text-xs font-semibold text-foreground/80">
                                    {title}
                                  </span>
                                  {code && (
                                    <span className="text-[10px] text-muted-foreground">
                                      {code}
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                  {/* --- ELECTIVE GROUPS/CLUSTERS (Like MBA) --- */}
                  {sem.electiveGroups && sem.electiveGroups.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 pt-6 border-t border-dashed border-border/60"
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <Layers className="w-5 h-5 text-accent" />
                        <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                          {sem.electiveLabel || "Specialization Tracks"}
                        </span>
                      </div>

                      <div className="space-y-4">
                        {sem.electiveGroups.map((group: any, gIdx: number) => (
                          <div
                            key={gIdx}
                            className="rounded-2xl border border-border bg-muted/20 overflow-hidden"
                          >
                            {/* Group Header */}
                            <div className="px-4 py-3 bg-muted/40 border-b border-border flex items-center justify-between">
                              <h4 className="font-bold text-sm text-foreground">
                                {group.title}
                              </h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">
                                {group.subjects.length} Subjects
                              </span>
                            </div>
                            {/* Group Subjects */}
                            <div className="p-3 grid grid-cols-1 gap-1">
                              {group.subjects.map(
                                (sub: string, sbIdx: number) => (
                                  <div
                                    key={sbIdx}
                                    className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-background/80 transition-colors"
                                  >
                                    <div className="w-1 h-1 rounded-full bg-accent/50" />
                                    <span className="text-xs text-muted-foreground">
                                      {sub}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
