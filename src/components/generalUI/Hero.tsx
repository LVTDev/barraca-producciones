"use client";
import React from "react";
import RotatingLogo from "./RotatingLogo";
import { useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    "https://cdn.sanity.io/files/y2fnmsk6/production/83e58d7344726c6238bb80b55bf117a2aff240ff.mp4",
  ];



  return (
    <div className="w-screen h-[80vh] bg-cover relative font-poppins">
      <div className="absolute z-10 bottom-3 right-[100px]">
        <RotatingLogo />
      </div>
      <div className="absolute top-1/2 left-0 z-10 flex w-3/4 px-10 justify-between items-center">
        <div>
          <h1 className="">Barraca Production Company</h1>
          <h2 className="text-4xl mb-10 font-bold">
            We are filmakers and <br /> storytellers sharing <br /> passion, drama and <br />
            excitement.
          </h2>
        </div>
        <div className="flex gap-8">
          <Link
            className="border px-3 py-2 cursor-pointer h-max"
            href={"/advertising"}
          >
            Advertising
          </Link>
          <Link
            className="border px-3 py-2 cursor-pointer h-max"
            href={"https://cdn.sanity.io/files/y2fnmsk6/production/11f95e02f3b1835279800e44d49bbed34e8d1853.pdf"}
          >
            Rentals
          </Link>
        </div>
      </div>

      <>
        {/* Desktop Video */}
        <video
          ref={videoRef}
          className="w-screen h-screen absolute top-0 left-0 object-cover object-center hidden md:block"
          autoPlay
          muted // <- REQUIRED for autoplay to work initially
          loop
          playsInline
        >
          <source src={videos[0]} type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          className="w-screen h-screen absolute top-0 left-0 object-contain md:hidden"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videos[0]} type="video/mp4" />
        </video>
      </>
    </div>
  );
};

export default Hero;
