"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  X,
  MessageCircle,
  RefreshCw,
  MapPin,
  Phone,
  Mail,
  User,
  Sparkles,
  GraduationCap,
  ArrowRight,
  Clock,
  BookOpen,
  Calendar,
  CheckCircle2,
} from "lucide-react";

// --- 1. DATA IMPORT ---
import { coursesDB } from "@/public/data/coursedata";

// --- 2. CONFIGURATION & SYNONYMS ---
const SYNONYMS = {
  greetings: [
    "hello",
    "hi",
    "hey",
    "namaste",
    "morning",
    "afternoon",
    "evening",
    "start",
  ],
  admissions: [
    "admission",
    "apply",
    "enroll",
    "register",
    "deadline",
    "form",
    "application",
    "process",
    "join",
  ],
  requirements: [
    "requirement",
    "eligibility",
    "criteria",
    "grade",
    "gpa",
    "marks",
    "prerequisite",
  ],
  courses: [
    "course",
    "program",
    "degree",
    "class",
    "subject",
    "major",
    "bachelor",
    "master",
  ],
  fees: [
    "fee",
    "cost",
    "price",
    "tuition",
    "payment",
    "expensive",
    "how much",
    "charge",
    "money",
  ],
  scholarships: [
    "scholarship",
    "grant",
    "financial aid",
    "discount",
    "bursary",
  ],
  location: [
    "location",
    "where",
    "address",
    "map",
    "place",
    "city",
    "located",
    "campus",
  ],
  contact: [
    "contact",
    "phone",
    "email",
    "call",
    "number",
    "mail",
    "reach",
    "counselor",
    "human",
    "reception",
    "speak to someone",
    "talk to a counselor",
  ],
  events: [
    "event",
    "calendar",
    "fest",
    "ceremony",
    "happening",
    "activity",
    "open house",
  ],
  curriculum: [
    "curriculum",
    "syllabus",
    "structure",
    "module",
    "content",
    "study",
    "learn",
    "subjects",
  ],
  careers: [
    "career",
    "job",
    "placement",
    "internship",
    "work",
    "future",
    "salary",
    "scope",
    "alumni",
  ],
  whoareyou: ["who are you", "what are you", "bot"],
};

// --- 3. LOGIC HELPERS ---
const getLevenshteinDistance = (a: string, b: string) => {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1))
        matrix[i][j] = matrix[i - 1][j - 1];
      else
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
    }
  }
  return matrix[b.length][a.length];
};

const isFuzzyMatch = (inputWord: string, targetWord: string) => {
  const cleanInput = inputWord.toLowerCase().trim();
  const cleanTarget = targetWord.toLowerCase().trim();
  if (cleanInput.includes(cleanTarget) || cleanTarget.includes(cleanInput))
    return true;
  if (cleanTarget.length < 4) return cleanInput === cleanTarget;
  const distance = getLevenshteinDistance(cleanInput, cleanTarget);
  return distance <= (cleanTarget.length > 7 ? 2 : 1);
};

// --- 4. UI COMPONENTS ---

const BotMessageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-zinc-800/80 backdrop-blur-sm px-5 py-4 rounded-2xl rounded-tl-sm border border-zinc-700/50 shadow-sm text-zinc-100 text-sm leading-relaxed">
    {children}
  </div>
);

const CourseCard = ({
  course,
  handleSend,
}: {
  course: any;
  handleSend: any;
}) => (
  <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-0.5 border border-zinc-700/60 shadow-xl mt-2 overflow-hidden group">
    <div className="bg-zinc-900/90 p-5 rounded-[14px]">
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="inline-block py-0.5 px-2 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-2 border border-blue-500/20">
            {course.category || "Undergraduate"}
          </span>
          <h3 className="text-white font-bold text-lg leading-tight">
            {course.title}
          </h3>
        </div>
        <span className="bg-zinc-800 text-zinc-300 text-[10px] font-bold px-2 py-1 rounded border border-zinc-700">
          {course.code}
        </span>
      </div>

      <p className="text-zinc-400 text-xs mb-4 leading-relaxed line-clamp-3">
        {course.description}
      </p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-zinc-950/50 p-2.5 rounded-lg border border-zinc-800/50 flex items-center gap-3">
          <div className="bg-blue-600/20 p-1.5 rounded-md text-blue-500">
            <Clock className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 block uppercase font-bold">
              Duration
            </span>
            <span className="text-xs text-zinc-200 font-medium">
              {course.duration}
            </span>
          </div>
        </div>
        <div className="bg-zinc-950/50 p-2.5 rounded-lg border border-zinc-800/50 flex items-center gap-3">
          <div className="bg-purple-600/20 p-1.5 rounded-md text-purple-500">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 block uppercase font-bold">
              Credits
            </span>
            <span className="text-xs text-zinc-200 font-medium">
              {course.credits}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleSend("curriculum")}
        className="w-full py-3 bg-white hover:bg-zinc-200 text-black font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        View Curriculum <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  </div>
);

