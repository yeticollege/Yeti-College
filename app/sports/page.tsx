"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  Send,
  Trophy,
  Clock,
  Gamepad2,
  User,
  Users,
  AlertCircle,
  Vote,
  Timer,
  Plus,
  Trash2,
  Check,
  Crown,
  GraduationCap, // Added Icon
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Alert } from "@/components/ui/alert";

// --- Components ---

const InputField = ({
  label,
  type = "text",
  placeholder,
  rows,
  name,
  value,
  onChange,
  required = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  rows?: number;
  name?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
}) => (
  <div className="space-y-2 w-full">
    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {rows ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full bg-zinc-50 border-0 rounded-2xl p-5 text-zinc-900 font-medium placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all resize-none outline-none"
      />
    ) : (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-zinc-50 border-0 rounded-2xl p-5 text-zinc-900 font-medium placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all outline-none"
      />
    )}
  </div>
);

const SportBadge = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-4 rounded-2xl text-sm font-bold transition-all border-2 text-left flex justify-between items-center group ${
      selected
        ? "border-zinc-900 bg-zinc-900 text-white shadow-lg shadow-zinc-200"
        : "border-zinc-100 bg-zinc-50 text-zinc-600 hover:border-zinc-300 hover:bg-white"
    }`}
  >
    {label}
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
        selected
          ? "bg-white text-zinc-900"
          : "bg-zinc-200 text-zinc-400 group-hover:bg-zinc-300"
      }`}
    >
      {selected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
    </div>
  </button>
);

