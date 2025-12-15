// --- Types ---
export interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  location: string;
  time: string;
  accent: string;
  textAccent: string;
}

// --- Data ---
export const events: Event[] = [
  {
    id: 1,
    title: "BCA Semester kick-off",
    date: "2025-12-08",
    category: "Admissions",
    description:
      "2025 batch of students begin their journey at Yeti International College with an orientation program and campus tour.",
    location: "Main Quad",
    time: "07:00 AM",
    accent: "bg-[#FF4F00]",
    textAccent: "text-[#FF4F00]",
  },
  {
    id: 2,
    title: "Orientation day for New Students",
    date: "2025-12-16",
    category: "Academic",
    description:
      "A gathering of minds exploring the future of sustainable architecture. Keynote speakers from Zurich and Tokyo.",
    location: "Auditorium A",
    time: "01:00 PM",
    accent: "bg-[#0057FF]",
    textAccent: "text-[#0057FF]",
  },
];
