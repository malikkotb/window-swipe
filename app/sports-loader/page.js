"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function page() {
  const containerRef = useRef(null);

  useEffect(() => {

    gsap.set("img", {
        y: -450,
    })

    gsap.to("img", {
      duration: 2,
      rotate: 20,
    });

    gsap.to("img", {
      duration: 2.5,
      ease: "elastic.out(1,0.3)",
      y: 0,
    });

    gsap.to("p", {
      y: 0,
      delay: 3,
      duration: 1.2,
    });

    gsap.to(".divider", {
      delay: 1.5,
      duration: 2,
      width: "100%",
    });
  });

  return (
    <div className="h-screen flex justify-center items-center bg-[#26987F]">
      <div className="mask overflow-hidden absolute top-[30%]">
        <p className="text-white -translate-y-full text-4xl font-bold">welcome.</p>
      </div>
      <div className="divider absolute top-[50%] bg-white h-[1px] w-0" />
      <img src="ball.svg" alt="ball" className="z-10"></img>
    </div>
  );
}
