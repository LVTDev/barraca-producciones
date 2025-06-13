import React from "react";
import RotatingLogo from "./RotatingLogo";

const Hero = () => {
  return (
    <div className="w-screen bg-[url('/heroBackground.png')] h-[80vh] bg-cover relative">
      <div className="absolute bottom-3 right-[100px]">
        <RotatingLogo />
      </div>
    </div>
  );
};

export default Hero;
