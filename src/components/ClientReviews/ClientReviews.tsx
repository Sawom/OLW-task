"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Avatar1 from "@/assets/reviews/user1.png";
import Avatar2 from "@/assets/reviews/user2.png";
import Avatar3 from "@/assets/reviews/user3.png";

interface Review {
  id: number;
  name: string;
  comment: string;
  image: StaticImageData;
}

const ClientReviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Jenny Wilson",
      image: Avatar1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 2,
      name: "Esther Howard",
      image: Avatar2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Robert Fox",
      image: Avatar3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-12 bg-[#F9FAFB] overflow-hidden">
      <div >
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-[32px] font-bold text-black mb-6">
            Check Our Clients <span className="text-[#E9436A]">Review</span>
          </h2>
          <p className=" text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative w-full bg-[#EEEEEE]">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={40}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            
            watchSlidesProgress={true}
            className="review-swiper"
          >
            {duplicatedReviews.map((review, index) => (
              <SwiperSlide
                key={`${review.id}-${index}`}
                className="!w-auto py-3"
              >
                {({ isActive }) => (
                  <div
                    style={{ width: "530px", height: "200px" }}
                    className={`
                    flex flex-row items-center gap-6 p-8 rounded-[11px] transition-all duration-500 border
                    ${
                      isActive
                        ? "bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border-[#ffffff] opacity-100 scale-100"
                        : "bg-transparent border-transparent opacity-80 scale-90"
                    }
                  `}
                  >
                    <div className="relative w-[100px] h-[100px] flex-shrink-0">
                      <Image
                        src={review.image}
                        fill
                        alt={review.name}
                        className="object-cover rounded-full"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold text-[22px] text-gray-900 mb-1">
                        {review.name}
                      </h3>
                      <p className=" text-[14px] leading-snug line-clamp-3">
                        {review.comment}
                      </p>
                      <div className="flex gap-1 text-[#FBBF24] mt-2">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i} className="text-lg">
                              ★
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
