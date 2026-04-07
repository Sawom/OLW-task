"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoveRight, Menu, X } from "lucide-react";
import Image from 'next/image';
import Logo from '@/assets/logo-google.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "" },
    { name: "Services", href: "" },
    { name: "Pricing", href: "" },
    { name: "Blog", href: "" },
    { name: "Resources", href: "" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
                src={Logo} 
                alt="Logo" 
                className="h-7 md:h-8 w-auto cursor-pointer"
              />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 h-full">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-[16px] font-medium transition flex items-center h-full ${
                    isActive
                      ? "text-[#E9436A]"
                      : "text-gray-600 hover:text-[#E9436A]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E9436A] rounded-t-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <button className="flex items-center gap-2 bg-[#E9436A] text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] hover:opacity-90 transition active:scale-95">
              <span>Schedule A Meeting</span>
              <MoveRight size={18} />
            </button>
          </div>

          {/* Mobile & Tablet Toggle Button */}
          <button style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 relative z-[60]"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="px-6 py-10 flex flex-col gap-6 bg-white">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xl font-bold transition-colors ${
                pathname === item.href ? "text-[#E9436A]" : "text-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-50">
            <button className="flex items-center gap-3 bg-[#E9436A] text-white px-8 py-4 rounded-lg font-bold text-[16px] justify-center shadow-md">
              <span>Schedule A Meeting</span>
              <MoveRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;