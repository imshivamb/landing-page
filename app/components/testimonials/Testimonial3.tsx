"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { testimonialsData } from "../../constants/constants";
import Image from "next/image";
import { Quote } from "lucide-react";

const Testimonial3 = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentSlideIndex(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrentSlideIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Cleanup event listener on unmount
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="w-full bg-[#F5FFFA] py-12">
      <div className="main-container px-6 pt-10 md:p-8 w-full">
        <div className="flex flex-col items-center justify-center w-full max-w-full">
          <Badge className="bg-red-500/20 text-red-600 mb-5 py-1.5 px-2.5">
            Our Community
          </Badge>
          <h2 className="text-4xl font-medium mb-6 max-w-[15ch] md:max-w-lg text-center leading-[1.2] md:leading-[1.1] sm:text-5xl md:text-6xl">
            What our Clients say about us
          </h2>
        </div>
      </div>
      <Carousel setApi={setApi} className="carousel-item mb-12">
        <CarouselContent className="ml-0">
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem
              data-index={index}
              key={testimonial.id}
              className={`md:basis-[75%] testimonial-slide p-4 md:max-h-[420px] overflow-hidden min-h-[400px] ${currentSlideIndex === index ? "opacity-100" : "opacity-50"}`}
            >
              <div className="p-6 bg-[#00BDA8] md:max-h-[400px] md:min-h-[400px] relative shadow-lg rounded-2xl overflow-hidden text-start max-w-full w-full mx-auto">
                <div className="flex flex-col-reverse relative text-white items-start justify-start md:flex-row w-full">
                  <div className="w-full md:w-2/3 relative  h-full md:max-h-[360px] min-h-[360px] flex flex-col gap-20 md:pr-8">
                    <div className="absolute top-[20px] left-0">
                      <Quote
                        fill="white"
                        stroke="white"
                        className="opacity-40 rotate-180 z-0"
                        size={50}
                      />
                    </div>
                    <div className="flex flex-col pt-8 gap-3 w-full">
                      <p className="text-white text-base md:text-xl font-medium tracking-wide mb-4">
                        {testimonial.description}
                      </p>
                    </div>
                    <div className="pt-6 absolute bottom-2  border-t border-gray-100 flex gap-4 justify-start items-start w-full">
                      <div className="">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full mx-auto mb-4"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-xl font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm mb-4">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full md:w-1/3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={250}
                      height={400}
                      className="w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
        <CarouselPrevious className="border border-gray-800 bg-teal-500 text-white h-12 w-20 hover:text-white hover:bg-teal-600" />
        <CarouselNext className="border border-gray-800 bg-teal-500 text-white h-12 w-20 hover:text-white hover:bg-teal-600" />
      </Carousel>
    </div>
  );
};

export default Testimonial3;
