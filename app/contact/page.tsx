"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Components ---

// Styled Input Component
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
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
      {label}
    </label>
    {rows ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full bg-zinc-50 border-0 rounded-2xl p-5 text-zinc-900 font-medium placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all resize-none"
      />
    ) : (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-zinc-50 border-0 rounded-2xl p-5 text-zinc-900 font-medium placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
      />
    )}
  </div>
);

// Accordion Item for FAQ
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
}) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer border-b border-zinc-100 last:border-0 py-6 transition-all duration-300 ${isOpen ? "pb-8" : ""
        }`}
    >
      <div className="flex justify-between items-center">
        <h4
          className={`text-lg font-bold transition-colors ${isOpen ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-900"
            }`}
        >
          {question}
        </h4>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
            ? "bg-zinc-900 text-white rotate-45"
            : "bg-zinc-100 text-zinc-400"
            }`}
        >
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
      >
        <p className="text-zinc-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  // Controlled form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // client-side validation
    if (!firstName || !lastName || !email || !subject || !message) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setFormStatus("submitting");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, subject, message }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.error || "Failed to send message");
      }

      setFormStatus("success");
      // clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "An error occurred. Please try again later.");
      setFormStatus("idle");
    }
  };

  const faqs = [
    {
      q: "How can I register for an event?",
      a: "You can register directly through our events page by clicking the 'Register' button on any specific event card.",
    },
    {
      q: "Do you offer group discounts?",
      a: "Yes, for teams larger than 5 people, we offer a 20% discount on all workshops and conferences.",
    },
    {
      q: "Where are your offices located?",
      a: "We have a main hub in Zurich and satellite offices in London and New York. All locations are open for visits.",
    },
  ];

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#F2F2F2] text-zinc-900 py-8 md:py-12 px-4 md:px-8 font-sans">
        <div className="max-w-[1400px] mx-auto">
          {/* --- Page Header --- */}
          <div className="mb-12 md:mb-20">
            <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
              Support & Inquiries
            </h5>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] text-zinc-900">
              Get in
              <br />
              <span className="text-zinc-400">Touch.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* --- Left Column (Info Cards) --- */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="lg:sticky lg:top-8 space-y-6">
                {/* Contact Details Card */}
                <div className="bg-zinc-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8">Contact Info</h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                            Email
                          </p>
                          <a
                            href="mailto:hello@agency.com"
                            className="text-lg font-bold hover:text-zinc-300 transition-colors"
                          >
                            info@yeticollege.edu.np
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                            Phone
                          </p>
                          <p className="text-lg font-bold">+977 1-4792063</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                            Hours
                          </p>
                          <p className="font-medium text-zinc-400">
                            Mon-Fri, 06:00 - 18:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Circle */}
                  <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-zinc-800/50 blur-3xl pointer-events-none" />
                </div>

                {/* Map / Location Card */}
                <div className="bg-white p-2 rounded-[2.5rem] shadow-sm border border-zinc-100 group cursor-pointer">
                  <div className="bg-zinc-100 rounded-[2rem] aspect-[4/3] relative overflow-hidden">
                    {/* Placeholder for Real Map */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4655.418152257627!2d85.32724007644036!3d27.687456276193924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0ab44f839%3A0x21d0492e1239b492!2sYETI%20International%20College!5e1!3m2!1sen!2snp!4v1763720921356!5m2!1sen!2snp"
                      width="600"
                      height="450"
                      //   style="border:0;"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400">
                      <MapPin className="w-8 h-8 mb-2 group-hover:-translate-y-1 transition-transform duration-300" />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Zurich, CH
                      </span>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors duration-300" />
                  </div>
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-zinc-900">Headquarters</p>
                      <p className="text-sm text-zinc-500">
                        Bahnhofstrasse 10, 8001
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Right Column (Form & FAQ) --- */}
            <div className="lg:col-span-8 space-y-6">
              {/* Form Container */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
                {formStatus === "success" ? (
                  // Success State
                  <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-900 mb-2">
                      Message Sent!
                    </h2>
                    <p className="text-zinc-500 max-w-md mx-auto">
                      Thanks for reaching out. Our team will review your message
                      and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-8 px-6 py-3 bg-zinc-100 rounded-full font-bold text-sm text-zinc-600 hover:bg-zinc-200 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  // Form State
                  <form onSubmit={handleSubmit} className="relative z-10">
                    <div className="flex justify-between items-end mb-10">
                      <div>
                        <h2 className="text-3xl font-bold text-zinc-900">
                          Send a message
                        </h2>
                        <p className="text-zinc-500 mt-2">
                          We'd love to hear from you.
                        </p>
                      </div>
                      <MessageSquare className="w-8 h-8 text-zinc-200 hidden md:block" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <InputField
                        label="First Name"
                        name="firstName"
                        placeholder="Jane"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                      <InputField
                        label="Last Name"
                        name="lastName"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <InputField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <InputField
                        label="Subject"
                        name="subject"
                        placeholder="General Inquiry"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-8">
                      <InputField
                        label="Message"
                        name="message"
                        rows={4}
                        placeholder="How can we help you today?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex items-center justify-end">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="group flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formStatus === "submitting"
                          ? "Sending..."
                          : "Send Message"}
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
                  Frequently Asked Questions
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
