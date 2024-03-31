"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function page() {
  const containerRef = useRef(null);

  // Loader graphic animation - using a GSAP TimeLine
  // timeline is similar to to() and from() but it allows u to organize your various animations in a timeline-based sequence

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 0.5 } });

    timeline
      .to([".fade1", ".fade2", ".fade3"], {
        scaleY: 1,
        stagger: 0.2,
      })
      .to(
        "h1",
        {
          // this to() animation will wait for the previous animation to finish (however long it takes) and then execute
          x: 0,
          duration: 2,
          ease: "elastic.out(1, 0.5)",
          // if we want it to start earlier or later, we can put an offset -= or a += as a 3rd argument of the to() method
        },
        "-=0.5"
      )
      .to(".fade1", {
        scaleY: 0,
      })
      .to(
        ".fade3",
        {
          scaleY: 0,
          transformOrigin: "bottom",
        },
        "-=0.5"
      )
      .to(
        ".fade2",
        {
          height: "100vh",
          transformOrigin: "top",
          //   y: -450,
          y: "-33.3vh",
        },
        "-=0.4"
      )
      .to(
        "h1",
        {
          scale: 0.6,
        },
        "-=0.5"
      );
  });

  return (
    <div className="h-screen bg-white m-0">
      <div className="fade-container h-screen grid grid-rows-3 grid-cols-1 ">
        {/* scale-y-0 to begin with to avoid fouc */}
        <div className="fade1 origin-top bg-[#C9D6EA] scale-y-0"></div>
        <div className="fade2 origin-top bg-[#5E9EFF]  scale-y-0"></div>
        <div className="fade3 origin-top bg-[#2C80FF]  scale-y-0"></div>
      </div>
      {/* -translate-x-1/2 and ...y centers the absolute div vertically and horizontally in the screen  */}
      <div className="mask overflow-hidden absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-1">
        <h1 className=" text-9xl bebas text-white m-0 font-black z-1 -translate-x-full">Oceana.</h1>
        {/*  shift out of view the h1 to begin with, by setting: -translate-x-full */}
      </div>
    </div>
  );
}
