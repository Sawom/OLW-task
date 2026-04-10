"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import Icon1 from "@/assets/getting-started/g1.png";
import Icon2 from "@/assets/getting-started/g2.png";
import Icon3 from "@/assets/getting-started/g3.png";

interface Step {
  id: string;
  title: string;
  icon: StaticImageData;
}

const GettingStarted = () => {
  const steps: Step[] = [
    {
      id: "01",
      title: "Add requirements & sign up today",
      icon: Icon1,
    },
    {
      id: "02",
      title: "Connect with your CSM & onboarding team",
      icon: Icon2,
    },
    {
      id: "03",
      title: "Meet your STR Assistant next week",
      icon: Icon3,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <h2 className="text-[32px] font-bold text-black mb-6">
            Getting Started is <span className="text-[#E9436A]">Easy</span>
          </h2>
          <p className=" text-[14px] md:text-[16px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-8 max-w-[1100px] mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center group">
              <div className="relative w-full aspect-[4/3] max-w-[320px] bg-white border border-[#FDEBF0] rounded-[20px] shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md">
                {/* Number Badge (Circle) */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-white border-[3px] border-[#ED3C6A] rounded-full flex items-center justify-center z-10">
                  <span className="text-[20px] font-bold text-black">
                    {step.id}
                  </span>
                </div>

                {/* Icon Image */}
                <div className="relative w-24 h-24">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title Text */}
              <h3 className="mt-8 text-[18px] md:text-[20px] font-bold text-gray-900 text-center max-w-[250px] leading-tight group-hover:text-[#E9436A] transition-colors">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
