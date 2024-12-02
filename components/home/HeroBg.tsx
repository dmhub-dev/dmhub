/* eslint-disable @next/next/no-before-interactive-script-outside-document */
"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function HeroBg() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effectInstance: any;
    if (typeof window !== "undefined") {
      // Dynamically load VANTA.GLOBE
      effectInstance = window?.VANTA?.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3fc6ff,
        backgroundColor: 0xf1259,
      });
    }

    // Cleanup Vanta effect on component unmount
    return () => {
      if (effectInstance) effectInstance.destroy();
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
        strategy="beforeInteractive"
      />
      <div
        ref={vantaRef}
        style={{ width: "100%", height: "calc(100vh - 100px)" }}
        id="hero-bg-el"
      ></div>
    </>
  );
}
