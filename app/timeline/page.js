"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function page() {
  const containerRef = useRef(null);

  // Loader graphic animation - using a GSAP TimeLine

  useEffect(() => {});

  return (
    <div className="h-screen bg-white m-0">
      <div className="fade-container h-screen grid grid-rows-3 grid-cols-1 ">
        {/* add to indiviudal fade divs: // transform: scaleY(0); */}
        <div className="fade1 transform origin-top bg-[#C9D6EA]"></div>
        <div className="fade2 transform origin-top bg-[#5E9EFF]"></div>
        <div className="fade3 transform origin-top bg-[#2C80FF]"></div>
      </div>
      <div className="mask overflow-hidden absolute top-[50%] left-[50%] translate-x-1/2 -translate-y-1/2 z-1">
        <h1 className=" text-9xl bebas text-white m-0 font-black z-1">Oceana.</h1>
      </div>
    </div>
  );
}
