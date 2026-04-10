"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Img1 from "@/assets/services/property.png";
import Img2 from "@/assets/services/bookings.png";
import Img3 from "@/assets/services/cleaning.png";
import Img4 from "@/assets/services/reviews.png";
import Img5 from "@/assets/services/track.png";
import Img6 from "@/assets/services/inquiry.png";

interface Service {
  title: string;
  icon: StaticImageData;
  message: string;
}

const OurService = () => {
  const services: Service[] = [
    {
      title: "Manage Property Listings",
      icon: Img1,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Manage Customer Bookings",
      icon: Img2,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Schedule House Cleaning",
      icon: Img3,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Monitor Guest Reviews",
      icon: Img4,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Track & Report Expenses",
      icon: Img5,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Guest Inquiry & Support",
      icon: Img6,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-4">
            Our <span className="text-[#E9436A]">Service</span>
          </h2>
          <p className=" text-[14px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-[13px] border border-[#FAC4D2] bg-white hover:shadow-xl hover:shadow-pink-50/50 transition-all duration-300 flex flex-col items-start"
            >
              <div
                className={` w-[78px] h-[78px] rounded-2xl mb-8 relative flex items-center justify-center `}
              >
                <Image
                  src={service.icon}
                  fill
                  alt={service.title}
                  className="object-contain "
                />
              </div>

              <h3 className="text-[24px] font-bold text-gray-900 mb-4 leading-tight">
                {service.title}
              </h3>
              <p className=" text-[14px] leading-relaxed mb-8">
                {service.message}
              </p>

              <button className="px-6 py-2.5 cursor-pointer rounded-full border border-[#E9436A] text-[#E9436A] font-bold text-[14px] hover:bg-[#E9436A] hover:text-white transition-all duration-300 active:scale-95">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