const ParticipationToggle = ({
  value,
  onChange,
}: {
  value: "Solo" | "Team";
  onChange: (val: "Solo" | "Team") => void;
}) => {
  return (
    <div className="space-y-2 mb-6">
      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
        Participation Type <span className="text-red-500">*</span>
      </label>
      <div className="bg-zinc-100 p-1.5 rounded-2xl flex relative">
        <button
          type="button"
          onClick={() => onChange("Solo")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
            value === "Solo"
              ? "bg-white text-zinc-900 shadow-md"
              : "text-zinc-400 hover:text-zinc-600"
          }`}
        >
          <User className="w-4 h-4" />
          Solo Player
        </button>
        <button
          type="button"
          onClick={() => onChange("Team")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
            value === "Team"
              ? "bg-white text-zinc-900 shadow-md"
              : "text-zinc-400 hover:text-zinc-600"
          }`}
        >
          <Users className="w-4 h-4" />
          Team Entry
        </button>
      </div>
    </div>
  );
};

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={`group cursor-pointer border-b border-zinc-100 last:border-0 py-6 transition-all duration-300 ${
      isOpen ? "pb-8" : ""
    }`}
  >
    <div className="flex justify-between items-center">
      <h4
        className={`text-lg font-bold transition-colors ${
          isOpen ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-900"
        }`}
      >
        {question}
      </h4>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-zinc-900 text-white rotate-45"
            : "bg-zinc-100 text-zinc-400"
        }`}
      >
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-zinc-500 leading-relaxed">{answer}</p>
    </div>
  </div>
);

const InfoRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors">
    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-zinc-900">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="font-bold text-zinc-900 leading-tight">{value}</p>
    </div>
  </div>
);

// Constants
const COOLDOWN_DURATION = 120;
const COOLDOWN_KEY = "submission_cooldown_expiry";

const physicalSports = [
  "Futsal",
  "Basketball",
  "Table Tennis",
  "Carrom Board",
  "Chess",
  "Badminton",
];

const eSports = ["PUBG Mobile", "Free Fire", "Clash Royale", "Mobile Legends"];

export default function SportsRegistrationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [cooldown, setCooldown] = useState(0);

  const [players, setPlayers] = useState<string[]>([""]);
  const playerInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // 1. UPDATED STATE: Added faculty and semester
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    faculty: "",
    semester: "",
    sports: [] as string[],
    participationType: "Solo" as "Solo" | "Team",
    teamName: "",
    message: "",
  });

  useEffect(() => {
    const storedExpiry = localStorage.getItem(COOLDOWN_KEY);
    if (storedExpiry) {
      const remainingSeconds = Math.ceil(
        (parseInt(storedExpiry, 10) - Date.now()) / 1000,
      );
      if (remainingSeconds > 0) {
        setFormStatus("success");
        setCooldown(remainingSeconds);
      } else {
        localStorage.removeItem(COOLDOWN_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (formStatus !== "success") return;
    const checkTimer = () => {
      const storedExpiry = localStorage.getItem(COOLDOWN_KEY);
      if (storedExpiry) {
        const remaining = Math.ceil(
          (parseInt(storedExpiry, 10) - Date.now()) / 1000,
        );
        if (remaining > 0) {
          setCooldown(remaining);
        } else {
          setCooldown(0);
          localStorage.removeItem(COOLDOWN_KEY);
        }
      }
    };
    const interval = setInterval(checkTimer, 1000);
    checkTimer();
    return () => clearInterval(interval);
  }, [formStatus]);

  const toggleSport = (sportName: string) => {
    const isESport = eSports.includes(sportName);
    const isPhysical = physicalSports.includes(sportName);

    // Limit check for Physical Sports
    if (isPhysical && !formData.sports.includes(sportName)) {
      const currentPhysicalCount = formData.sports.filter((s) =>
        physicalSports.includes(s),
      ).length;

      if (currentPhysicalCount >= 3) {
        alert("You can only select up to 3 Physical Sports.");
        return;
      }
    }

    setFormData((prev) => {
      let newSports = [...prev.sports];
      if (newSports.includes(sportName)) {
        newSports = newSports.filter((s) => s !== sportName);
      } else {
        if (isESport) {
          newSports = newSports.filter((s) => !eSports.includes(s));
        }
        newSports.push(sportName);
      }
      return { ...prev, sports: newSports };
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (val: "Solo" | "Team") => {
    setFormData((prev) => ({
      ...prev,
      participationType: val,
      teamName: val === "Solo" ? "" : prev.teamName,
    }));
    if (val === "Team" && players.length === 0) setPlayers([""]);
  };

  const handlePlayerChange = (index: number, value: string) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const addPlayer = () => {
    setPlayers((prev) => [...prev, ""]);
    setTimeout(() => {
      const lastIndex = players.length;
      playerInputsRef.current[lastIndex]?.focus();
    }, 0);
  };

  const removePlayer = (index: number) => {
    if (players.length <= 1) return;
    setPlayers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (players[index].trim() !== "") {
        addPlayer();
      }
    } else if (
      e.key === "Backspace" &&
      players[index] === "" &&
      players.length > 1
    ) {
      e.preventDefault();
      removePlayer(index);
      playerInputsRef.current[index - 1]?.focus();
    }
  };

  const handleResetForm = () => {
    if (cooldown > 0) return;
    setFormStatus("idle");
    localStorage.removeItem(COOLDOWN_KEY);
    setPlayers([""]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      faculty: "",
      semester: "",
      sports: [],
      participationType: "Solo",
      teamName: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.email ||
      formData.sports.length === 0 ||
      !formData.phone ||
      !formData.faculty || // Validation
      !formData.semester // Validation
    ) {
      alert("Please fill all required fields and select at least one sport.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (formData.participationType === "Team") {
      if (!formData.teamName) {
        alert("Please enter a Team Name.");
        return;
      }
      if (players.some((p) => p.trim() === "")) {
        alert("Please fill in all player names.");
        return;
      }
    }

    try {
      setFormStatus("submitting");
      const sportsJoined = formData.sports.join(", ");

      // 2. UPDATED LOGIC: Format Faculty and Semester into the message text
      let finalMessage = `ACADEMIC DETAILS:\nFaculty: ${formData.faculty}\nSemester: ${formData.semester}`;

      if (formData.participationType === "Team") {
        const rosterString = players.map((p, i) => `${i + 1}. ${p}`).join("\n");
        finalMessage += `\n\nROSTER:\n${rosterString}`;
      }

      if (formData.message) {
        finalMessage += `\n\nNOTES: ${formData.message}`;
      }

      const submissionData = {
        ...formData,
        sport: sportsJoined,
        message: finalMessage, // Sending combined formatted text
      };

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.error || "Failed to register");
      }

      const expiryTime = Date.now() + COOLDOWN_DURATION * 1000;
      localStorage.setItem(COOLDOWN_KEY, expiryTime.toString());

      setFormStatus("success");
      setCooldown(COOLDOWN_DURATION);
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "An error occurred.");
      setFormStatus("idle");
    }
  };

  const faqs = [
    {
      q: "Can I register a full team for PUBG?",
      a: "Yes! Select 'Team Entry' and provide your Squad Name. Remember, your registration counts as a vote for PUBG to be the official E-sport.",
    },
    {
      q: "What if I want to play multiple sports?",
      a: "You can select as many Physical Sports as you want in one form. However, you can only vote for one E-sport game.",
    },
    {
      q: "Is there a registration fee?",
      a: "No, registration for all sports is completely free for Yeti International College students.",
    },
  ];

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#F2F2F2] text-zinc-900 py-8 md:py-12 px-4 md:px-8 font-sans">
        <div className="max-w-[1400px] mx-auto">
          {/* --- Page Header --- */}
          <div className="mb-12 md:mb-20">
            <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
              Annual Sports Week 2026
            </h5>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] text-zinc-900">
              Join the
              <br />
              <span className="text-zinc-400">Game.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* --- Left Sidebar --- */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="lg:sticky lg:top-8 space-y-4">
                <div className="bg-zinc-900 text-white p-6 rounded-[2rem] shadow-xl relative overflow-hidden">
                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">
                        Registration Ends
                      </p>
                      <h3 className="text-3xl font-bold">Jan 26</h3>
                    </div>
                    <div className="bg-zinc-800 p-3 rounded-full">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="relative z-10 text-sm text-zinc-400 mt-4 leading-relaxed">
                    Ensure your squad is registered before midnight.
                  </p>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ff3e00] rounded-full blur-[60px] opacity-40"></div>
                </div>

                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-zinc-100">
                  <h3 className="text-xl font-bold mb-6 px-2">Event Details</h3>
                  <div className="space-y-3">
                    <InfoRow
                      icon={Clock}
                      label="Timing"
                      value="07:00 AM - 12:00 PM"
                    />
                    <InfoRow
                      icon={MapPin}
                      label="Location"
                      value="College Ground & Arena"
                    />
                  </div>
                  {/* Added new visual note */}
                  <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-start gap-3">
                    <Vote className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                        E-Sports Voting
                      </p>
                      <p className="text-xs font-medium text-amber-900/80 leading-relaxed">
                        Only the E-Sport game with the highest votes will be
                        officially played. Max 1 vote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Right Column (Form) --- */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
                {formStatus === "success" ? (
                  <div className="h-[500px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-zinc-900 text-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                      <Trophy className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-900 mb-2">
                      You're in the game!
                    </h2>
                    <p className="text-zinc-500 max-w-md mx-auto">
                      Registration received. Check your email for further
                      details.
                    </p>

                    <button
                      onClick={handleResetForm}
                      disabled={cooldown > 0}
                      className={`mt-8 px-8 py-4 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                        cooldown > 0
                          ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                          : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                      }`}
                    >
                      {cooldown > 0 ? (
                        <>
                          <Timer className="w-4 h-4 animate-pulse" />
                          Wait {formatTime(cooldown)} to register another
                        </>
                      ) : (
                        "Register another"
                      )}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10">
                    <div className="flex justify-between items-end mb-10">
                      <div>
                        <h2 className="text-3xl font-bold text-zinc-900">
                          Registration
                        </h2>
                        <p className="text-zinc-500 mt-2">
                          Choose your games and secure your spot.
                        </p>
                      </div>
                      <Gamepad2 className="w-10 h-10 text-zinc-200 hidden md:block" />
                    </div>

                    <ParticipationToggle
                      value={formData.participationType}
                      onChange={handleTypeChange}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <InputField
                        label={
                          formData.participationType === "Team"
                            ? "Captain's First Name"
                            : "First Name"
                        }
                        name="firstName"
                        placeholder="Sumit"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      <InputField
                        label={
                          formData.participationType === "Team"
                            ? "Captain's Last Name"
                            : "Last Name"
                        }
                        name="lastName"
                        placeholder="Pokhrel"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="developer@sumit.info.np"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <InputField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="98XXXXXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* 3. UPDATED UI: Added Faculty and Semester inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <InputField
                        label="Faculty"
                        name="faculty"
                        type="text"
                        placeholder="e.g. BIT, BCA, BBA"
                        value={formData.faculty}
                        onChange={handleInputChange}
                        required
                      />
                      <InputField
                        label="Semester"
                        name="semester"
                        type="text"
                        placeholder="e.g. 1st, 2nd, 8th"
                        value={formData.semester}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Sports Selection Section */}
                    <div className="space-y-8 mb-10">
                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                          Select Physical Sports (Max 3){" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {physicalSports.map((s) => (
                            <SportBadge
                              key={s}
                              label={s}
                              selected={formData.sports.includes(s)}
                              onClick={() => toggleSport(s)}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                            Vote for E-Sport (Max 1){" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <p className="text-[10px] text-amber-600 font-bold uppercase mt-1 ml-1">
                            Only the game with the most votes will be played
                          </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {eSports.map((s) => (
                            <SportBadge
                              key={s}
                              label={s}
                              selected={formData.sports.includes(s)}
                              onClick={() => toggleSport(s)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {formData.participationType === "Team" ? (
                      <div className="mb-8 animate-in fade-in slide-in-from-top-4">
                        <div className="mb-10">
                          <InputField
                            label="Team Name"
                            name="teamName"
                            placeholder="e.g. Cosmic Wanderer"
                            value={formData.teamName}
                            onChange={handleInputChange}
                            required={true}
                          />
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between px-1">
                            <div>
                              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                                Squad Roster
                              </label>
                              <p className="text-[10px] text-zinc-400 font-bold uppercase mt-0.5">
                                Press Enter to add next player
                              </p>
                            </div>
                            <span className="text-[10px] font-black bg-zinc-900 text-white px-2.5 py-1 rounded-full uppercase tracking-tighter">
                              {players.length} Players
                            </span>
                          </div>

                          <div className="bg-zinc-50/50 p-4 rounded-[2rem] border border-zinc-100 space-y-3">
                            {players.map((player, index) => (
                              <div
                                key={index}
                                className="flex gap-3 group animate-in slide-in-from-left-2 duration-300"
                              >
                                <div className="flex-1 relative">
                                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                                    {index === 0 ? (
                                      <Crown className="w-4 h-4 text-amber-500" />
                                    ) : (
                                      <div className="w-4 h-4 rounded-full bg-zinc-200 text-[10px] font-bold flex items-center justify-center text-zinc-500">
                                        {index + 1}
                                      </div>
                                    )}
                                  </div>
                                  <input
                                    ref={(el) =>
                                      (playerInputsRef.current[index] = el)
                                    }
                                    type="text"
                                    placeholder={
                                      index === 0
                                        ? "Captain's Full Name"
                                        : `Player ${index + 1} Name`
                                    }
                                    value={player}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onChange={(e) =>
                                      handlePlayerChange(index, e.target.value)
                                    }
                                    className="w-full bg-white border border-zinc-100 rounded-2xl p-4 pl-12 text-zinc-900 font-medium placeholder:text-zinc-300 focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all outline-none"
                                  />
                                </div>
                                {players.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removePlayer(index)}
                                    className="w-14 bg-white border border-zinc-100 text-zinc-300 rounded-2xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
                                  >
                                    <Trash2 className="w-5 h-5" />
                                  </button>
                                )}
                              </div>
                            ))}

                            <button
                              type="button"
                              onClick={addPlayer}
                              className="w-full py-4 border-2 border-dashed border-zinc-200 rounded-2xl text-zinc-400 text-sm font-bold flex items-center justify-center gap-2 hover:border-zinc-400 hover:text-zinc-600 transition-all bg-white/50 mt-2"
                            >
                              <Plus className="w-4 h-4" /> Add Squad Member
                            </button>
                          </div>
                        </div>

                        <div className="mt-10">
                          <InputField
                            label="Additional Notes (Optional)"
                            name="message"
                            placeholder="Medical conditions, schedule conflicts, etc."
                            value={formData.message}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="mb-8">
                        <InputField
                          label="Additional Notes"
                          name="message"
                          rows={4}
                          placeholder="Any medical conditions or questions?"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-end pt-4">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="group flex items-center gap-3 bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formStatus === "submitting"
                          ? "Registering..."
                          : "Submit Registration"}
                        {formStatus !== "submitting" && (
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900 mb-8 border-b border-zinc-100 pb-4">
                  Registration FAQ
                </h3>
                <div>
                  {faqs.map((faq, idx) => (
                    <FAQItem
                      key={idx}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={openFAQ === idx}
                      onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
