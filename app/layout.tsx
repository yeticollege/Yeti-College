import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import YetiChatbot from "@/components/chatbot";
import DynamicPopup from "@/components/dynamic-popup";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
// Fonts
const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

// -------------------------------------------------------------------
// SERVER-SIDE DOMAIN DETECTION (CORRECT WAY)
// -------------------------------------------------------------------
async function getCurrentDomain(): Promise<string> {
  const host = (await headers()).get("host") ?? "";
  if (host.includes("kennt.edu.np")) return "kennt.edu.np";
  return "yeti.edu.np";
}

// -------------------------------------------------------------------
// DYNAMIC METADATA
// -------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getCurrentDomain();
  const isKennt = domain === "kennt.edu.np";

  const title = isKennt
    ? {
        default: "Kennt College",
        template: "%s | Kennt College",
      }
    : {
        default: "Yeti International College",
        template: "%s | Yeti International College",
      };

  const description = isKennt
    ? "Discover world-class education and opportunities at Kennt College."
    : "Nepal’s first Airlines Business Management College.";

  return {
    title,
    description,

    // ✅ Manifest linked properly
    manifest: "/manifest.json",

    icons: {
      icon: isKennt
        ? "/favicon2.png"
        : [
            {
              url: "/iconlightdark32-32.png",
              media: "(prefers-color-scheme: light)",
            },
            {
              url: "/iconlightdark32-32.png",
              media: "(prefers-color-scheme: dark)",
            },
            { url: "/icon.svg", type: "image/svg+xml" },
          ],
      apple: isKennt ? "/favicon2.png" : "/apple-icon.png",
    },

    openGraph: {
      title: isKennt ? "Kennt College" : "Yeti International College",
      description,
      url: `https://${domain}`,
      siteName: isKennt ? "Kennt College" : "Yeti International College",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: isKennt ? "Kennt College" : "Yeti International College",
      description,
      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

// -------------------------------------------------------------------
// ROOT LAYOUT
// -------------------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className} antialiased`}>
        <Analytics />
        <ServiceWorkerRegistration />
        <DynamicPopup />
        {children}
        <YetiChatbot />
      </body>
    </html>
  );
}
