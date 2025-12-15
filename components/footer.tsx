import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 pt-20 pb-10 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Big Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 border-b border-zinc-800 pb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.9] mb-6">
              Yeti International
              <br />
              College.
            </h2>
            <p className="text-lg text-zinc-500 max-w-md leading-relaxed">
              Empowering minds and building leaders through world-class
              education and research.
            </p>
          </div>

          <div className="flex flex-col justify-end items-start lg:items-end">
            {/* A large, soft 'Apply' CTA often found in Swiss footers */}
            <Link
              href="/admissions"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black transition-all duration-300 bg-white rounded-full hover:bg-zinc-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 ring-offset-black"
            >
              Apply for Admission
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Middle Section: The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Column 1: Contact (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
              / Contact
            </span>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-full bg-zinc-900 text-white group-hover:bg-zinc-800 transition-colors">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium">Kathmandu Campus</p>
                  <p className="text-sm mt-1 leading-relaxed">
                    Buddhanagar, New Baneshwor
                    <br />
                    Kathmandu-10, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-full bg-zinc-900 text-white group-hover:bg-zinc-800 transition-colors">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium">Inquiries</p>
                  <p className="text-sm mt-1">01-4792063</p>
                  <p className="text-sm">9803323042</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-full bg-zinc-900 text-white group-hover:bg-zinc-800 transition-colors">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-sm mt-1 hover:text-white transition-colors cursor-pointer">
                    info@yeticollege.edu.np
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Academics (Span 3) */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-8">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
              / Academics
            </span>
            <ul className="space-y-4">
              {["Programs", "Apply", "Contact", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-zinc-400 hover:text-white text-base transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-transparent group-hover:bg-white rounded-full transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Campus Life (Span 3) */}
          <div className="lg:col-span-3 space-y-8">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
              / Campus Life
            </span>
            <ul className="space-y-4">
              {["Events", "Gallery", "Notices", "blog"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-zinc-400 hover:text-white text-base transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-transparent group-hover:bg-white rounded-full transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Socials & Copyright */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-zinc-600">
            <p>© 2025 Yeti International College.</p>
            <div className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full" />
            {/* <Link href="/privacy" className="hover:text-zinc-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-400">
              Terms of Use
            </Link> */}
            <Link href="/about/team/dev" className="hover:text-zinc-400">
              Devlopers
            </Link>
          </div>

          {/* Subtle Rounded Social Buttons */}
          <div className="flex gap-3">
            {[
              {
                icon: FaFacebookF,
                label: "Facebook",
                href: "https://www.facebook.com/@YETICollege",
              },
              {
                icon: FaYoutube,
                label: "YouTube",
                href: "https://www.youtube.com/@YETIInternationalCollege",
              },
              {
                icon: FaInstagram,
                label: "Instagram",
                href: "https://www.instagram.com/yetiintlcollege/",
              },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:bg-white hover:text-black transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
