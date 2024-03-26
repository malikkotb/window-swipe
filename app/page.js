"use client";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Home() {
  // most basic way to animate elements with gsap is using methods: to, from, fromTo
  // from() and to() do the same thing, but opposite
  // to() takes in 2 parameters: the class (aka selector) or a ref (useRef hook), and an object where we can animate CSS (and specific gsap) properties

  // we want to aniamte the progress bar (which starts at width: 0%,) TO a 100 percent -> to() method

  const progressRef = useRef(null);
  const headingRef = useRef(null);
  useEffect(() => {
    // gsap.to(".progress", {
    gsap.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power4.inOut",
      // other easing functions (including visualizer): gogle: gsap Eases
    });

    gsap.to(headingRef.current, {
      yPercent: 25, // yPercent for percent value
      duration: 2,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.to(progressRef.current, {
      height: "100%",
      delay: 2,
      top: 0,
      backgroundColor: "white"
    })
  });

  return (
    <main>
      <div className="flex h-screen justify-center bg-red-500">
        <h1 ref={headingRef} className="bebas text-[25vw] opacity-[10%] text-center ">
          BORING
        </h1>
      </div>
      <div ref={progressRef} className="progress bg-[#A1BCFF] h-[3px] w-0 absolute top-[50%]"></div>
    </main>
  );
}
