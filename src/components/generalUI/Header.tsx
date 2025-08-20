import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Globe } from "react-feather";

const Header = () => {
  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 font-albert  z-50 text-white`}
    >
      <div
        className={`justify-between items-center bg-transparent  py-4 px-4 md:px-12 text-xs`}
      >
        <Link href="/" className="my-3">
          <Image
            src="/barracalogoComplete.png"
            alt="barraca Logo"
            width={150}
            height={150}
          />
        </Link>
        {/* <div className="flex justify-between align-center gap-2">
          <Globe />
          <p>ING</p>
          <p>/</p>
          <p>ESP</p>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
