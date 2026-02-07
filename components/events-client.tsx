"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  ArrowUpRight,
  X,
  Clock,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

// --- Helper: Strip HTML ---
const stripHtml = (html: string) => {
  if (typeof html !== "string") return "";
  return html.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ").trim();
};

interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  location: string;
  image?: string;
}

interface EventsSnippetClientProps {
  events: Event[];
}

export default function EventsSnippetClient({
  events,
}: EventsSnippetClientProps) {
  // If no events, don't render anything
  if (!events || events.length === 0) return null;

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Triple the events to create a seamless infinite loop
  const tripleEvents = [...events, ...events, ...events];
  
  // Start at the beginning of the middle set
  const [currentIndex, setCurrentIndex] = useState(events.length);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioning = useRef(false);

  // Card width + padding used for transform calculations
  const cardWidth = 460;

  // Logic to "teleport" the slider without animation when it reaches the ends
  const handleTransitionEnd = useCallback(() => {
    isTransitioning.current = false;

    // If we've slid into the third set (end), jump back to the middle set
    if (currentIndex >= events.length * 2) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - events.length);
    } 
    // If we've slid into the first set (start), jump forward to the middle set
    else if (currentIndex < events.length) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + events.length);
    }
  }, [currentIndex, events.length]);

  const handleNext = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Re-enable transitions after the "teleport" jump occurs
  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50); // Smallest possible delay to allow the state to sync
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused && !selectedEvent) {
      autoPlayRef.current = setInterval(handleNext, 3500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [handleNext, isPaused, selectedEvent]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "unset";
  }, [selectedEvent]);

  const getDateParts = (dateString: string) => {
    const d = new Date(dateString);
    return {
      day: d.getDate().toString().padStart(2, "0"),
      month: d.toLocaleString("default", { month: "long" }),
      year: d.getFullYear(),
      time: d.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
  };

  return (
    <>
      <section
        className="py-16 md:py-24 bg-[#F2F2F2] relative overflow-hidden flex flex-col items-center select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* SECTION HEADER */}
        <div className="text-center mb-10 md:mb-16 px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 mb-2">
            Upcoming <span className="text-zinc-400">Events.</span>
          </h2>
          <p className="text-zinc-500 font-medium text-base md:text-lg">
            Join us for these training and development sessions.
          </p>
        </div>

        <div className="max-w-[1400px] w-full relative flex items-center justify-center">
          {/* NAVIGATION BUTTONS */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 z-40 bg-[#E72428] p-3 rounded-xl shadow-xl hover:scale-110 transition active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-40 bg-[#E72428] p-3 rounded-xl shadow-xl hover:scale-110 transition active:scale-95"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>

          {/* SLIDER VIEWPORT */}
          <div className="relative w-full max-w-[1000px] flex items-center justify-center overflow-visible">
            <div
              className="flex items-center"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(calc(50% - (${currentIndex} * ${cardWidth}px) - (${cardWidth / 2}px)))`,
                transition: transitionEnabled
                  ? "transform 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
              }}
            >
              {tripleEvents.map((event, index) => {
                const { day, month, time } = getDateParts(event.date);
                const isActive = index === currentIndex;

                return (
                  <div
                    key={`${event.id}-${index}`}
                    className="flex-shrink-0 flex justify-center px-4"
                    style={{ width: cardWidth }}
                  >
                    <Card
                      onClick={() => setSelectedEvent(event)}
                      className={`w-full pt-0 max-w-[420px] border-0 bg-white shadow-2xl cursor-pointer transition-all duration-700 flex flex-col rounded-2xl overflow-hidden h-auto
                        ${
                          isActive
                            ? "scale-110 z-20 opacity-100"
                            : "scale-90 opacity-40 blur-[1px]"
                        }`}
                    >
                      {/* Event Image */}
                      <div className="relative w-full aspect-[16/7] bg-white flex items-center justify-center border-b">
                        <img
                          src={event.image || "/courses/events.svg"}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Card Content */}
                      <CardContent className="p-6 flex gap-5 md:gap-6 bg-white">
                        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center text-white shadow-lg rounded-xl bg-[#0054A6]">
                          <span className="text-3xl md:text-5xl font-bold">{day}</span>
                          <span className="text-[10px] font-bold uppercase opacity-80">{month}</span>
                        </div>

                        <div className="flex flex-col flex-1 justify-center">
                          <h4 className="text-lg md:text-xl font-black text-zinc-900 leading-tight mb-3 line-clamp-2">
                            {stripHtml(event.title)}
                          </h4>
                          <div className="space-y-1 text-zinc-500 text-xs md:text-sm font-bold uppercase">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-[#E72428]" />
                              <span>{time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-[#E72428]" />
                              <span className="line-clamp-1">{stripHtml(event.location)}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Link
          href="/events"
          className="mt-12 md:mt-20 inline-flex items-center px-8 md:px-10 py-3 md:py-4 bg-zinc-900 text-white rounded-full font-bold text-sm hover:bg-zinc-800 transition shadow-xl group"
        >
          View Full Calendar
          <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </section>

      {/* --- EVENT MODAL --- */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-zinc-900/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative w-full h-48 md:h-72 bg-zinc-100 overflow-hidden">
              <img
                src={selectedEvent.image || "/courses/events.svg"}
                alt=""
                className="w-full h-full object-cover" 
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-2.5 rounded-full text-zinc-900 hover:bg-[#E72428] hover:text-white transition-all shadow-xl z-10"
              >
                <X className="w-6 h-6" strokeWidth={3} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-hide">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-[#0054A6] text-white rounded-[1.8rem] flex flex-col items-center justify-center shadow-2xl border-4 border-white">
                  <span className="text-4xl md:text-6xl font-black leading-none">
                    {getDateParts(selectedEvent.date).day}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
                    {getDateParts(selectedEvent.date).month}
                  </span>
                </div>

                <div className="space-y-4">
                  <span className="inline-block px-5 py-2 rounded-full bg-zinc-100 text-zinc-500 text-[10px] font-black uppercase tracking-widest border border-zinc-200">
                    {selectedEvent.category || "General Event"}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black text-zinc-900 leading-tight">
                    {stripHtml(selectedEvent.title)}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <div className="flex items-center gap-5 p-5 bg-zinc-50 rounded-3xl border border-zinc-100">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Clock className="w-6 h-6 text-[#E72428]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Time</span>
                    <span className="text-base font-bold text-zinc-700">{getDateParts(selectedEvent.date).time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 bg-zinc-50 rounded-3xl border border-zinc-100">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <MapPin className="w-6 h-6 text-[#E72428]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Location</span>
                    <span className="text-base font-bold text-zinc-700">{stripHtml(selectedEvent.location)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 bg-zinc-50 rounded-3xl border border-zinc-100 md:col-span-2">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <CalendarDays className="w-6 h-6 text-[#E72428]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Full Date</span>
                    <span className="text-base font-bold text-zinc-700">
                      {getDateParts(selectedEvent.date).month} {getDateParts(selectedEvent.date).day}, {getDateParts(selectedEvent.date).year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-xl font-black text-zinc-900 border-l-4 border-[#E72428] pl-4">Description</h5>
                <p className="text-zinc-500 leading-relaxed text-base md:text-lg">
                  {stripHtml(selectedEvent.description)}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 bg-white border-t flex flex-col md:flex-row items-center justify-between gap-6 mt-auto">
               <p className="text-xs font-bold text-zinc-400">*Professional training event.</p>
               <button 
                onClick={() => setSelectedEvent(null)}
                className="w-full md:w-auto px-12 py-5 bg-zinc-900 text-white rounded-2xl font-black text-sm hover:bg-[#E72428] transition-all shadow-xl active:scale-95"
               >
                  Close Details
               </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}