"use client";
import { useState } from "react";

/* --- RIGHT CONTENT: PROJECT TRACKER --- */
export const ProjectTracker = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      id: 0,
      name: "Mobile App Redesign",
      lead: "Sarah J.",
      stats: [
        { label: "Sprint", value: "4/6" },
        { label: "Tickets", value: "12 Open" },
        { label: "Deadline", value: "2d" },
      ],
      color: "border-l-pink-500",
    },
    {
      id: 1,
      name: "Cloud Migration",
      lead: "David Chen",
      stats: [
        { label: "Uptime", value: "100%" },
        { label: "Cost", value: "-15%" },
        { label: "Servers", value: "540" },
      ],
      color: "border-l-blue-500",
    },
    {
      id: 2,
      name: "Q4 Marketing",
      lead: "Emily R.",
      stats: [
        { label: "Budget", value: "$50k" },
        { label: "ROI", value: "3.2x" },
        { label: "Leads", value: "+400" },
      ],
      color: "border-l-emerald-500",
    },
    {
      id: 3,
      name: "AI Integration",
      lead: "Marcus T.",
      stats: [
        { label: "Models", value: "GPT-4" },
        { label: "Accuracy", value: "94%" },
        { label: "Tokens", value: "2M" },
      ],
      color: "border-l-orange-500",
    },
  ];

  return (
    <div className="hidden lg:flex lg:col-span-5 flex-col justify-center h-full pl-12 z-30">
      <div className="w-full max-w-md space-y-3">
        <div className="flex justify-between items-end mb-4 px-1">
          <h3 className="text-white font-serif text-xl tracking-wide">
            Active Projects
          </h3>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest border border-slate-700 px-2 py-1 rounded">
            Hover to View
          </span>
        </div>

        {projects.map((proj, index) => {
          const isActive = activeTab === index;
          return (
            <div
              key={proj.id}
              onMouseEnter={() => setActiveTab(index)}
              className={`group relative bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-lg transition-all duration-500 cursor-default overflow-hidden ${
                isActive
                  ? "bg-slate-800/80 border-slate-500 shadow-xl scale-[1.02]"
                  : "hover:bg-slate-800/40"
              }`}
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  proj.color
                } transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-40"
                }`}
              ></div>

              <div className="p-4 pl-6">
                <div className="flex justify-between items-center">
                  <h4
                    className={`font-bold text-lg transition-colors ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {proj.name}
                  </h4>
                  {isActive && (
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                      PM: {proj.lead}
                    </span>
                  )}
                </div>

                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 border-t border-white/10 pt-4 grid grid-cols-3 gap-4">
                    {proj.stats.map((stat, i) => (
                      <div key={i}>
                        <span className="block text-sm font-bold text-white">
                          {stat.value}
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="text-xs text-blue-400 hover:text-white transition-colors flex items-center gap-1">
                      Go to Board <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
