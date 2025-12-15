"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Users,
  GraduationCap,
  Award,
  Sparkles,
  Building2,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

// --- LEADERSHIP DATA FROM TEAM PAGE ---
const leadershipData = [
  {
    name: "Dr. Sanjay Kumar Jha",
    role: "Chief Executive Officer (CEO)",
    image: "/message/ceo.jpg",
  },
  {
    name: "Mr. Arna Raj Silwal",
    role: "Director",
    image: "/message/director.jpg",
  },
  {
    name: "Mr. R.D Mishra",
    role: "Principal",
    image: "/message/principal.jpeg",
  },
];

export default function AboutPageNew() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
        {/* --- HERO SECTION: Centered & Bold --- */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Redefining Education Since 2001</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-balance">
                We are shaping the{" "}
                <span className="text-primary">visionaries</span> of tomorrow.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Yeti International College combines academic rigor with creative
                freedom, building a community where innovation thrives.
              </p>
            </motion.div>
          </div>

          {/* Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        </section>

        {/* --- BENTO GRID: Visual Intro --- */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Main Image Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group bg-muted"
            >
              {/* Replace src with real image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="/tour/main-block.jpeg"
                alt="Students on campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 z-20 text-white">
                <h3 className="text-2xl font-bold">Campus Life</h3>
                <p className="text-white/80">
                  Where community meets creativity.
                </p>
              </div>
            </motion.div>

            {/* Stat Box 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary text-primary-foreground p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <Globe className="w-8 h-8 opacity-80" />
              <div>
                <div className="text-4xl font-bold mb-1">25+</div>
                <div className="text-sm font-medium opacity-80">
                  Global Partners
                </div>
              </div>
            </motion.div>

            {/* Text Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-3xl flex flex-col justify-center"
            >
              <h3 className="text-lg font-bold mb-2">Our Philosophy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We don't just teach curricula; we foster a mindset of continuous
                curiosity and ethical leadership.
              </p>
            </motion.div>

            {/* Stat Box 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-secondary text-secondary-foreground p-8 rounded-3xl flex flex-col justify-between"
            >
              <GraduationCap className="w-8 h-8 opacity-80" />
              <div>
                <div className="text-4xl font-bold mb-1">5k+</div>
                <div className="text-sm font-medium opacity-80">
                  Alumni Success Stories
                </div>
              </div>
            </motion.div>

            {/* Image Box Small */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative bg-muted rounded-3xl overflow-hidden group"
            >
              <Image
                src="/gallery/1.jpeg"
                alt="Library"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </motion.div>
          </div>
        </section>

        {/* --- NARRATIVE SECTION: Zig Zag --- */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 space-y-32">
            {/* Part 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
                  Our History
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  From humble beginnings to a national leader.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Established in 2001, Yeti International College began with a
                  single classroom and a bold idea: to bring international
                  standard education to Kathmandu.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the last two decades, we have expanded into a
                  multi-disciplinary institution, yet our core mission remains
                  unchanged—to empower students to achieve their fullest
                  potential.
                </p>
              </div>
              <div className="order-1 md:order-2 relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/gallery/cake_mixing/file38.jpeg"
                  alt="Old photo of college"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Part 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/gallery/cake_mixing/file36.jpeg"
                  alt="Modern Classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
                  Our Approach
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Learning beyond the four walls.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe education happens everywhere. Our curriculum
                  integrates industry internships, community service, and
                  international exchange programs.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Research-led Teaching",
                    "Industry Partnerships",
                    "Holistic Development",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- DARK IMMERSIVE STATS --- */}
        <section className="py-32 bg-foreground text-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Impact by the Numbers
              </h2>
              <p className="text-white/60 text-lg">
                Our commitment to excellence is reflected in the achievements of
                our students and faculty.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ImpactCard icon={Users} value="96%" label="Placement Rate" />
              <ImpactCard icon={Award} value="#1" label="Mgmt. College 2025" />
              <ImpactCard
                icon={Building2}
                value="45"
                label="Partner Colloborations"
              />
              <ImpactCard
                icon={HeartHandshake}
                value="50+"
                label="Community Projects"
              />
            </div>
          </div>

          {/* Abstract Decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]" />
          </div>
        </section>

        {/* --- LEADERSHIP GRID --- */}
        <section className="py-32 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold mb-4 tracking-tight">
                  Meet the Leadership
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Guided by experienced educators and industry veterans
                  dedicated to your success.
                </p>
              </div>
              <Link href="/about/team">
                <Button variant="outline" className="rounded-full px-6">
                  View All Faculty
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipData.map((leader, index) => (
                <LeaderCard
                  key={index}
                  name={leader.name}
                  role={leader.role}
                  image={leader.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- LARGE CTA --- */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto bg-primary/5 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-primary">
                Ready to define your future?
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Admissions for the Fall 2025 intake are now open. Join a
                community that believes in your potential.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={"/apply"}>
                  <Button
                    size="lg"
                    className="h-14 px-8 rounded-full text-lg font-semibold"
                  >
                    Apply Now
                  </Button>
                </Link>
                <Link href={"/tour"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 rounded-full text-lg font-semibold bg-background"
                  >
                    Book a Campus Tour
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// --- COMPONENTS ---

function ImpactCard({
  icon: Icon,
  value,
  label,
}: {
  icon: any;
  value: string;
  label: string;
}) {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors text-center group">
      <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm font-medium text-white/50 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

function LeaderCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-6">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-muted-foreground font-medium">{role}</p>
    </div>
  );
}