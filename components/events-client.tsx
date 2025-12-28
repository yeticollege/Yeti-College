"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarDays, MapPin, ArrowUpRight, X, Clock } from "lucide-react";

// Define the type here or import from your schema/types
interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  location: string;
  time: string;
  accent: string;
}

interface EventsSnippetClientProps {
  events: Event[];
}

export default function EventsSnippetClient({
  events,
}: EventsSnippetClientProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedEvent]);

  const getDateParts = (dateString: string) => {
    const date = new Date(dateString);
    const d = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
    return {
      day: d.getDate(),
      month: d.toLocaleString("default", { month: "short" }).toUpperCase(),
      weekday: d.toLocaleString("default", { weekday: "long" }),
    };
  };

  return (
    <>
      <section className="py-12 md:py-24 px-4 md:px-8 bg-[#F2F2F2] font-sans text-zinc-900 relative">
        <div className="max-w-[1400px] mx-auto">
          {/* --- Section Header --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Agenda
              </h5>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-zinc-900">
                Upcoming
                <br />
                Events
              </h2>
              <p className="text-base md:text-lg text-zinc-500 max-w-md font-medium leading-relaxed">
                Connect, learn, and grow. Join our vibrant community at these
                upcoming gatherings.
              </p>
            </div>

            <Link
              href="/events"
              className="hidden md:inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all bg-white border border-zinc-200 rounded-full hover:bg-zinc-900 hover:text-white hover:border-zinc-900 group"
            >
              View Full Calendar
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* --- Grid Layout --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              const { day, month, weekday } = getDateParts(event.date);

              return (
                <Card
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="group flex flex-col h-full border-0 bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >
                  {/* Date & Category Header */}
                  <div className="p-6 md:p-8 pb-0 flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                        {month}
                      </span>
                      <span className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tighter leading-none">
                        {day}
                      </span>
                      <span className="text-sm font-medium text-zinc-500 mt-1">
                        {weekday}
                      </span>
                    </div>

                    <div className={`w-3 h-3 rounded-full ${event.accent}`} />
                  </div>

                  <CardContent className="p-6 md:p-8 flex-grow">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-3">
                        {event.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-6">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 bg-zinc-50 px-2.5 py-1.5 rounded-lg">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 bg-zinc-50 px-2.5 py-1.5 rounded-lg">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 md:p-8 pt-0 mt-auto">
                    <div className="w-full pt-6 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                        Details
                      </span>
                      <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/events"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-sm font-bold transition-colors bg-white border border-zinc-200 rounded-full hover:bg-zinc-50"
            >
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* --- POPUP WINDOW / MODAL --- */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white w-full md:max-w-2xl h-[85vh] md:h-auto md:max-h-[90vh] overflow-y-auto rounded-t-[2rem] md:rounded-[2.5rem] shadow-2xl relative animate-in slide-in-from-bottom-12 duration-300 scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-24 md:h-32 w-full bg-zinc-100 relative overflow-hidden">
              <div
                className={`absolute top-0 right-0 p-10 opacity-10 transform translate-x-10 -translate-y-10`}
              >
                <div
                  className={`w-64 h-64 rounded-full ${
                    selectedEvent.accent || "bg-blue-500"
                  }`}
                />
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-100 transition-colors z-10"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-zinc-900" />
              </button>
            </div>

            <div className="px-6 md:px-8 pb-8 md:pb-12 -mt-12 relative">
              <div className="inline-flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] border border-zinc-100 mb-6">
                <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  {getDateParts(selectedEvent.date).month}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tighter">
                  {getDateParts(selectedEvent.date).day}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    {selectedEvent.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 leading-tight">
                    {selectedEvent.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-zinc-600 bg-zinc-50 px-3 py-2 md:px-4 rounded-xl border border-zinc-100">
                    <CalendarDays className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400" />
                    {selectedEvent.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-zinc-600 bg-zinc-50 px-3 py-2 md:px-4 rounded-xl border border-zinc-100">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400" />
                    {selectedEvent.time}
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-zinc-600 bg-zinc-50 px-3 py-2 md:px-4 rounded-xl border border-zinc-100">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400" />
                    {selectedEvent.location}
                  </div>
                </div>

                <div className="h-px w-full bg-zinc-100 my-6" />

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-zinc-900">
                    About this event
                  </h4>
                  <p className="text-zinc-500 leading-relaxed text-base md:text-lg">
                    {selectedEvent.description}
                  </p>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20 flex items-center justify-center gap-2">
                    No registration required{" "}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
