"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function page() {

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 0.5 } });

    // timeline.to() 

  });

  return (
    <div className="h-screen m-0 bg-blue-200">

      <div className="flex">
        <aside>
            <h3>menu.</h3>

            <nav>
                <ul>
                    <li><div className="mask"><a href="#">Dashboard</a></div></li>
                    <li><div className="mask"><a href="#">Earnings</a></div></li>
                    <li><div className="mask"><a href="#">Customers</a></div></li>
                    <li><div className="mask"><a href="#">Affiliates</a></div></li>
                    <li><div className="mask"><a href="#">Courses</a></div></li>
                </ul>
            </nav>
        </aside>
        <main>
            <a href="#" className="menu-toggle">
                <svg></svg>
            </a>
        </main>
      </div>
    </div>

  );
}
