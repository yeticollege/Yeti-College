"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration(): null {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const registerSW = async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          "/pwabuilder-sw.js",
          { scope: "/" },
        );

        console.log("Service Worker registered:", registration.scope);
      } catch (error) {
        console.error("Service Worker registration failed:", error);
      }
    };

    // Optional but recommended
    window.addEventListener("load", registerSW);

    return () => {
      window.removeEventListener("load", registerSW);
    };
  }, []);

  return null;
}
