"use client";

import React from "react";
import { MoveRight, Check } from "lucide-react";
import Banner from "@/assets/whyBanner.png";
import Image from "next/image";

interface Reasoning {
  id: number;
  text: string;
}

const WhyChooseUs: React.FC = () => {
  const reasonings: Reasoning[] = [
    { id: 1, text: "Brilliant Client Service" },
    { id: 2, text: "Flexibility & Adaptibility" },
    { id: 3, text: "We make it Personal" },
    { id: 4, text: "We have expart in our team" },
  ];

  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto bg-[#FFF0F4] rounded-[33px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] font-bold text-[#0F172A] leading-tight">
                Few Reasons Why you Choose us?
              </h2>
              <p className=" text-[14px] leading-relaxed max-w-[550px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {reasonings.map((reason) => (
                <div key={reason.id} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FAC4D2] flex items-center justify-center flex-shrink-0">
                    <Check size={20} className="text-[#E9436A]" />
                  </div>
                  <span className="text-[16px] md:text-[18px] font-semibold text-[#1E293B]">
                    {reason.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pb-4 pt-4 border-t border-gray-50">
              <button className="flex cursor-pointer items-center gap-3 bg-[#E9436A] text-white px-8 py-4 rounded-lg font-bold text-[16px] justify-center shadow-md">
                <span>Schedule A Meeting</span>
                <MoveRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative w-full h-full flex justify-center md:justify-end">
            <div className="relative w-full max-w-[600px] h-full min-h-[500px] rounded-[30px] p-4 ">
              <Image
                src={Banner}
                alt="Why Choose Us Graphic"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
