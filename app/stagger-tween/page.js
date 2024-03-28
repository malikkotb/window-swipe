"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function page() {
  // when using useGsap() hook:
  const sectionRef = useRef();
  //   useGSAP(
  //     () => {
  //       gsap.set("img", {
  //         yPercent: -100, // initially hide all images above (this is possible as they are inside a mask)
  //       });

  //       gsap.set("p", {
  //         opacity: 0,
  //       });

  //       // next, we want to slide the images into place, in a staggered mannor
  //       gsap.to("img", {
  //         yPercent: 0,
  //         scale: 1.3,
  //         stagger: 0.2,
  //         ease: "power4.out",
  //       });
  //     },
  //     { scope: sectionRef }
  //   ); // <-- scope is for selector text (optional)

  function scaleDownAndFadeIn() {
    gsap.to("img", {
      scale: 1,
      duration: 2,
    });
    // gsap.to("p", {
    //   opacity: 1,
    //   y: 50,
    //   stagger: 0.3,
    //   duration: 2,
    // });

    // there is also the fromTo() method in gsap
    // fromTo() takes in 2 objects after the class selector
    // "from" properties, and "to" properties of a single element
    // => from and to properties can be set of a single element

    gsap.fromTo(
      "p",
      {
        y: -50,
        x: -50,
      },
      {
        // like this it will travel 100 pixels ( from -50, to +50)
        y: 50,
        x: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 2,
      }
    );
  }

  //   gsap.to(['h1', 'span'], {}) // how multiple elements can be selected at once
  useEffect(() => {
    // set method (basically same as from() or to(), except it is with a duration of 0)
    gsap.set("img", {
      yPercent: -100, // initially hide all images above (this is possible as they are inside a mask)
    });

    gsap.set("p", {
      opacity: 0,
    });

    // next, we want to slide the images into place, in a staggered mannor
    gsap.to("img", {
      yPercent: 0,
      scale: 1.3,
      delay: 0.5,
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out",
      // at the end of this animation we want another animation to fire -> onComplete prop
      onComplete: scaleDownAndFadeIn,
    });
  });

  return (
    <div className="m-0 h-screen grid place-content-center">
      <section ref={sectionRef} className="flex justify-between gap-4">
        <div className="mask overflow-hidden relative">
          <img className=" w-full h-[80vh]" src="1.jpg" alt="img1" />
          <p className="stagger-tween-p">living</p>
        </div>
        <div className="mask overflow-hidden relative">
          <img className=" w-full h-[80vh]" src="2.jpg" alt="img2" />
          <p className="stagger-tween-p">in</p>
        </div>
        <div className="mask overflow-hidden relative">
          <img className=" w-full h-[80vh]" src="4.jpg" alt="img4" />
          <p className="stagger-tween-p text-white">utopia</p>
        </div>
      </section>
    </div>
  );
}
