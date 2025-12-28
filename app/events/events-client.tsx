"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
  Search,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Types ---
import { Event } from "./page"; // Or define inline if preferred

interface EventsClientProps {
  events: Event[];
}

// --- Helper Functions ---
const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) =>
  new Date(year, month, 1).getDay();

const getAdjustedDayIndex = (dayIndex: number) =>
  dayIndex === 0 ? 6 : dayIndex - 1;

// --- Calendar Component ---
const SwissCalendar = ({
  events,
  onDateSelect,
  selectedDate,
}: {
  events: Event[];
  onDateSelect: (date: string | null) => void;
  selectedDate: string | null;
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const startingDayIndex = getAdjustedDayIndex(getFirstDayOfMonth(year, month));

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const formatDate = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="p-6 bg-zinc-900 text-white rounded-3xl w-full shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-bold tracking-tight">
          {monthName} <span className="text-zinc-500">{year}</span>
        </span>
        <div className="flex gap-2">
          <button
            onClick={handlePrevMonth}
            className="p-1 hover:bg-zinc-700 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-1 hover:bg-zinc-700 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        {days.map((d) => (
          <div key={d} className="text-xs text-zinc-500 font-medium">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-zinc-400">
        {Array.from({ length: startingDayIndex }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateStr = formatDate(day);
          const hasEvent = events.some((e) => e.date === dateStr);
          const isSelected = selectedDate === dateStr;

          return (
            <button
              key={day}
              onClick={() => onDateSelect(isSelected ? null : dateStr)}
              className={`
                    relative aspect-square flex flex-col items-center justify-center rounded-2xl transition-all duration-300
                    ${
                      isSelected
                        ? "bg-white text-zinc-900 font-bold scale-110 shadow-lg"
                        : "hover:bg-zinc-800 hover:text-white"
                    }
                    ${
                      !isSelected && hasEvent
                        ? "font-bold text-white bg-zinc-800/50"
                        : ""
                    }
              `}
            >
              {day}
              {hasEvent && (
                <div
                  className={`absolute bottom-1.5 w-1 h-1 rounded-full ${
                    isSelected ? "bg-zinc-900" : "bg-blue-500"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// --- Main Client Component ---
export default function EventsClient({ events }: EventsClientProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const displayedEvents = events.filter((e) => {
    const matchesDate = selectedDate ? e.date === selectedDate : true;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      e.title.toLowerCase().includes(query) ||
      e.description.toLowerCase().includes(query) ||
      e.location.toLowerCase().includes(query) ||
      e.category.toLowerCase().includes(query);

    return matchesDate && matchesSearch;
  });

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
      <Header />
      <section className="min-h-screen bg-[#F2F2F2] text-zinc-900 py-8 md:py-12 px-4 md:px-8 font-sans relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="lg:sticky lg:top-8 space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] mb-4">
                    Event
                    <br />
                    <span className="text-zinc-400">Calendar.</span>
                  </h1>
                  <p className="text-zinc-600 font-medium">
                    Select a date or search to find activities.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search events, locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 bg-white border border-zinc-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm transition-all"
                  />
                </div>

                <SwissCalendar
                  events={events}
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                />

                {(selectedDate || searchQuery) && (
                  <div className="bg-blue-600 text-white p-6 rounded-3xl flex items-center justify-between animate-in fade-in slide-in-from-top-4">
                    <div className="flex-1 overflow-hidden pr-2">
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">
                        Active Filters
                      </p>
                      <div className="flex flex-col">
                        {selectedDate && (
                          <span className="font-bold text-lg leading-tight">
                            {selectedDate}
                          </span>
                        )}
                        {searchQuery && (
                          <span className="text-blue-100 text-sm font-medium truncate">
                            "{searchQuery}"
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedDate(null);
                        setSearchQuery("");
                      }}
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Feed */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex justify-between items-end mb-2 px-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  {selectedDate ? "Filtered Events" : "Upcoming Events"}
                </h2>
                <span className="text-sm font-semibold text-zinc-400 bg-white px-3 py-1 rounded-full border border-zinc-200">
                  {displayedEvents.length} found
                </span>
              </div>

              {displayedEvents.length === 0 && (
                <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-zinc-300">
                  <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {searchQuery ? (
                      <Search className="w-6 h-6 text-zinc-400" />
                    ) : (
                      <CalendarDays className="w-6 h-6 text-zinc-400" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    No events found
                  </h3>
                  <p className="text-zinc-500 max-w-sm mx-auto mt-2">
                    {searchQuery
                      ? `We couldn't find any events matching "${searchQuery}".`
                      : "There are no events scheduled for this specific date."}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedDate(null);
                      setSearchQuery("");
                    }}
                    className="mt-6 text-sm font-bold text-blue-600 underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {displayedEvents.map((event) => {
                const { day, month, weekday } = getDateParts(event.date);
                return (
                  <Card
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="group relative border-0 bg-white rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-40 bg-zinc-50 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-zinc-100 group-hover:bg-zinc-100 transition-colors">
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                          {month}
                        </span>
                        <span className="text-5xl font-bold tracking-tighter text-zinc-900 my-1">
                          {day}
                        </span>
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                          {weekday}
                        </span>
                      </div>
                      <CardContent className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`w-2 h-2 rounded-full ${event.accent}`}
                              />
                              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                {event.category}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 leading-tight">
                              {event.title}
                            </h3>
                          </div>
                          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                        <p className="text-zinc-500 leading-relaxed mb-6 line-clamp-2">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-auto">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-600 bg-zinc-100 px-3 py-2 rounded-xl">
                            <CalendarDays className="w-3.5 h-3.5" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-600 bg-zinc-100 px-3 py-2 rounded-xl">
                            <MapPin className="w-3.5 h-3.5" />
                            {event.location}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-10 duration-300 scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-32 w-full bg-zinc-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10 transform translate-x-10 -translate-y-10">
                <div
                  className={`w-64 h-64 rounded-full ${
                    selectedEvent.accent || "bg-blue-500"
                  }`}
                />
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-100 transition-colors z-10"
              >
                <X className="w-5 h-5 text-zinc-900" />
              </button>
            </div>
            <div className="px-8 pb-12 -mt-12 relative">
              <div className="inline-flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-4 min-w-[80px] border border-zinc-100 mb-6">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  {getDateParts(selectedEvent.date).month}
                </span>
                <span className="text-4xl font-bold text-zinc-900 tracking-tighter">
                  {getDateParts(selectedEvent.date).day}
                </span>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    {selectedEvent.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                    {selectedEvent.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-600 bg-zinc-50 px-4 py-2 rounded-xl border border-zinc-100">
                    <CalendarDays className="w-4 h-4 text-zinc-400" />
                    {selectedEvent.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-600 bg-zinc-50 px-4 py-2 rounded-xl border border-zinc-100">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    {selectedEvent.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-600 bg-zinc-50 px-4 py-2 rounded-xl border border-zinc-100">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                    {selectedEvent.location}
                  </div>
                </div>
                <div className="h-px w-full bg-zinc-100 my-6" />
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-zinc-900">
                    About this event
                  </h4>
                  <p className="text-zinc-500 leading-relaxed text-lg">
                    {selectedEvent.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
