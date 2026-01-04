"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Quote,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  ChevronRight,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Data Configuration ---
const dataDB: Record<string, any> = {
  ceo: {
    id: "ceo",
    role: "Chief Executive Officer(CEO)",
    name: "Dr. Sanjay Kumar Jha",
    image: "/message/ceo.jpg",

    signature: "Sanjay Jha",
    email: "sanjayjha2028@gmail.com",
    socials: { linkedin: "#", twitter: "#" },
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    content: [
      "Dear Students, It is my immense pleasure to welcome you as the best of the best students to Yeti college, which is affiliated to the Sripatum University of Thailand; approved and recognized by the Ministry of Education, Science and Technology (MOEST), Nepal, where the knowledge and skills are simultaneously imparted to make the students capable of standing on their own feet in this competitive world of professionals.",
      "The educational environment in YETI is unique in comparison to other colleges in Nepal in terms of its teaching-learning which has made it possible to produce many achievers. Earning while learning has been its strongest educational process that helps its students to become financially self- dependent towards their profession at the end of courses. We provide you with the opportunity to be an integral part of the international student community by providing globally accepted education. We have partnered with universities abroad to help you gain seamless entry into their programs.",
      "Our dedicated, passionate, professionally educated and trained faculty members leave no stone unturned to educate and train our students to the best of their knowledge to achieve their educational and professional objectives.",
      "I, on behalf of YETI, warmly welcome the parents to visit our college and meet our trained counselors for facilitating you to make the appropriate decision for the bright future of your children.",
      "Wishing you all the best for a bright and successful career ahead.",
    ],
  },
  director: {
    id: "director",
    role: "Director",
    name: "Mr. Arna Raj Silwal",
    image: "/message/director.jpg",
    signature: "Silwal Arna",
    email: "director@yeticollege.edu.np",
    socials: { linkedin: "#", twitter: "#" },
    quote:
      "Our focus is simple: Student-centric policies that bridge the gap between academia and industry.",
    content: [
      "Dear Students, It is my pleasure to welcome you to Yeti International College, Nepal's pioneering institution in aviation education and the first to introduce the Bachelor of Airlines Business Management program. We are committed to providing academic excellence, industry-focused learning, and global standards, ensuring our students gain the specialized knowledge, practical skills, and leadership capabilities needed to succeed in the aviation and business sectors. Our goal is to create a transformative learning experience that prepares you for the dynamic and competitive global landscape.",
      "At Yeti International College, we take pride in our distinguished faculty, state- of - the - art facilities, and strong industry partnerships, all of which contribute to a future - ready learning environment.Through a curriculum designed to meet evolving industry demands, hands - on training, and real - world exposure, we equip students with the expertise required to excel in their careers.Additionally, we encourage participation in extracurricular activities, leadership programs, and industry interactions to ensure holistic development.",
      "I invite you to embark on this exciting academic journey with us and become a part of an institution that is redefining aviation education in Nepal.We look forward to supporting your growth and witnessing your success as future leaders in the aviation and business industries.",
    ],
  },
  principal: {
    id: "principal",
    role: "Principal",
    name: "Mr. R.D Mishra",
    image: "/message/principal.jpeg",
    signature: "R. D",
    email: "principal@yeticollege.edu.np",
    socials: { linkedin: "#", twitter: "#" },
    quote:
      "Discipline and creativity are not opposites; they are the twin engines of academic success.",
    content: [
      "Dear Students, It is my pleasure to welcome you to Yeti International College.In today’s competitive landscape, quality education in technology and management is essential for a successful professional career.With a strong reputation in Kathmandu, Yeti College is dedicated to providing academic excellence through highly qualified faculty, advanced infrastructure, and a dynamic learning environment.",
      "Our faculty and technical staff are committed to mentoring students, equipping them with the skills, knowledge, and confidence to excel in their fields and contribute meaningfully to society.",
      "Our mission is to offer value-based education, foster innovation, and encourage research and development to solve real-world challenges. Beyond academics, we provide ample opportunities for holistic growth through tech fests, cultural programs, sports, industrial visits, and club activities, ensuring our students develop both professional and personal competencies. I look forward to welcoming you to Yeti International College and supporting your journey toward academic and professional success.",
    ],
  },
  hod: {
    id: "hod",
    role: "Head of Business Develpopment",
    name: "Mr. Rakesh Kumar Bhagat",
    image: "/message/marketing.jpg",
    signature: "Silwal Arna",
    email: "admission@yeticollege.edu.np",
    socials: { linkedin: "#", twitter: "#" },
    quote:
      "Our focus is simple: Student-centric policies that bridge the gap between academia and industry.",
    content: [
      "Dear Students, It gives me great joy to welcome you here. Our goal is to become a global leader in education excellence and human development. At Yeti College, we are successfully achieving our goals of providing professional education while also promoting creative thinking, applying knowledge, instilling professional ethics, and raising awareness of societal obligations. We want to support, encourage, and incorporate research efforts into the teaching-learning process. We think that training and learning throughout one's life should help society. With the combined efforts of team YETI, I do not have any doubt that the organization will soar to new heights of greatness in the years to come. Yeti College is essential in creating the top management experts in the different sectors needed to satisfy the demands of a rapidly evolving global society.",
      "The Institute also provides its students ample opportunities for the development of professional skill through different activities like; Tech fest, Cultural fest, Sports and Games, Industrial tours, Club activities, etc.",
      "I look forward to welcoming you to the Yeti International College.",
    ],
  },
};