const ContactCard = () => (
  <div className="bg-zinc-800 p-5 rounded-2xl border border-zinc-700 mt-2 space-y-4">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 border border-green-500/30">
        <User className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-white font-bold text-sm">Admissions Counselor</h3>
        <p className="text-zinc-400 text-xs flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />{" "}
          Available Now
        </p>
      </div>
    </div>
    <div className="space-y-2">
      <a
        href="tel:+9771446578"
        className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl hover:bg-zinc-700/50 transition border border-zinc-800 group"
      >
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition" />
          <span className="text-zinc-300 text-xs font-medium">
            +977-1-446578
          </span>
        </div>
        <span className="text-[10px] bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded">
          Call
        </span>
      </a>
      <a
        href="mailto:info@yeti.edu.np"
        className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl hover:bg-zinc-700/50 transition border border-zinc-800 group"
      >
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition" />
          <span className="text-zinc-300 text-xs font-medium">
            info@yeti.edu.np
          </span>
        </div>
        <span className="text-[10px] bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded">
          Email
        </span>
      </a>
      <a
        href="https://maps.google.com"
        target="_blank"
        className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl hover:bg-zinc-700/50 transition border border-zinc-800 group"
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition" />
          <span className="text-zinc-300 text-xs font-medium">
            Baneshwor, Kathmandu
          </span>
        </div>
        <span className="text-[10px] bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded">
          Map
        </span>
      </a>
    </div>
  </div>
);

