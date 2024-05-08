"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../constants/constants";
import { Badge } from "../ui/badge";
import "swiper/css";

const Testimonial = () => {
  return (
    <div>
      <div className="main-container p-2 md:p-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start w-full px-4 py-3">
          <div className="flex flex-col items-center justify-center w-full max-w-full">
            <Badge className="bg-red-500/80 hover:bg-red-600 text-white mb-5 py-1.5 px-2.5">
              Our Community
            </Badge>
            <h2 className="text-4xl font-bold mb-6 max-w-2xl text-center leading-relaxed sm:text-5xl md:text-6xl">
              What our Clients say about us
            </h2>
          </div>
        </div>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 1, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          freeMode
          speed={3000}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="py-6">
              <div className="rounded-xl shadow-md bg-white px-4 py-6">
                <p className="text-lg font-medium leading-none text-gray-700">
                  {testimonial.text}
                </p>
                <div className="flex gap-3 mt-4 items-center justify-start">
                  <Image
                    width={60}
                    height={60}
                    className="rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="flex flex-col gap-0">
                    <p className="text-base font-medium leading-none text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-base font-light leading-none text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
