"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "@/assets/logo-google.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white pt-12 md:pt-16 lg:pt-24 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 pb-12 md:pb-16">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="w-fit">
              <Image
                src={Logo}
                alt="Logo"
                className="h-7 md:h-8 w-auto cursor-pointer"
              />
            </Link>
            <p className="text-gray-500 text-[14px] leading-relaxed max-w-[320px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="flex items-center gap-6 pt-2">
              <a
                href="#"
                className="text-gray-700 hover:text-[#E9436A] transition-all text-lg md:text-xl"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#E9436A] transition-all text-lg md:text-xl"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#E9436A] transition-all text-lg md:text-xl"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#E9436A] transition-all text-lg md:text-xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:justify-self-center">
            <h4 className="text-[15px] md:text-[16px] font-bold text-black uppercase tracking-wider mb-6 md:mb-8">
              Company
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  href="/about"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="lg:justify-self-center">
            <h4 className="text-[15px] md:text-[16px] font-bold text-black uppercase tracking-wider mb-6 md:mb-8">
              Help
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  href="/support"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:justify-self-end">
            <h4 className="text-[15px] md:text-[16px] font-bold text-black uppercase tracking-wider mb-6 md:mb-8">
              Resources
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  href="/ebooks"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorial"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/playlist"
                  className=" hover:text-[#E9436A] text-[14px] md:text-[15px] transition-colors"
                >
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#230B41] py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 text-[13px] md:text-[14px] font-medium tracking-wide">
            © Copyright {currentYear}, All Rights Reserved by XYZ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
