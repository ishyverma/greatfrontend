"use client";

import { Safari } from "../magicui/safari";
import { useEffect, useState } from "react";

const SafariMacbook = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 1300)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotation = Math.max(25 - (scrollPosition / 10), 0); 
  const translateZ = Math.max(100 - (scrollPosition / 2), 0);
  const brightness = 0.7 + ((25 - rotation) / 25) * 0.3;

  return (  
    <div className={`w-screen transition-all duration-300 lg:flex hidden justify-center items-center my-5 perspective-[1500px] ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div 
        className="transition-transform duration-300 ease-out transform-gpu"
        style={{
          transform: `perspective(1500px) rotateX(${rotation}deg) translateZ(${translateZ}px)`,
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
          filter: `brightness(${brightness})`,
        }}
      >
        <Safari
          imageSrc="https://hbwblp0u91.ufs.sh/f/XfN6TF7SpeThB3m7fsI7zYj5aHrQVueiEsXbSBgFpvJOR3fh"
          url="greatfrontend.com"
        />
      </div>
    </div>
  );
}
 
export default SafariMacbook;