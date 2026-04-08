"use client";

import React from 'react';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Img1 from '@/assets/hero-section/airbnb.png';
import Img2 from '@/assets/hero-section/b.png';
import Img3 from '@/assets/hero-section/glass.png';
import Img4 from '@/assets/hero-section/v.png';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#FEF5F8] overflow-hidden py-16 md:py-24 lg:py-32 min-h-[600px] flex items-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#4a5568 1px, transparent 1px), linear-gradient(90deg, #4a5568 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-[800px] mx-auto flex flex-col items-center">
          
          <h1 className="  text-black leading-[1.1] tracking-tight">
            <span className="text-[36px] md:text-[40px] lg:text-[48px] font-bold">Airbnb Assistants For</span>  <br className="hidden md:block" />
            <span className="font-semibold text-[36px] md:text-[30px] lg:text-[38px]">
              Property Management
              
            </span>
          </h1>

          <p className="text-gray-500 text-[15px] md:text-[17px] leading-relaxed max-w-[700px] mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div className="flex flex-col items-center gap-6 mt-10">
            <div className="pt-4 border-t border-gray-50">
                <button className="flex cursor-pointer items-center gap-3 bg-[#E9436A] text-white px-8 py-4 rounded-lg font-bold text-[16px] justify-center shadow-md">
                    <span>Schedule A Meeting</span>
                    <MoveRight size={20} />
                </button>
            </div>
            <Link href="#" className="text-black text-[16px] font-bold underline hover:text-[#E9436A] transition">
              See Pricing
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none select-none">
        {/* Top Left  */}
        <div className="absolute img-slot airbnb-slot bg-[#FF5A5F] p-1">
            <div className="relative w-full h-full">
                <Image src={Img1} fill alt="airbnb" className="object-contain" />
            </div>
        </div>

        {/* Top Right */}
        <div className="absolute img-slot booking-slot bg-[#0A3166] p-1 ">
            <div className="relative w-full h-full">
                <Image src={Img2} fill alt="booking" className="object-contain" />
            </div>
        </div>

        {/* Bottom Left  */}
        <div className="absolute img-slot vrbo-slot bg-[#0E214B] p-1">
            <div className="relative w-full h-full">
                <Image src={Img4} fill alt="vrbo" className="object-contain" />
            </div>
        </div>

        {/* Bottom Right */}
        <div className="absolute img-slot trip-slot bg-[#31D397] p-2">
            <div className="relative w-full h-full">
                <Image src={Img3} fill alt="vrbo" className="object-contain" />
            </div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute dot dot-purple"></div>
        <div className="absolute dot dot-green"></div>
        <div className="absolute dot dot-red"></div>
        <div className="absolute dot dot-yellow"></div>
        <div className="absolute dot dot-green1"></div>
        <div className="absolute dot dot-blue"></div>
      </div>
    </section>
  );
};

export default HeroSection;