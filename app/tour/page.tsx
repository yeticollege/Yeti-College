"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Move3d,
  Maximize2,
  ChevronRight,
  Info,
  Wifi,
  Coffee,
  Library,
  Monitor,
  Sun,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- MOCK DATA FOR TOUR ---
const tourSpots = [
  {
    id: "main-block",
    title: "Academic Block A",
    category: "Campus Core",
    image: "/tour/main-block.jpeg", // Placeholder
    description:
      "The heart of our campus featuring modern lecture halls and administrative offices. Designed with sustainable architecture.",
    stats: { capacity: "2000+", area: "45,000 sq ft", type: "Academic" },
    features: ["Smart Classrooms", "Admin Offices", "Student Lounge"],
  },
  // {
  //   id: "library",
  //   title: "Central Library",
  //   category: "Learning Resource",
  //   image:
  //     "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop",
  //   description:
  //     "A state-of-the-art digital and physical repository of knowledge, featuring quiet study zones and collaborative pods.",
  //   stats: { capacity: "500+", area: "12,000 sq ft", type: "Resource" },
  //   features: ["24/7 Access", "Digital Archives", "Discussion Rooms"],
  // },
  {
    id: "lab-complex",
    title: "Innovation Labs",
    category: "Research",
    image: "/tour/lab.jpeg",
    description:
      "Where theory meets practice. Equipped with the latest hardware, robotics kits, and AI workstations.",
    stats: { capacity: "150+", area: "8,000 sq ft", type: "Practical" },
    features: ["Mac Lab", "Robotics Area", "Physics Lab"],
  },
  {
    id: "auditorium",
    title: "Grand Auditorium",
    category: "Events",
    image: "/tour/auditorium.jpeg",
    description:
      "Hosting seminars, cultural events, and convocation ceremonies. Features top-tier acoustics and lighting.",
    stats: { capacity: "800", area: "15,000 sq ft", type: "Events" },
    features: ["Dolby Sound", "Green Rooms", "VIP Lounge"],
  },
  {
    id: "Classroom",
    title: "Classrooms & Halls",
    category: "academics",
    image: "./tour/classroom.jpeg",
    description:
      "A vibrant space for students to attend lectures, participate in discussions, and engage in academic activities.",
    stats: { capacity: "300", area: "6,000 sq ft", type: "Academic" },
    features: ["Projectors", "Whiteboards", "Comfortable Seating"],
  },
];

