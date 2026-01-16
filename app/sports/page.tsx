"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  Send,
  Trophy,
  Clock,
  ChevronDown,
  Gamepad2,
  User,
  Users,
  Calendar,
  AlertCircle,
  Vote, // Added icon
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

// Updated SelectField to handle groups
const SelectField = ({
  label,
  name,
  value,
  onChange,
  groups,
  required = false,
  helperText,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  groups: { label: string; options: string[] }[];
  required?: boolean;
  helperText?: string | null;
}) => (
  <div className="space-y-2 relative w-full">
    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-zinc-50 border-0 rounded-2xl p-5 text-zinc-900 font-medium appearance-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all outline-none cursor-pointer"
      >
        <option value="" disabled>
          Select a sport...
        </option>
        {groups.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
    </div>
    {helperText && (
      <p className="text-xs font-medium text-amber-600 ml-1 animate-in slide-in-from-top-1">
        {helperText}
      </p>
    )}
  </div>
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

export default function SportsRegistrationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sport: "",
    participationType: "Solo" as "Solo" | "Team",
    teamName: "",
    message: "",
  });

  // Categorized Sports
  const physicalSports = [
    "Futsal",
    "Basketball",
    "Table Tennis",
    "Carrom Board",
    "Chess",
    "Badminton",
  ];

  const eSports = [
    "PUBG Mobile",
    "Free Fire",
    "Clash Royale",
    "Mobile Legends",
  ];

  const sportsGroups = [
    { label: "Physical Sports", options: physicalSports },
    { label: "E-Sports (Voting)", options: eSports },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.email ||
      !formData.sport ||
      !formData.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be exactly 10 digits with no alphabets.");
      return;
    }

    if (formData.participationType === "Team" && !formData.teamName) {
      alert("Please enter a Team Name.");
      return;
    }

    try {
      setFormStatus("submitting");
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") === -1) {
        setFormStatus("idle");
        return;
      }

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.error || "Failed to register");
      }

      setFormStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        sport: "",
        participationType: "Solo",
        teamName: "",
        message: "",
      });
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
      q: "What if I want to play Badminton Singles and Doubles?",
      a: "You will need to submit two separate forms. One as a 'Solo' entry for singles, and one as a 'Team' entry for doubles.",
    },
    {
      q: "Is there a registration fee?",
      a: "No, registration for all sports is completely free for Yeti International College students.",
    },
  ];

  // Helper to detect if selected sport is E-Sport
  const isESportSelected = eSports.includes(formData.sport);

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
            {/* --- Left Sidebar (Info Dock) --- */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="lg:sticky lg:top-8 space-y-4">
                {/* 1. Deadline Card */}
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
                    Don't miss out. Ensure your squad is registered before
                    midnight.
                  </p>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ff3e00] rounded-full blur-[60px] opacity-40"></div>
                </div>

                {/* 2. Event Details Card */}
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-zinc-100">
                  <h3 className="text-xl font-bold mb-6 px-2">Event Details</h3>
                  <div className="space-y-3">
                    <InfoRow
                      icon={Calendar}
                      label="Schedule"
                      value="Feb 10 - Feb 15, 2026"
                    />
                    <InfoRow
                      icon={Clock}
                      label="Timing"
                      value="10:00 AM - 04:00 PM"
                    />
                    <InfoRow
                      icon={MapPin}
                      label="Location"
                      value="College Ground & Futsal Arena"
                    />
                  </div>

                  {/* E-Sports Notice (New) */}
                  <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-start gap-3">
                    <Vote className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                        E-Sports Voting
                      </p>
                      <p className="text-xs font-medium text-amber-900/80 leading-relaxed">
                        Only the E-Sport game with the highest number of
                        registrations/votes will be officially played. Choose
                        wisely!
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Contact Small Card */}
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-zinc-100 flex items-center justify-between group cursor-pointer hover:border-zinc-300 transition-colors">
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Need Help?
                    </p>
                    <a
                      href="mailto:sports@yeticollege.edu.np"
                      className="font-bold text-zinc-900 text-sm"
                    >
                      sports@yeticollege.edu.np
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* --- Right Column (Form & FAQ) --- */}
            <div className="lg:col-span-8 space-y-6">
              {/* Form Container */}
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
                      Registration received. We will email details to{" "}
                      {formData.email}.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-8 px-8 py-4 bg-zinc-100 rounded-full font-bold text-sm text-zinc-900 hover:bg-zinc-200 transition-colors"
                    >
                      Register another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10">
                    <div className="flex justify-between items-end mb-10">
                      <div>
                        <h2 className="text-3xl font-bold text-zinc-900">
                          Participant Registration
                        </h2>
                        <p className="text-zinc-500 mt-2">
                          Are you playing solo or bringing a squad?
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
                        placeholder="student@college.edu"
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Updated Sport Selector with Groups */}
                      <SelectField
                        label="Select Sport / Vote for E-Sport"
                        name="sport"
                        value={formData.sport}
                        onChange={handleInputChange}
                        groups={sportsGroups}
                        required
                        helperText={
                          isESportSelected
                            ? "Note: Your registration for this E-Sport counts as a vote."
                            : null
                        }
                      />

                      {formData.participationType === "Team" ? (
                        <div className="animate-in slide-in-from-top-4 fade-in duration-300">
                          <InputField
                            label="Team Name"
                            name="teamName"
                            placeholder="e.g. The Avengers"
                            value={formData.teamName}
                            onChange={handleInputChange}
                            required={true}
                          />
                        </div>
                      ) : (
                        <div className="hidden md:block opacity-0 pointer-events-none">
                          <InputField label="Spacer" placeholder="" />
                        </div>
                      )}
                    </div>

                    <div className="mb-8">
                      <InputField
                        label="Additional Notes / Player List"
                        name="message"
                        rows={3}
                        placeholder={
                          formData.participationType === "Team"
                            ? "List your squad members here..."
                            : "Any medical conditions or questions?"
                        }
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex items-center justify-end">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="group flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formStatus === "submitting"
                          ? "Registering..."
                          : "Submit Registration"}
                        {!formStatus && (
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
