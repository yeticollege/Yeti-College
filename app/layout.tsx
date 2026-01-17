import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore - side-effect global CSS import provided by Next.js
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import YetiChatbot from "@/components/chatbot";
import DynamicPopup from "@/components/dynamic-popup";
// NOTE: I commented out the Header import/usage as it was commented in your original code.
// import Header from "@/components/althero";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// --- DOMAIN UTILITY (Simulated/Placeholder) ---
// IMPORTANT: In a real Next.js application, you would access the domain from
// the request headers (e.g., in a server c omponent or generateMetadata function).
// This function simulates that. You must replace this with actual server-side logic.
const getCurrentDomain = () => {
  if (typeof window !== "undefined") {
    // Client-side access (only runs if accessed after initial load)
    const hostname = window.location.hostname;
    return hostname === "kennt.edu.np" || hostname === "www.kennt.edu.np"
      ? "kennt.edu.np"
      : "yeti.edu.np";
  }

  // Placeholder for Server-side environment
  // In a real scenario, you'd check headers like:
  // const host = headers().get('host');
  // return host.includes('kennt.edu.np') ? 'kennt.edu.np' : 'yeti.edu.np';
  return "yeti.edu.np"; // Default to 'yeti.edu.np' on the server unless actual lo gic is added
};

// export const metadata: Metadata = {
//   title: {
//     default: "Yeti International College",
//     template: "%s | Yeti International College",
//   },
//   description: "Nepal’s first Airlines Business Management College",
//   keywords: [
//     "Yeti International College",
//     "Aviation Management Nepal",
//     "BBA College in Nepal",
//   ],
//   robots: "index, follow",
//   openGraph: {
//     title: "Yeti International College",
//     description: "Nepal’s first Airlines Business Management College",
//     url: "https://yeticollege.edu.np",
//     siteName: "Yeti International College",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Yeti International College",
//     description: "Nepal’s first Airlines Business Management College",
//     images: ["/og-image.jpg"],
//   },
//   alternates: {
//     canonical: "https://yeticollege.edu.np",
//   },
// };

// 1. Convert the static 'metadata' export into a dynamic 'generateMetadata' function
export async function generateMetadata(): Promise<Metadata> {
  // Use the domain check
  const domain = getCurrentDomain();
  const isKennt = domain === "kennt.edu.np";

  // 2. Define conditional values
  const title = isKennt
    ? "Kennt College"
    : "Yeti International College - Transform Your Future";

  const description = isKennt
    ? "Discover world-class education and opportunities at Kennt College. Explore our programs, vibrant campus community, and student success stories."
    : "Discover world-class education and opportunities at Yeti International College. Explore our programs, vibrant campus community, and student success stories.";

  const faviconPath = isKennt ? "/favicon2.png" : "/iconlightdark32-32.png"; // Use one of the original icons as the default

  // 3. Return the Metadata object
  return {
    title: title,
    description: description,
    generator: "v0.app",
    icons: {
      icon: [
        {
          url: faviconPath,
          media: "(prefers-color-scheme: light)",
        },
        {
          url: isKennt ? faviconPath : "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: isKennt ? faviconPath : "/icon.svg",
          type: "image/svg+xml",
        },
      ],
      // For Kennt, we'll use the new favicon for all, otherwise stick to original
      apple: isKennt ? faviconPath : "/apple-icon.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <Analytics />
      <body className={`font-sans antialiased`}>
        <DynamicPopup />
        {children}
        {/* <script>  
          (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase = (...arguments) => { if (!window.chatbase.q) { window.chatbase.q = [] } window.chatbase.q.push(arguments) };window.chatbase=new Proxy(window.chatbase,{get(target, prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="zg7Tr6dB3ScE8ksLhIIeE";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load", onLoad)}})();
        </script> */}
        <YetiChatbot />
      </body>
    </html>
  );
}
