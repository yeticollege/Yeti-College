"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  BookOpen, 
  GraduationCap, 
  ArrowRight,
  Award 
} from "lucide-react";

// --- Types ---
type FeatureColor = "blue" | "teal" | "rose" | "orange" | "purple";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: FeatureColor;
}

// --- Data ---
const FEATURES: Feature[] = [
  {
    id: "01",
    title: "Internship Assured",
    description: "Get hands-on experience with top companies through guaranteed internship opportunities.",
    icon: Briefcase,
    color: "blue",
  },
  {
    id: "02",
    title: "Career Growth Support",
    description: "Personalized mentoring, skill development and placement training to boost your career.",
    icon: TrendingUp,
    color: "teal",
  },
  {
    id: "03",
    title: "Employment Opportunities",
    description: "Access to a wide network of recruiters and job opportunities to kickstart your career.",
    icon: Users,
    color: "rose",
  },
  {
    id: "04",
    title: "Industry Focused Curriculum",
    description: "Learn industry-relevant skills with a practical curriculum designed by experts.",
    icon: BookOpen,
    color: "orange",
  },
  {
    id: "05",
    title: "Up to 100% Scholarship",
    description: "Merit-based scholarships to recognize talent and support your academic journey.",
    icon: GraduationCap,
    color: "purple",
  },
];

// --- Styles Map ---
const colorStyles: Record<FeatureColor, { bg: string; text: string; accent: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", accent: "bg-blue-600", border: "border-blue-100" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", accent: "bg-teal-500", border: "border-teal-100" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", accent: "bg-rose-500", border: "border-rose-100" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", accent: "bg-orange-500", border: "border-orange-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", accent: "bg-purple-600", border: "border-purple-100" },
};

// --- Sub-components ---

const FeatureCard = ({ feature, index, isWide = false }: { feature: Feature; index: number; isWide?: boolean }) => {
  const style = colorStyles[feature.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      // Floating Animation
      animate={{ y: [0, -8, 0] }}
      transition={{ 
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
        default: { duration: 0.3 }
      }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`group relative ${isWide ? 'w-full max-w-2xl' : 'w-full'} bg-white/70 backdrop-blur-2xl border border-white/40 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col justify-between h-full`}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${style.bg} ${style.text} ${style.border}`}>
            <feature.icon size={28} strokeWidth={1.5} />
          </div>
          <span className="text-xl font-bold text-blue-900/10 italic select-none">
            {feature.id}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
          {feature.title}
        </h3>
        {/* Accent Bar */}
        <div className={`w-10 h-1 rounded-full mb-4 ${style.accent} opacity-40`} />

        <p className="text-slate-500 text-[15px] leading-relaxed font-medium mb-8">
          {feature.description}
        </p>
      </div>

      <div className={`w-10 h-10 self-end rounded-full flex items-center justify-center border bg-white shadow-sm transition-all duration-300 group-hover:translate-x-1 ${style.text} ${style.border}`}>
        <ArrowRight size={18} />
      </div>
    </motion.div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="relative min-h-screen py-24 px-6 bg-[#f8fbff] overflow-hidden font-sans">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-purple-200/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1.5px] w-12 bg-blue-200" />
            <span className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase">
              Our Features
            </span>
            <div className="h-[1.5px] w-12 bg-blue-200" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
          >
            Empowering Your <span className="text-blue-600 bg-clip-text">Future</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-slate-500 text-lg font-medium leading-relaxed"
          >
            We provide everything you need to learn, grow and achieve a successful career.
          </motion.p>
          
          <div className="mt-8 w-12 h-1.5 bg-blue-100 rounded-full mx-auto relative overflow-hidden">
             <div className="absolute top-0 left-0 h-full w-1/2 bg-blue-600 rounded-full" />
          </div>
        </div>

        {/* Main Grid: Features & Center Element */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Side (Features 01, 02) */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            <FeatureCard feature={FEATURES[0]} index={0} />
            <FeatureCard feature={FEATURES[1]} index={1} />
          </div>

          {/* Center Arched Element */}
          <div className="lg:col-span-4 relative flex justify-center order-1 lg:order-2 h-full py-8">
            {/* Background Decorative Dots */}
            <div className="absolute -left-8 top-1/4 grid grid-cols-4 gap-3 opacity-10 hidden xl:grid">
              {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-900 rounded-full" />)}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] max-w-[380px]"
            >
              <div className="w-full h-full rounded-t-[180px] rounded-b-[40px] overflow-hidden border-[12px] border-white shadow-[0_40px_80px_rgba(0,0,0,0.1)] relative group">
                <img 
                  src="/tour/main-block.jpeg" 
                  alt="Campus" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Center Image Overlay/Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />

                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] bg-blue-600/90 backdrop-blur-xl py-5 px-6 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                    <Award className="text-white" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-blue-100 tracking-widest uppercase mb-0.5">Building Careers.</p>
                    <p className="text-white font-bold text-sm">Shaping Futures.</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Subtle Arc behind image */}
              <div className="absolute -inset-4 border border-blue-100 rounded-t-full -z-10 opacity-50" />
            </motion.div>

            {/* Right Side Dots */}
            <div className="absolute -right-8 bottom-1/4 grid grid-cols-4 gap-3 opacity-10 hidden xl:grid">
              {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-900 rounded-full" />)}
            </div>
          </div>

          {/* Right Side (Features 03, 04) */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-3">
            <FeatureCard feature={FEATURES[2]} index={2} />
            <FeatureCard feature={FEATURES[3]} index={3} />
          </div>

        </div>

        {/* Bottom Feature (Feature 05) */}
        <div className="flex justify-center mt-12">
          <FeatureCard feature={FEATURES[4]} index={4} isWide={true} />
        </div>
      </div>
    </section>
  );
}