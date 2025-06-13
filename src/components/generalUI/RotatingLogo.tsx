"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const RotatingLogo = () => {
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to(container.current, {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: "none"
    })
  });
  const text = "Barraca Producciones - Barraca Producciones -";
  return (
    <div>
      <div className="circle relative w-[200px] h-[200px] rounded-full flex justify-center items-center">
        <img
          src="/Barraca_Logo.png"
          alt="Barraca Logo"
          className="w-[90px] h-[90px] logo absolute "
        />
        <div ref={container} className="text absolute w-full h-full">
          <p className="font-zilla">
            {text.split("").map((char, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  transform: `rotate(${i * 8}deg)`,
                  position: "absolute",
                  left: "50%",
                  transformOrigin: "0 100px",
                  fontSize: "1.2em",
                }}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RotatingLogo;
