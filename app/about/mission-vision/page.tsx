"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Lightbulb,
  Heart,
  Users,
  Globe,
  TrendingUp,
  ArrowDownRight,
  Plus,
  Quote,
} from "lucide-react";
import { useRef } from "react";

export default function MissionVisionPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax for the visual circle
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <>
      <Header />
      <div
        ref={containerRef}
        className="min-h-screen bg-[#F4F4F5] text-[#18181B] font-sans selection:bg-black selection:text-white overflow-hidden"
      >
        {/* --- HERO SECTION --- */}
        <header className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto border-b border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] mb-6 text-black/60">
                Yeti International College
              </p>
              <h1 className="text-[13vw] lg:text-[10rem] leading-[0.8] font-bold tracking-tighter uppercase text-black">
                Why <br />
                We <span className="text-black/20">Exist.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-4 md:mb-8"
            >
              <ArrowDownRight className="w-16 h-16 stroke-1" />
            </motion.div>
          </div>
        </header>

        {/* --- DEDICATED MISSION SECTION (Typographic Swiss) --- */}
        <section className="px-6 md:px-12 py-32 max-w-[1800px] mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Label Column */}
            <div className="lg:col-span-3">
              <div className="sticky top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="font-mono text-sm uppercase tracking-widest font-bold">
                    Our Mission
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-[150px]">
                  The fundamental purpose that drives our curriculum.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* The "Manifesto" Layout */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-12 text-black">
                  To provide{" "}
                  <span className="bg-black text-white px-4 py-1 rounded-[1rem] decoration-clone box-decoration-clone">
                    transformative education
                  </span>{" "}
                  that empowers students with the knowledge, skills, and values
                  needed to excel in a global landscape.
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm">
                    <Target className="w-10 h-10 mb-6" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold mb-2">Career Ready</h3>
                    <p className="text-black/60 leading-relaxed">
                      We bridge the gap between theory and practice, ensuring
                      every graduate is industry-ready from day one.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm">
                    <Heart className="w-10 h-10 mb-6" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold mb-2">
                      Ethical Leadership
                    </h3>
                    <p className="text-black/60 leading-relaxed">
                      Success without integrity is failure. We cultivate leaders
                      who prioritize ethics alongside profit.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- VISION SECTION (Visual Block) --- */}
        <section className="px-4 md:px-8 pb-24 max-w-[1800px] mx-auto">
          <motion.div
            style={{ y }} // Parallax effect
            className="bg-[#18181B] text-white rounded-[3rem] p-8 md:p-24 relative overflow-hidden min-h-[60vh] flex flex-col md:flex-row items-start md:items-center gap-12"
          >
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
                <Eye className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Our Vision
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-8">
                The Premier Center <br />
                <span className="text-white/50">for Excellence.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                To be recognized as a leading educational institution in South
                Asia, renowned for academic excellence, innovative research, and
                producing graduates who are globally competitive.
              </p>
            </div>

            {/* Decorative Number */}
            <div className="relative z-10 hidden lg:block">
              <span className="text-[20rem] font-bold leading-none text-white/5 select-none">
                01
              </span>
            </div>
          </motion.div>
        </section>

        {/* --- VALUES GRID --- */}
        <section className="px-6 md:px-12 pb-32 max-w-[1800px] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-full h-px bg-black/10" />
            <h3 className="shrink-0 text-2xl font-bold tracking-tighter uppercase">
              Core Values
            </h3>
            <div className="w-full h-px bg-black/10" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "Striving for the highest standards in teaching and research.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Embracing new ideas to enhance learning experiences.",
              },
              {
                icon: Heart,
                title: "Integrity",
                desc: "Maintaining honesty and transparency in all actions.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "Fostering teamwork within and beyond our campus.",
              },
              {
                icon: Globe,
                title: "Global View",
                desc: "Preparing students to thrive in a diverse world.",
              },
              {
                icon: TrendingUp,
                title: "Growth",
                desc: "Encouraging lifelong learning for everyone.",
              },
            ].map((item, idx) => (
              <SwissValueCard key={idx} {...item} index={idx + 1} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

// --- Component: Interactive Value Card ---

function SwissValueCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: any;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-[2rem] p-8 border border-black/5 hover:bg-[#18181B] hover:text-white transition-all duration-500 cursor-default"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 bg-[#F4F4F5] rounded-2xl group-hover:bg-white/20 transition-colors">
          <Icon className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="font-mono text-xs font-bold text-black/30 group-hover:text-white/30">
          (0{index})
        </span>
      </div>

      <h4 className="text-2xl font-bold tracking-tight mb-2">{title}</h4>
      <p className="text-sm text-black/60 group-hover:text-white/70 font-medium leading-relaxed transition-colors">
        {desc}
      </p>

      <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <Plus className="w-6 h-6" />
      </div>
    </motion.div>
  );
}
