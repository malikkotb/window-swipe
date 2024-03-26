"use client";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function page() {
  const containerRef = useRef(null);

  // FOUC: flashing of unstyled content
  // is an issue that occurs whether I'm using from() or to()

  // use a tween instead of duplicating code for mouseenter and mouseleave states
  // storing the gasp.to() method in a variable (tween) unlocks certain methods
  // that will exist on the variable tween

  let tween = null;
  let tween2 = null;
  useEffect(() => {
    tween = gsap.to(".container", {
      borderRadius: "2%",
      width: "28vw",
      height: "36vw",
      paused: true,
    });

    tween2 = gsap.to("p", {
      fontSize: "clamp(5rem, 5vw, 10rem)",
      x: 0,
      paused: true,
    });
  });

  return (
    <div className="m-0 h-screen bg-red-50 text-red-50 grid place-content-center">
      <div
        onMouseEnter={() => tween.play()}
        onMouseLeave={() => tween.reverse()}
        className="container w-[24vw] h-[24vw] grid place-content-center cursor-pointer rounded-[50%] bg-[#ff9641]"
      >
        <p
          onMouseEnter={() => tween2.play()}
          onMouseLeave={() => tween2.reverse()}
          style={{
            fontSize: "10rem",
            fontSize: "min(max(5vw, 10rem), 17rem)",
          }}
          className=" playfair translate-x-[30%]"
        >
          luxury
        </p>
      </div>
    </div>
  );
}
