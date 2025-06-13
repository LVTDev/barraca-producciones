"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React, { useRef } from "react";

const FloatingMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    const menu = menuRef.current;

    gsap.fromTo(menu,{
        y:0,
        opacity: 1
    }, {
      scrollTrigger: {
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (self.direction === 1) {
            // Scrolling down
            gsap.to(menu, {
              y: 100,
              opacity: 0,
              duration: 0.7,
              ease: "elastic.out",
            });
          } else {
            // Scrolling up
            gsap.to(menu, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "elastic.out",
            });
          }
        },
      },

      y: 0,
      opacity: 1,
      ease: "elastic.out",
    });
  });


  return (
    <div
      ref={menuRef}
      className="fixed font-zilla    bottom-2 left-1/2 -translate-x-1/2 bg-gray-800 shadow-md rounded-md p-2 z-50"
    >
      <ul className="flex gap-8 uppercase">
        <li>
          <Link href="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link href="/rentals">Renta</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};

export default FloatingMenu;