// --- 5. MAIN COMPONENT ---
export default function YetiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [chatContext, setChatContext] = useState<{
    lastIntent: string | null;
    activeCourseKey: string | null;
  }>({ lastIntent: null, activeCourseKey: null });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(
    () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }),
    [messages, isTyping]
  );

  // Initial Message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "init",
          sender: "bot",
          type: "text",
          content:
            "Hi there! 👋 I'm Yeti, your admissions assistant. Whether you're looking for the right program or need scholarship info, I'm here to help.",
          suggestions: ["View Programs", "Talk to a Counselor", "Scholarships"],
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  // --- LOGIC: ANALYZE INTENT ---
  const analyzeIntent = (input: string) => {
    const cleanInput = input.toLowerCase().trim();

    // 0. IMMEDIATE PHRASE MATCHING (Fixes "Talk to a Counselor" bug)
    if (
      cleanInput.includes("talk to a counselor") ||
      cleanInput.includes("speak to someone")
    )
      return { intent: "contact", entity: null };
    if (
      cleanInput.includes("view programs") ||
      cleanInput === "programs" ||
      cleanInput === "courses"
    )
      return { intent: "courses", entity: null };
    if (cleanInput.includes("scholarships"))
      return { intent: "scholarships", entity: null };
    if (cleanInput.includes("curriculum") || cleanInput.includes("syllabus"))
      return { intent: "curriculum", entity: null };

    // 1. Detect Course Entity
    let detectedCourseKey = null;
    const tokens = cleanInput.split(/[\s,.?!]+/);
    for (const key of Object.keys(coursesDB)) {
      if (
        cleanInput.includes(key.toLowerCase()) ||
        cleanInput.includes(coursesDB[key].title.toLowerCase()) ||
        isFuzzyMatch(cleanInput, coursesDB[key].title)
      ) {
        detectedCourseKey = key;
        break; // Stop once found
      }
    }

    // 2. Detect Intent via Synonyms
    let bestIntent = "unknown";
    let maxScore = 0;
    Object.entries(SYNONYMS).forEach(([intent, keywords]) => {
      let score = 0;
      tokens.forEach((token) => {
        if (keywords.some((k) => isFuzzyMatch(token, k))) score += 1;
      });
      if (score > maxScore) {
        maxScore = score;
        bestIntent = intent;
      }
    });

    return { intent: bestIntent, entity: detectedCourseKey };
  };

  // --- LOGIC: GENERATE RESPONSE ---
  const generateResponse = (analysis: {
    intent: string;
    entity: string | null;
  }) => {
    const { intent, entity } = analysis;

    // **CRITICAL FIX**: If intent is explicitly functional (contact, admission, etc.),
    // we CLEAR the active course key so the bot stops thinking about the previous course.
    let nextActiveCourseKey = entity || chatContext.activeCourseKey;
    if (
      !entity &&
      [
        "contact",
        "greetings",
        "bye",
        "thanks",
        "location",
        "scholarships",
        "events",
        "whoareyou",
      ].includes(intent)
    ) {
      nextActiveCourseKey = null;
    }

    setChatContext({
      lastIntent: intent,
      activeCourseKey: nextActiveCourseKey,
    });
    const currentCourse = nextActiveCourseKey
      ? coursesDB[nextActiveCourseKey]
      : null;

    // --- RESPONSES ---

    // 1. CONTACT / COUNSELOR (Priority High)
    if (intent === "contact") {
      return {
        type: "component",
        content: <ContactCard />,
        suggestions: ["View Programs", "Where are you located?"],
      };
    }

    // 2. COURSES (General List)
    if (intent === "courses" && !currentCourse) {
      return {
        type: "component",
        content: (
          <div className="bg-zinc-800 rounded-2xl p-4 border border-zinc-700 mt-2">
            <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" /> Explore
              Programs
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {Object.keys(coursesDB).map((key) => (
                <button
                  key={key}
                  onClick={() => handleSend(coursesDB[key].code)}
                  className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl hover:bg-zinc-700 transition border border-zinc-800 group text-left"
                >
                  <span className="text-sm text-zinc-300 group-hover:text-white font-medium">
                    {coursesDB[key].title}
                  </span>
                  <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition" />
                </button>
              ))}
            </div>
          </div>
        ),
        suggestions: ["Scholarship Criteria", "Admissions"],
      };
    }

    // 3. SPECIFIC COURSE CARD (When context exists)
    if ((intent === "courses" || entity) && currentCourse) {
      return {
        type: "component",
        content: <CourseCard course={currentCourse} handleSend={handleSend} />,
        suggestions: [
          `Scholarship for ${currentCourse.code}`,
          `Apply for ${currentCourse.code}`,
          "Talk to a Counselor",
        ],
      };
    }

    // 4. CURRICULUM
    if (intent === "curriculum") {
      if (currentCourse) {
        return {
          type: "component",
          content: (
            <div className="mt-2 space-y-3">
              <div className="bg-zinc-800 p-4 rounded-2xl border border-zinc-700">
                <h3 className="text-white font-bold text-sm mb-3">
                  Syllabus Highlights
                </h3>
                <ul className="space-y-2">
                  {currentCourse.curriculum
                    ?.slice(0, 2)
                    .map((year: any, i: number) => (
                      <li
                        key={i}
                        className="text-xs text-zinc-400 pb-2 border-b border-zinc-700/50 last:border-0 last:pb-0"
                      >
                        <strong className="text-blue-400 block mb-1">
                          {year.year}
                        </strong>
                        {year.semesters[0].subjects.slice(0, 3).join(", ")}...
                      </li>
                    ))}
                </ul>
              </div>
              <button
                onClick={() =>
                  handleSend(`Requirements for ${currentCourse.code}`)
                }
                className="w-full py-2 bg-zinc-100 text-black font-bold text-xs rounded-lg"
              >
                Check Eligibility
              </button>
            </div>
          ),
          suggestions: ["Tuition Fees", "Back to Course"],
        };
      }
      return {
        type: "text",
        content: "Which program's syllabus do you need?",
        suggestions: ["View Programs"],
      };
    }

    // 5. FEES / SCHOLARSHIPS
    if (intent === "fees" || intent === "scholarships") {
      return {
        type: "component",
        content: (
          <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 mt-2">
            <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" /> Financial Aid
            </h3>
            <p className="text-zinc-300 text-xs leading-relaxed mb-4">
              We believe talent shouldn't have a price tag. We offer:
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3 h-3 text-green-500" /> Merit-based
                Scholarships
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3 h-3 text-green-500" /> Flexible
                Payment Plans
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3 h-3 text-green-500" /> Early Bird
                Discounts
              </div>
            </div>
            <button
              onClick={() => handleSend("contact")}
              className="w-full py-2 bg-blue-600 text-white font-bold text-xs rounded-lg hover:bg-blue-500"
            >
              Contact Finance Dept
            </button>
          </div>
        ),
        suggestions: ["Admissions Process", "View Programs"],
      };
    }

    // 6. ADMISSIONS
    if (intent === "admissions" || intent === "requirements") {
      return {
        type: "component",
        content: (
          <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 mt-2">
            <h3 className="text-white font-bold text-sm mb-2">
              Admissions 2025
            </h3>
            <p className="text-zinc-400 text-xs mb-3">
              Simple 3-step process to join us:
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex gap-3">
                <span className="bg-zinc-900 text-zinc-500 w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold border border-zinc-700">
                  1
                </span>
                <p className="text-xs text-zinc-300">
                  Submit online application form.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="bg-zinc-900 text-zinc-500 w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold border border-zinc-700">
                  2
                </span>
                <p className="text-xs text-zinc-300">
                  Clear entrance exam/interview.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="bg-zinc-900 text-zinc-500 w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold border border-zinc-700">
                  3
                </span>
                <p className="text-xs text-zinc-300">
                  Submit documents & secure seat.
                </p>
              </div>
            </div>
            <button className="w-full py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200">
              Apply Now
            </button>
          </div>
        ),
        suggestions: ["Scholarships", "Talk to a Counselor"],
      };
    }

    // 7. LOCATION
    if (intent === "location") {
      return {
        type: "component",
        content: (
          <div className="bg-zinc-800 p-1 rounded-xl border border-zinc-700 mt-2 overflow-hidden">
            <div className="bg-zinc-700 h-24 flex items-center justify-center">
              <MapPin className="text-zinc-500 w-6 h-6" />
            </div>
            <div className="p-3">
              <p className="text-white font-bold text-sm">
                Yeti International College
              </p>
              <p className="text-zinc-400 text-xs">Baneshwor, Kathmandu</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                className="text-blue-400 text-xs font-bold mt-2 block hover:underline"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>
        ),
        suggestions: ["Contact Us", "View Programs"],
      };
    }

    // 8. FALLBACK / SMALL TALK
    if (intent === "greetings")
      return {
        type: "text",
        content:
          "Hello! Ready to design your future? Ask me about our programs.",
        suggestions: ["View Programs"],
      };
    if (intent === "whoareyou")
      return {
        type: "text",
        content: "I am Yeti, your academic guide.",
        suggestions: ["Talk to a Counselor"],
      };

    return {
      type: "text",
      content:
        "I'm not 100% sure about that specific detail. To get the best answer, I recommend speaking with our team.",
      suggestions: ["Talk to a Counselor", "View Programs"],
    };
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "text",
        content: text,
        sender: "user",
        timestamp: new Date(),
      },
    ]);
    setInputValue("");
    setIsTyping(true);

    const analysis = analyzeIntent(text);
    // Simulate "thinking" time based on complexity
    const delay = analysis.intent === "unknown" ? 1000 : 600;

    setTimeout(() => {
      const response = generateResponse(analysis);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: response.type || "text",
          content: response.content || "",
          sender: "bot",
          timestamp: new Date(),
          suggestions: response.suggestions,
        },
      ]);
      setIsTyping(false);
    }, delay);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#154aa0] text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <MessageCircle className="w-6 h-6 fill-current" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-4 md:right-6 z-50 w-[90vw] max-w-[380px] h-[650px] max-h-[80vh] flex flex-col bg-zinc-950 rounded-[32px] shadow-2xl border border-zinc-800 font-sans overflow-hidden ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 absolute top-0 w-full z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Sparkles className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">
                    Yeti Assistant
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: Date.now(),
                      sender: "bot",
                      type: "text",
                      content: "Chat reset. How can I help?",
                      suggestions: ["View Programs", "Talk to a Counselor"],
                      timestamp: new Date(),
                    },
                  ])
                }
                className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 pt-20 space-y-5 scrollbar-thin scrollbar-thumb-zinc-800">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] ${
                      msg.sender === "user"
                        ? "bg-white text-zinc-950 rounded-2xl rounded-tr-sm px-4 py-3 font-medium shadow-sm"
                        : ""
                    }`}
                  >
                    {msg.sender === "bot" && msg.type === "text" ? (
                      <BotMessageWrapper>{msg.content}</BotMessageWrapper>
                    ) : (
                      msg.content
                    )}
                  </div>
                  {msg.sender === "bot" && msg.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-2.5 ml-1 max-w-[95%]">
                      {msg.suggestions.map((sugg: string, i: number) => (
                        <button
                          key={i}
                          onClick={() => handleSend(sugg)}
                          className="px-3 py-1.5 bg-zinc-900/80 border border-zinc-700/50 rounded-full text-[11px] font-medium text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-all shadow-sm"
                        >
                          {sugg}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-1 ml-1">
                  <div className="w-2 h-2 bg-zinc-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-zinc-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-zinc-600 rounded-full animate-bounce"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-zinc-900/80 backdrop-blur-xl border-t border-zinc-800/50">
              <div className="relative group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                  placeholder="Ask a question..."
                  disabled={isTyping}
                  className="w-full bg-zinc-950 text-white text-sm rounded-full pl-5 pr-12 py-3.5 border border-zinc-800 focus:border-zinc-600 focus:outline-none transition-all placeholder:text-zinc-600 shadow-inner group-hover:border-zinc-700"
                />
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full text-zinc-950 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
