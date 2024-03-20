import { gsap } from "gsap";

export default function Home() {
  
  // most basic way to animate elements with gsap is using methods: to, from, fromTo

  // from() and to() do the same thing but opposite

  // we want to aniamte the progress bar (which starts at width: 0%,) TO a 100 percent -> to() method

  // to() takes in 2 parameters: the class (aka selector), and an object where we can animate CSS (and specific gsap) properties

  gsap.to(".progress", {
    width: "100px",
  })

  return (
    <main>
      <h1 className=" text-[30rem] opacity-[10%] text-center mt-[18%]">BORING</h1>
      <div className="progress bg-[#A1BCFF] h-[3px] w-0 absolute top-[50%]"></div>
    </main>
  );
}
