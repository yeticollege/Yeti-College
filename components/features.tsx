"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- Icons (Inline SVGs for professional look) ---
const Icons = {
  Faculty: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
  ),
  Facility: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  Global: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Career: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  Check: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
};

export default function Features() {
  const features = [
    {
      title: "World-Class Faculty",
      description:
        "Learn from renowned experts and industry leaders committed to your success.",
      icon: <Icons.Faculty />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Access cutting-edge laboratories, libraries, and research centers.",
      icon: <Icons.Facility />,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Global Community",
      description: "Study alongside talented students from over 100 countries.",
      icon: <Icons.Global />,
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Career Support",
      description:
        "Get guidance from our career services team and industry connections.",
      icon: <Icons.Career />,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* --- LEFT: Content & Features --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.9]">
              Academic Excellence Redefined <br />
              {/* <span className="text-blue-600">Redefined.</span> */}
            </h2>

            <p className="text-lg text-slate-600 max-w-xl mt-4">
              We provide an environment that fosters innovation, critical
              thinking, and global perspectives.
            </p>

            <div className="grid gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                  className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 cursor-default"
                >
                  <div
                    className={`p-3 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT: Visual Composition --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            {/* Main Image (Masked) */}
            <div className="absolute inset-0 bg-slate-200 rounded-3xl overflow-hidden border-[8px] border-white shadow-2xl">
              {/* Use a specific high-quality placeholder */}
              <img
                src="/tour/main-block.jpeg"
                alt="University Campus"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay for text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Card 1: Satisfaction Rate (Top Right) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -right-8 top-12 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[200px] border border-slate-100"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-green-100 rounded-full text-green-600">
                  <Icons.Check />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase">
                  Verified
                </span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
              <p className="text-xs text-slate-500 font-medium">
                Student satisfaction rate based on 2025 survey.
              </p>
            </motion.div>

            {/* Floating Card 2: Global Ranking (Bottom Left) */}
            {/* <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -left-8 bottom-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Top 10</div>
                  <div className="text-xs text-slate-500">Global Ranking</div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