export default function VirtualTourPage() {
  const [activeSpotIndex, setActiveSpotIndex] = useState(0);
  const activeSpot = tourSpots[activeSpotIndex];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
        {/* --- HERO SECTION --- */}
        <header className="pt-5 pb-10 px-6 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full border border-accent/30 text-primary  bg-accent/70 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Move3d className="w-3 h-3" /> Interactive Campus
                  </span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground mb-0 leading-[0.9]">
                  Virtual Tour
                </h1>
              </motion.div>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-xl leading-relaxed font-medium text-muted-foreground text-balance">
                Explore our world-class facilities from the comfort of your
                home. Experience the environment where future leaders are made.
              </p>
            </div>
          </div>
        </header>

        {/* --- MAIN INTERACTIVE SECTION --- */}
        <div className="max-w-[1600px] mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT: The Viewer (8 Columns) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Viewer Window */}
              <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden relative shadow-sm border border-border group bg-card">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSpot.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeSpot.image}
                      alt={activeSpot.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Floating Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                            {activeSpot.category}
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                          {activeSpot.title}
                        </h2>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Interactive Controls Overlay */}
                <div className="absolute top-6 right-6 flex gap-3">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full h-12 w-12 bg-background/20 backdrop-blur-md hover:bg-background/40 border border-white/10 text-white"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full h-12 w-12 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                  >
                    <Move3d className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Info Row (Stats) */}
              <div className="grid grid-cols-3 gap-px bg-border border border-border rounded-[2rem] overflow-hidden">
                <TourStatBox
                  label="Capacity"
                  value={activeSpot.stats.capacity}
                  icon={<Users className="w-4 h-4" />}
                />
                <TourStatBox
                  label="Area Size"
                  value={activeSpot.stats.area}
                  icon={<Maximize2 className="w-4 h-4" />}
                />
                <TourStatBox
                  label="Facility Type"
                  value={activeSpot.stats.type}
                  icon={<Info className="w-4 h-4" />}
                />
              </div>

              {/* Description & Features */}
              <section className="mt-4">
                <SectionLabel number="01" title="About this Space" />
                <div className="grid md:grid-cols-2 gap-12">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {activeSpot.description}
                  </p>
                  <div className="space-y-4">
                    {activeSpot.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 rounded-xl bg-card border border-border"
                      >
                        <span className="font-medium text-foreground">
                          {feature}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT: Navigation List (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col gap-8 h-full">
              {/* Navigation Card */}
              <div className="bg-card rounded-[2.5rem] p-2 border border-border flex flex-col h-full min-h-[600px]">
                <div className="p-6 pb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Map Navigation
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-6">Destinations</h3>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 px-2 pb-2 scrollbar-hide">
                  {tourSpots.map((spot, index) => (
                    <button
                      key={spot.id}
                      onClick={() => setActiveSpotIndex(index)}
                      className={cn(
                        "w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border text-left group relative overflow-hidden",
                        activeSpotIndex === index
                          ? "bg-background border-accent/50 shadow-sm"
                          : "bg-transparent border-transparent hover:bg-muted hover:border-border"
                      )}
                    >
                      {/* Active Indicator Bar */}
                      {activeSpotIndex === index && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent"
                        />
                      )}

                      <div className="w-16 h-12 rounded-lg overflow-hidden relative shrink-0 bg-muted">
                        <Image
                          src={spot.image}
                          alt={spot.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-muted-foreground uppercase mb-1">
                          {spot.category}
                        </div>
                        <div
                          className={cn(
                            "font-bold text-lg leading-none group-hover:text-primary transition-colors",
                            activeSpotIndex === index
                              ? "text-foreground"
                              : "text-foreground/80"
                          )}
                        >
                          {spot.title}
                        </div>
                      </div>
                      {activeSpotIndex === index && (
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-accent" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Card */}
              <div className="p-8 h-64 rounded-[2rem]  bg-primary text-primary-foreground relative overflow-hidden group cursor-pointer">
                {/* Decorative Circle */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10 ">
                  <div className="flex items-center gap-3 mb-4 text-primary-foreground/80">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      Visit in Person
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 leading-tight">
                    Want to see the real thing?
                  </h3>
                  <Button
                    variant="secondary"
                    className="w-full h-14  rounded-xl text-base font-bold shadow-lg"
                  >
                    Schedule Campus Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- AMENITIES GRID --- */}
        <section className="bg-card border-y border-border py-32">
          <div className="max-w-[1600px] mx-auto px-6">
            <SectionLabel number="02" title="Campus Amenities" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AmenityItem
                icon={<Wifi />}
                title="Gigabit Wi-Fi"
                desc="Campus-wide coverage"
              />
              <AmenityItem
                icon={<Coffee />}
                title="3 Cafeterias"
                desc="Multi-cuisine options"
              />
              <AmenityItem
                icon={<Library />}
                title="Digital Library"
                desc="RFID enabled systems"
              />
              <AmenityItem
                icon={<Monitor />}
                title="24/7 Labs"
                desc="Access to workstations"
              />
              <AmenityItem
                icon={<Sun />}
                title="Green Spaces"
                desc="Eco-friendly campus"
              />
              <AmenityItem
                icon={<Move3d />}
                title="VR Studio"
                desc="Immersive learning"
              />
              <AmenityItem
                icon={<Users />}
                title="Clubs"
                desc="50+ Student clubs"
              />
              <AmenityItem
                icon={<Phone />}
                title="Help Desk"
                desc="24/7 Student Support"
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// --- SUB COMPONENTS ---

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-12 border-b border-border pb-6">
      <span className="text-sm font-mono font-bold text-muted-foreground">
        {number}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}

function TourStatBox({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: any;
}) {
  return (
    <div className="bg-background p-6 md:p-8 flex flex-col justify-between h-32 md:h-40 hover:bg-muted/30 transition-colors group">
      <div className="flex justify-between items-start">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
          {label}
        </span>
        <span className="text-muted-foreground/50 group-hover:text-accent transition-colors">
          {icon}
        </span>
      </div>
      <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
        {value}
      </span>
    </div>
  );
}

function AmenityItem({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-4 group cursor-default">
      <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
