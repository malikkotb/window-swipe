"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function page() {
  const containerRef = useRef(null);

  // Loader graphic animation - using a GSAP TimeLine

  useEffect(() => {});

  return (
    <div className="h-screen bg-white m-0">
      <div className="fade-container">
        <div className="fade1"></div>
        <div className="fade2"></div>
        <div className="fade3"></div>
      </div>
      <div className="mask">
        <h1 className="text 5xl">Oceana.</h1>
      </div>
    </div>
  );
}
