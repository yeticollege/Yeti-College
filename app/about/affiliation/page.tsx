"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Globe2,
  Award,
  Landmark,
  ScrollText,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  BookOpenCheck,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Data Configuration ---

const affiliationsData = [
  {
    category: "Global Partners",
    description:
      "Strategic alliances with world-renowned institutions to provide global exposure and credit transfer opportunities.",
    items: [
      {
        title: "Sripatum University",
        location: "Bangkok, Thailand",
        logo: "/sripatum-logo.png",
        image: "/tour/SPU-block.webp",
        icon: Plane,
        highlights: [
          "Exchange Programs",
          "Asian Business Hub",
          "Tech Innovation",
        ],
        description:
          "One of Thailand's oldest and most prestigious private universities. This affiliation opens doors to the vibrant Southeast Asian market and technology sectors.",
      },
    ],
  },
  {
    category: "National Roots",
    description:
      "Deeply rooted in the academic history of Nepal, ensuring local relevance and government recognition.",
    items: [
      {
        title: "Tribhuvan University",
        location: "Balkhu, Nepal",
        logo: "/tu-logo.png",
        image: "/tu-clocktower.png",
        icon: Landmark,
        highlights: ["Govt Recognized", "Oldest University", "Alumni Network"],
        description:
          "Affiliated with Nepal's first and largest university. This ensures our curriculum meets rigorous national standards and degrees are recognized in government sectors.",
      },
      {
        title: "Kennt College",
        location: "Kathmandu, Nepal",
        logo: "/kennt-logo.png",
        image: "/tour/main-block.jpeg",
        icon: Globe2,
        highlights: ["Founding Institution", "Nepal Based", "Quality Education"],
        description:
          "Our founding institution providing quality education in Nepal. Built on years of academic excellence, this partnership strengthens our commitment to fostering educational standards in the region.",
      },
    ],
  },
];

const accreditations = [
  "Ministry of Education, Nepal",
  "University Grants Commission (UGC)",
  "Quality Assurance & Accreditation (QAA)",
  "International Association of Universities",
];

export default function AffiliationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-20 px-6 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    Network & Recognition
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  World Class <br />
                  <span className="text-muted-foreground/40">Connections.</span>
                </h1>
              </motion.div>
            </div>
            <div className="lg:col-span-3 pb-4">
              <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                Degrees without borders. We bridge the gap between local
                heritage and international excellence.
              </p>
            </div>
          </div>
        </section>

        {/* --- LOGO STRIP SECTION --- */}
        <section className="px-6 pb-24 max-w-[1600px] mx-auto">
          <div className="border-y border-border/50 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 opacity-80  transition-all duration-500">
              {/* NOTE: Add your images to public/logos/ folder */}
              <div className="flex items-center gap-4">
                <div className="w-64 h-64 relative">
                  {/* Placeholder for Kent Logo */}
                  <Image
                    src={affiliationsData[1].items[1].logo}
                    alt="Kent"
                    fill
                    className="object-contain"
                  />
                  {/* <Image src="/logos/kent.png" alt="Kent" fill className="object-contain" /> */}
                </div>
                <span className="text-4xl font-bold">Kennt College</span>
              </div>

              <div className="hidden md:block w-px h-12 bg-border" />

              <div className="flex items-center gap-4">
                <div className="w-32 h-32 relative">
                  {/* Placeholder for Sripatum Logo */}

                  <Image
                    src={affiliationsData[0].items[0].logo}
                    alt="Sripatum"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-4xl font-bold">Sripatum University</span>
              </div>

              <div className="hidden md:block w-px h-12 bg-border" />

              <div className="flex items-center gap-4">
                <div className="w-32 h-32 relative">
                  {/* Placeholder for TU Logo */}
                  <Image
                    src={affiliationsData[1].items[0].logo}
                    alt="TU"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-4xl font-bold">Tribhuvan University</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- PARTNER SECTIONS --- */}
        <div className="flex flex-col gap-0 pb-32">
          {affiliationsData.map((category, idx) => (
            <CategorySection key={idx} data={category} index={idx} />
          ))}
        </div>

        {/* --- ACCREDITATION BADGES --- */}
        <section className="px-6 pb-32">
          <div className="max-w-[1600px] mx-auto">
            <div className="bg-muted/30 rounded-[3rem] p-12 md:p-20 border border-border">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
                    Quality Assurance
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Fully Accredited.
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our programs are vigorously vetted by national and
                    international bodies to ensure your degree holds value
                    anywhere in the world.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {accreditations.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-background rounded-2xl border border-border shadow-sm"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="px-6 pb-20">
          <div className="max-w-[1600px] mx-auto bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <ScrollText className="w-16 h-16 mx-auto opacity-80" />
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Start Your Journey.
              </h2>
              <p className="text-xl text-primary-foreground/80">
                With degrees recognized in Nepal, Thailand, and the UK, where
                will your education take you?
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full h-14 px-8 text-base font-bold"
              >
                View Academic Programs
              </Button>
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// --- SUB-COMPONENTS ---

function CategorySection({ data, index }: { data: any; index: number }) {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Sticky Header */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
                0{index + 1} — {data.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                {data.category}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {data.description}
              </p>

              {/* Decorative Indicator */}
              <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {data.items.length}{" "}
                {data.items.length > 1 ? "Universities" : "University"}
              </div>
            </div>
          </div>

          {/* Right: Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8">
              {data.items.map((item: any, i: number) => (
                <PartnerCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col gap-6"
    >
      {/* Image Container */}
      <div className="aspect-[16/10] relative rounded-[2rem] overflow-hidden bg-muted border border-border group-hover:border-primary/50 transition-colors duration-300">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

        {/* Floating Icon */}
        <div className="absolute top-6 left-6 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-sm">
          <Icon className="w-5 h-5 text-primary" />
        </div>

        {/* Floating Location Badge */}
        <div className="absolute bottom-6 right-6 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-xs font-bold border border-border flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {item.location}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 px-2">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <ArrowRight className="w-5 h-5 text-muted-foreground -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        {/* Highlights */}
        <div className="pt-4 border-t border-border border-dashed">
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {item.highlights.map((spec: string, k: number) => (
              <div
                key={k}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/80"
              >
                <BookOpenCheck className="w-3 h-3 text-primary" />
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