export default function MessageDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const data = dataDB[id];

  // Parallax hook for the image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  if (!data) return notFound();

  const otherLeaders = Object.values(dataDB).filter(
    (leader) => leader.id !== id
  );

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        {/* --- Background Elements --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Dot Pattern */}
          {/* <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-60"></div> */}
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* --- NAVIGATION HEADER --- */}
        <div className="fixed top-24 left-4 lg:left-8 z-40">
          <Link
            href="/about"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="sr-only">Back to About</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 lg:pt-48 pb-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* --- LEFT: PROFILE (Sticky) --- */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Decorative Backdrop for Image */}
                  <div className="absolute top-6 -left-6 w-full h-full bg-primary/5 rounded-[2rem] -z-10 hidden lg:block" />

                  <div className="bg-card border border-border/50 rounded-[2rem] p-2 shadow-2xl shadow-black/5">
                    <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-muted">
                      <motion.div
                        style={{ y }}
                        className="w-full h-[120%] relative -top-[10%]"
                      >
                        <Image
                          src={data.image}
                          alt={data.name}
                          fill
                          className="object-cover"
                          priority
                        />
                      </motion.div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                      {/* Text Content Inside Card (Mobile/Tablet focused, but visible always) */}
                      <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="font-medium text-primary-foreground/90 tracking-wider uppercase text-xs mb-2 flex items-center gap-2"
                        >
                          <span className="w-8 h-[1px] bg-white/50"></span>
                          {data.role}
                        </motion.p>
                        <motion.h1
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-3xl lg:text-4xl font-bold leading-tight mb-6"
                        >
                          {data.name}
                        </motion.h1>

                        <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                          <SocialButton
                            Icon={Linkedin}
                            href={data.socials.linkedin}
                          />
                          <SocialButton
                            Icon={Twitter}
                            href={data.socials.twitter}
                          />
                          <div className="w-[1px] h-8 bg-white/20 mx-2" />
                          <Button
                            variant="outline"
                            className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-black h-10 px-6"
                            onClick={() =>
                              (window.location.href = `mailto:${data.email}`)
                            }
                          >
                            Email Me
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- RIGHT: EDITORIAL CONTENT --- */}
            <div className="lg:col-span-7 lg:pt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Header Context */}
                <div className="flex items-center gap-3 mb-12 text-muted-foreground">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase tracking-widest">
                    Message from the Desk
                  </span>
                </div>

                {/* Block Quote */}
                <figure className="mb-16 relative">
                  <Quote className="w-16 h-16 text-primary/10 absolute -top-8 -left-8 -z-10" />
                  <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] text-foreground tracking-tight">
                    <span className="text-primary">"</span>
                    {data.quote}
                    <span className="text-primary">"</span>
                  </blockquote>
                </figure>

                {/* Content Body */}
                <div className="prose prose-lg md:prose-xl prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                  {data.content.map((paragraph: string, idx: number) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className={
                        idx === 0
                          ? "first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left leading-relaxed"
                          : "leading-relaxed"
                      }
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Signature Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-20 flex flex-col items-start gap-4"
                >
                  <div className="h-px w-24 bg-primary/50" />
                  <div className="space-y-1">
                    {/* Apply a handwriting font class here if available like font-dancing-script */}
                    <div className="text-5xl text-primary/80 font-cursive italic pr-4">
                      {data.signature}
                    </div>
                    <p className="text-sm font-bold text-foreground uppercase tracking-wider">
                      {data.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {data.role}, Yeti International College
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* --- READ NEXT SECTION --- */}
        <section className="border-t border-border bg-muted/30 py-24 px-6 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold tracking-tight">Read Next</h3>
                <p className="text-muted-foreground text-lg">
                  Insights from our other leaders.
                </p>
              </div>
              <Button
                variant="ghost"
                className="w-fit gap-2 group text-muted-foreground hover:text-primary"
              >
                View Leadership Team{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {otherLeaders.map((leader) => (
                <Link
                  key={leader.id}
                  href={`/about/message/${leader.id}`}
                  className="group"
                >
                  <article className="bg-background border border-border rounded-2xl p-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex items-center">
                    <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-muted ml-2">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    <div className="p-6 flex-1">
                      <div className="text-xs font-bold text-primary/80 uppercase tracking-widest mb-1">
                        {leader.role}
                      </div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {leader.name}
                      </h4>
                      <span className="inline-flex items-center text-sm font-medium text-muted-foreground group-hover:translate-x-2 transition-transform duration-300">
                        Read Message <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// --- Helper Components ---

function SocialButton({ Icon, href }: { Icon: any; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 border border-white/10 hover:scale-110"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
