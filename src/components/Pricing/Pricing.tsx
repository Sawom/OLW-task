"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import Imgsave from "@/assets/services/save.png";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  isPopular?: boolean;
  features: Feature[];
}

const Pricing = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const plans: PricingPlan[] = [
    {
      name: "Freebie",
      price: "0",
      description:
        "Ideal for individuals who need quick access to basic features.",
      features: [
        { text: "20,000+ of PNG & SVG graphics", included: true },
        { text: "Access to 100 million stock images", included: true },
        { text: "Upload custom icons and fonts", included: false },
        { text: "Unlimited Sharing", included: false },
        { text: "Upload graphics & video in up to 4k", included: false },
        { text: "Unlimited Projects", included: false },
        { text: "Instant Access to our design system", included: false },
        { text: "Create teams to collaborate on designs", included: false },
      ],
    },
    {
      name: "Professional",
      price: isYearly ? "50" : "25",
      description:
        "Ideal for individuals who need advanced features and tools for client work.",
      isPopular: true,
      features: [
        { text: "20,000+ of PNG & SVG graphics", included: true },
        { text: "Access to 100 million stock images", included: true },
        { text: "Upload custom icons and fonts", included: true },
        { text: "Unlimited Sharing", included: true },
        { text: "Upload graphics & video in up to 4k", included: true },
        { text: "Unlimited Projects", included: true },
        { text: "Instant Access to our design system", included: false },
        { text: "Create teams to collaborate on designs", included: false },
      ],
    },
    {
      name: "Enterprise",
      price: isYearly ? "200" : "100",
      description:
        "Ideal for businesses who need personalized services and security for large teams.",
      features: [
        { text: "20,000+ of PNG & SVG graphics", included: true },
        { text: "Access to 100 million stock images", included: true },
        { text: "Upload custom icons and fonts", included: true },
        { text: "Unlimited Sharing", included: true },
        { text: "Upload graphics & video in up to 4k", included: true },
        { text: "Unlimited Projects", included: true },
        { text: "Instant Access to our design system", included: true },
        { text: "Create teams to collaborate on designs", included: true },
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[44px] font-bold text-black leading-tight">
            Airbnb Assistent <span className="text-[#E9436A]">pricing</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Choose a plan that's right for you
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-16 relative">
          <span
            className={`text-[16px] font-medium ${!isYearly ? "text-black" : "text-gray-400"}`}
          >
            Pay Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 bg-gray-300 rounded-full relative transition-colors duration-300 focus:outline-none"
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${isYearly ? "translate-x-7" : "translate-x-0"}`}
            />
          </button>

          <span
            className={`text-[16px] font-medium ${isYearly ? "text-black" : "text-gray-400"}`}
          >
            Pay Yearly
          </span>

          <div className="absolute left-[calc(50%+98px)] top-0 hidden md:block">
            <Image
              src={Imgsave}
              alt="Save 25%"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[12px] border transition-all duration-500 cursor-pointer 
                bg-white text-gray-900  flex flex-col h-full
                hover:bg-[#ED3C6A] hover:text-white border-[#FCDAE3] `}
            >
              <h3 className="text-[24px] font-bold mb-4">{plan.name}</h3>
              <p
                className={`text-[14px] leading-relaxed mb-8 text-gray-500 group-hover:text-pink-100`}
              >
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-[48px] font-bold">${plan.price}</span>
                <span
                  className={`text-[16px] text-gray-400 group-hover:text-pink-100`}
                >
                  / Month
                </span>
              </div>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all mb-10
                bg-white border border-[#E9436A] text-[#E9436A] cursor-pointer
                group-hover:bg-white group-hover:text-[#E9436A]`}
              >
                Get Started Now
              </button>

              {/* Feature List */}
              <div className="space-y-4">
                {plan.features.map((feature: Feature, fIndex: number) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div
                      className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center
                      ${
                        feature.included
                          ? "bg-pink-100 text-[#E9436A] group-hover:bg-pink-400 group-hover:text-white"
                          : "text-gray-500 group-hover:text-pink-200"
                      }`}
                    >
                      {feature.included ? (
                        <Check size={14} strokeWidth={3} />
                      ) : (
                        <X
                          className="group-hover:bg-white group-hover:text-black group-hover:rounded-full "
                          strokeWidth={2}
                          size={14}
                        />
                      )}
                    </div>
                    <span
                      className={`text-[14px]  ${!feature.included ? "text-gray-400" : ""} group-hover:text-white `}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
