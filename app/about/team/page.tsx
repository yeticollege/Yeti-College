"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDownRight,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Plus,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Dummy Data with Images ---
const leadership = [
  {
    name: "Dr. Sanjay Kumar Jha",
    role: "Chief Executive Officer(CEO)",
    image: "/message/ceo.jpg",
    bio: "Visionary leader with 20+ years in ed-tech.",
    fb: "#",
  },
  {
    name: "Mr. Arna Raj Silwal",
    role: "Director",
    image: "/message/director.jpg",
    bio: "Ph.D. in Curriculum Development from Oxford.",
    fb: "#",
  },
  {
    name: "Mr. R.D Mishra",
    role: "Principal",
    image: "/message/principal.jpeg",
    bio: "Author of 'Modern Pedagogy in South Asia'.",
    fb: "#",
  },
];

const faculty = [
  {
    name: "Rakesh Kumar Bhagat",
    role: "Business Development & HOD",
    dept: "Marketing",
    image: "/message/marketing.jpg",
    color: "bg-blue-100 text-blue-700",
    fb: "#",
  },
  {
    name: "Shanti Shrestha",
    role: "Program Coordinator-BABM & BHM ",
    dept: "Hospitality Management",
    image: "/message/bhm_coordinator.jpg",
    color: "bg-amber-100 text-amber-700",
    fb: "#",
  },
  {
    name: "Bashu Kafle",
    role: "BABM & BHM Incharge",
    dept: "Hospitality Management",
    image: "/message/bashu.jpg",
    color: "bg-amber-100 text-amber-700",
    fb: "#",
  },
  {
    name: "Mukesh Maharjan",
    role: "Accountant",
    dept: "Finance",
    image: "/message/accountant.jpeg",
    color: "bg-rose-100 text-rose-700",
    fb: "#",
  },
  {
    name: "Uma Shrestha",
    role: "Admin Officer",
    dept: "Administration",
    image: "/message/records_manager.jpeg",
    color: "bg-emerald-100 text-emerald-700",
    fb: "#",
  },
  {
    name: "Nirusha Devkota",
    role: "Academic Counselor",
    dept: "Administration",
    image: "/message/nirusha.jpeg",
    color: "bg-emerald-100 text-emerald-700",
    fb: "#",
  },
  {
    name: "Nabin Duwal",
    role: "Food Productions",
    dept: "Faculty Member",
    image: "/message/nabin.jpg",
    color: "bg-emerald-100 text-emerald-700",
    fb: "#",
  },
  {
    name: "Mohan Basmet",
    role: "Discipline Incharge",
    dept: "Faculty Member",
    image: "/message/mohan.jpg",
    color: "bg-emerald-100 text-emerald-700",
    fb: "#",
  },
  {
    name: "Kamala Karki",
    role: "House Keeping (Supervisor)",
    dept: "Cafeteria Services",
    image: "/message/canteen.jpeg",
    color: "bg-violet-100 text-violet-700",
    fb: "#",
  },
];

