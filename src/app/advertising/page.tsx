import ContactForm from "@/components/generalUI/ContactForm";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="w-screen h-[80vh] bg-cover relative font-poppins">
        <div className="absolute top-1/2 left-0 z-10 flex px-10 justify-between items-center">
          <div>
            <h2 className="text-sm text-[#dc493a] mb-10 font-bold">Barraca Producciones</h2>
            <p className=" text-transparent text-[60px] font-extrabold">Reel</p>
          </div>
        </div>

        <div>
          {/* Desktop Video */}
          <video
            className="w-screen h-[80vh] absolute top-0 left-0 object-cover object-center hidden md:block"
            autoPlay
            muted // <- REQUIRED for autoplay to work initially
            loop
            playsInline
          >
            <source
              src={
                "https://cdn.sanity.io/files/y2fnmsk6/production/25879b4b8d9ae5c3e4d24f86deb17a5e94e8e4f3.mp4"
              }
              type="video/mp4"
            />
          </video>

          {/* Mobile Video */}
          <video
            className="w-screen h-[80vh] absolute top-0 left-0 object-contain md:hidden"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={
                "https://cdn.sanity.io/files/y2fnmsk6/production/25879b4b8d9ae5c3e4d24f86deb17a5e94e8e4f3.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Page;
