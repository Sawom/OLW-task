"use client";

import React from "react";
import Img1 from "@/assets/trusted/air1.png";
import Img2 from "@/assets/trusted/book2.png";
import Img3 from "@/assets/trusted/vrbo3.png";
import Img4 from "@/assets/trusted/trip4.png";
import Img5 from "@/assets/trusted/agoda5.png";
import Img6 from "@/assets/trusted/expedia6.png";
import Img7 from "@/assets/trusted/home7.png";
import Image, { StaticImageData } from "next/image";

const Trusted = () => {
  const brandLogos: StaticImageData[] = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
  ];

  return (
    <section className="py-12 ">
      <div className="">
        <h3 className="text-center text-[#0F172A] text-[16px] md:text-[18px] lg:text-[20px] font-bold mb-10 md:mb-12">
          Trusted by leaders in 50+ industries
        </h3>

        <div className="relative overflow-hidden w-full">
          <div className="flex bg-[#F6F6F6] py-4 w-max items-center animate-infinite-scroll gap-12 md:gap-20 lg:gap-24">
            {/* for infinite loop, I use 2 map */}
            {brandLogos.map((logo, index) => (
              <div
                key={`set1-${index}`}
                className="flex-shrink-0 w-[120px] h-[60px]  relative  transition-all duration-300 opacity-100 cursor-pointer"
              >
                <Image
                  src={logo}
                  fill
                  alt={`brand-logo-${index}`}
                  className="object-contain"
                />
              </div>
            ))}

            {brandLogos.map((logo, index) => (
              <div
                key={`set2-${index}`}
                className="flex-shrink-0 w-[120px] h-[60px]  relative transition-all duration-300 opacity-100 cursor-pointer"
              >
                <Image
                  src={logo}
                  fill
                  alt={`brand-logo-dup-${index}`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