const advisors = [
  {
    name: "Khushbu Saraf",
    role: "Instructor",
    // org: "TechCorp Global",
    image: "/message/khushbu.jpg",
  },
  {
    name: "Vivek K. Singh ",
    role: "Instructor",
    // org: "Paleo Institute",
    image: "/message/bibek.png",
  },
  {
    name: "Sanam Sitaula",
    role: "Instructor",
    // org: "Chaos Theory Inc.",
    image: "/message/sanam.jpg",
  },
  {
    name: "Rajkumar Shrestha",
    role: "Instructor",
    // org: "Genetics Lab",
    image: "/message/rajkumar.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F4F4F5] text-[#18181B] font-sans selection:bg-primary selection:text-primary-foreground">
        {/* --- HERO SECTION --- */}
        <header className="relative pt-32 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto border-b border-black/5 overflow-hidden">
          {/* Abstract Accent Blob */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 relative z-10">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] mb-6 text-primary font-bold">
                  Our People
                </p>
                <h1 className="text-[12vw] lg:text-[9rem] leading-[0.8] font-bold tracking-[-.5rem] uppercase text-black">
                  Our <br />
                  <span className="text-black/20 tracking-[2rem]">Team.</span>
                </h1>
              </motion.div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-xl shadow-black/5"
              >
                <ArrowDownRight className="w-10 h-10 mb-6 text-primary" />
                <p className="text-lg font-medium leading-tight text-muted-foreground">
                  We are a collective of educators, innovators, and mentors
                  dedicated to shaping the future of Nepal.
                </p>
              </motion.div>
            </div>
          </div>
        </header>

        {/* --- LEADERSHIP SECTION --- */}
        <section className="px-6 md:px-12 py-32 max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sticky Label */}
            <div className="lg:col-span-3">
              <div className="sticky top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-mono text-sm uppercase tracking-widest font-bold">
                    Leadership
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-[150px]">
                  Visionaries guiding our strategic direction.
                </p>
              </div>
            </div>

            {/* Content Grid */}
            <div className="lg:col-span-9">
              {/* 
                  UPDATED GRID CLASSES HERE:
                  grid-cols-1    = 1 column on mobile/tablet
                  lg:grid-cols-3 = 3 columns (row) on large screens
              */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {leadership.map((leader, idx) => (
                  <LeadershipCard key={idx} data={leader} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- FACULTY GRID --- */}
        <section className="px-6 md:px-12 pb-32 max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sticky Label */}
            <div className="lg:col-span-3">
              <div className="sticky top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-black/20 rounded-full" />
                  <span className="font-mono text-sm uppercase tracking-widest font-bold text-black/60">
                    Faculty
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-[150px]">
                  Experts delivering academic excellence.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {faculty.map((member, idx) => (
                  <FacultyCard key={idx} data={member} index={idx} />
                ))}

                {/* "Join Us" Card - Primary Accent */}
                <motion.div
                  whileHover={{ scale: 0.98 }}
                  className="bg-primary text-primary-foreground rounded-[2rem] p-8 flex flex-col justify-between min-h-[320px] group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

                  <div className="flex justify-between items-start relative z-10">
                    <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                      Hiring
                    </span>
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold leading-none mb-3">
                      Join the <br /> Team
                    </h3>
                    <p className="text-sm text-primary-foreground/70">
                      Check open positions
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ADVISORY BOARD (Visual List) --- */}
        <section className="bg-white border-t border-black/5 py-24">
          <div className="px-6 md:px-12 max-w-[1800px] mx-auto">
            <div className="flex items-end justify-between mb-16">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Acedemic Instructor</h2>
              <span className="hidden md:block font-mono text-xs text-muted-foreground uppercase tracking-widest">

              </span>
            </div>

            <div className="flex flex-col">
              {advisors.map((advisor, idx) => (
                <AdvisorRow key={idx} data={advisor} index={idx} />
              ))}
              <div className="border-t border-black/10" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

// --- COMPONENTS ---

// 1. Leadership Card (Full Portrait)
function LeadershipCard({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-muted rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover  group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
        />

        {/* Gradient & Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Floating Socials */}
        <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
          <SocialButton Icon={Linkedin} />
          <SocialButton Icon={Twitter} />
        </div>
      </div>

      {/* Text Info */}
      <div className="space-y-2 pl-2">
        <div className="flex items-center justify-between border-b border-black/5 pb-4">
          <h3 className="text-3xl font-bold tracking-tight">{data.name}</h3>
          <Plus className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
          {data.role}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2">{data.bio}</p>
      </div>
    </motion.div>
  );
}

// 2. Faculty Card (Smaller, Image + Dept Pill)
function FacultyCard({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white p-4 rounded-[2rem] border border-black/5 flex flex-col gap-4 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group min-h-[320px]"
    >
      {/* Image Area */}
      <div className="relative aspect-square w-full rounded-[1.5rem] overflow-hidden bg-muted">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Department Badge Overlay */}
        <div
          className={cn(
            "absolute top-3 left-3 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm",
            data.color
          )}
        >
          {data.dept}
        </div>
      </div>

      <div className="px-2 pb-2 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-xl font-bold leading-tight mb-1 group-hover:text-primary transition-colors">
            {data.name}
          </h4>
          <p className="text-sm text-muted-foreground font-medium">
            {data.role}
          </p>
        </div>
        <div className="pt-4 flex justify-end">
          <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// 3. Advisor Row (Rich List)
function AdvisorRow({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group border-t border-black/10 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F4F4F5] transition-colors px-6 rounded-[1.5rem] -mx-6"
    >
      {/* Left: Avatar + Name */}
      <div className="flex items-center gap-6 md:w-2/5">
        <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border border-black/10 group-hover:border-primary transition-colors">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {data.name}
          </h3>
          <span className="md:hidden text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1 block">
            {data.role}
          </span>
        </div>
      </div>

      {/* Middle: Role Pill */}
      <div className="md:w-1/3 hidden md:block">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-wider group-hover:bg-white shadow-sm">
          {data.role}
        </span>
      </div>

      {/* Right: Org + Icon */}
      <div className="md:w-1/3 flex items-center justify-between md:justify-end gap-4">
        <div className="flex items-center gap-2 text-sm font-mono text-black/60">
          <Globe className="w-3 h-3" />
          {data.org}
        </div>
        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </motion.div>
  );
}

function SocialButton({ Icon }: { Icon: any }) {
  return (
    <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-primary hover:border-primary hover:text-white transition-colors">
      <Icon className="w-4 h-4" />
    </button>
  );
}
