"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Logo1 from "@/assets/tools/price1.png";
import Logo2 from "@/assets/tools/house2.png";
import Logo3 from "@/assets/tools/beyond3.png";
import Logo4 from "@/assets/tools/host47.png";
import Logo5 from "@/assets/tools/guest58.png";
import Logo6 from "@/assets/tools/loadgify69.png";
import Logo7 from "@/assets/tools/host47.png";
import Logo8 from "@/assets/tools/guest58.png";
import Logo9 from "@/assets/tools/loadgify69.png";

const OurTools = () => {
  const partners: StaticImageData[] = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
  ];

  return (
    <section className="py-12 ">
      <div className="text-center max-w-[800px] mx-auto mb-16 bg-white">
        <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-4">
          Our <span className="text-[#E9436A]">Tools</span>
        </h2>
        <p className=" text-[14px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {partners.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] h-[140px] max-w-[290px] flex items-center justify-center p-6 shadow-sm border border-gray-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image src={logo} alt="logo" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurTools;
