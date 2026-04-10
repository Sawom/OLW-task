"use client";

import React from "react";
import Image from "next/image";

import User1 from "@/assets/question/img1.png";
import User2 from "@/assets/question/img2.png";
import User3 from "@/assets/question/img3.png";

const StillHaveQuestions = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto bg-[#F9FAFB] rounded-[16px] py-10 px-6 text-center flex flex-col items-center gap-6">
        <div className="flex items-center -space-x-4">
          <div className="relative w-12 h-12 rounded-full border-2 bg-[#ABB677] border-white overflow-hidden shadow-sm">
            <Image src={User1} alt="User 1" fill className="object-cover" />
          </div>
          <div className="relative w-14 h-14 rounded-full border-2 bg-[#C7B9DA] border-white overflow-hidden shadow-md z-10 scale-110">
            <Image src={User2} alt="User 2" fill className="object-cover" />
          </div>
          <div className="relative w-12 h-12 rounded-full border-2 bg-[#D9B9BB] border-white overflow-hidden shadow-sm">
            <Image src={User3} alt="User 3" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[20px] md:text-[24px] font-bold text-[#101828]">
            Still have Questions?
          </h3>
          <p className="text-gray-400 text-[16px] md:text-[18px] max-w-[600px] mx-auto">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>

        <button className="bg-[#E9436A] cursor-pointer hover:bg-[#d43158] text-white px-7 py-3 rounded-[8px] font-semibold text-[16px] transition-all duration-300 shadow-sm">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default StillHaveQuestions;
