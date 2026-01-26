"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";
// import SportsRegistrationPage from './page';

export default function SportsRegistrationPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      {/* Card */}
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-sm border border-neutral-200 p-8">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 mb-6">
          <AlertTriangle className="w-6 h-6 text-neutral-700" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2">
          Sports Registration Closed
        </h1>

        {/* Description */}
        <p className="text-neutral-600 leading-relaxed mb-8">
          Sports registrations are currently closed. For further registration or
          inquiries, please contact the IT Department or the Sports Coordinator.
        </p>

        {/* Divider */}
        <div className="h-px bg-neutral-200 mb-6" />

        {/* Action */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-100 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back to home
        </Link>
      </div>
    </div>
  );
}
