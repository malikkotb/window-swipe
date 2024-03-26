"use client";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function page() {
  // FOUC: flashing of unstyled content
  // is an issue that occurs whether I'm using from() or to()

  // use a tween instead of duplicating code for mouseenter and mouseleave states
  // storing the gasp.to() method in a variable (tween) unlocks certain methods
  // that will exist on the variable tween
  let tween = gsap.to(".container", {
    borderRadius: "2%",
    width: "28vw",
    height: "36vw",
    paused: true,
  });

  return (
    <div className="m-0 h-screen bg-red-50 text-red-50 grid place-content-center">
      <div className="container w-[24vw] h-[24vw] grid place-content-center cursor-pointer rounded-[50%] bg-[#ff9641]">
        <p
          style={{
            fontSize: "10rem" /* Fallback font size */,
            fontSize: "min(max(5vw, 10rem), 17rem)" /* Clamp between 5vw and 17rem */,
          }}
          className=" playfair translate-x-[30%]"
        >
          luxury
        </p>
      </div>
    </div>
  );
}
