import React from "react";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { testimonials } from "../../constants/constants";
import Image from "next/image";

const Testimonial2 = () => {
  return (
    <div className="w-full bg-[#F5FFFA]">
      <div className="main-container px-4 pt-10 md:p-8 w-full">
        <div className="flex flex-col items-start justify-start w-full max-w-full">
          <Badge className="bg-red-500/80 hover:bg-red-600 text-white mb-5 py-1.5 px-2.5">
            Our Community
          </Badge>
          <h2 className="text-4xl font-medium mb-6 max-w-[15ch] md:max-w-lg text-start leading-[1.2] md:leading-[1.1] sm:text-5xl md:text-6xl">
            What our Clients say about us
          </h2>
        </div>
      </div>
      <div className="pl-3 md:pl-28  overflow-hidden overflow-x-auto w-full">
        <Carousel>
          <CarouselContent className="*:basis-2.3/3 flex justify-start *:md:basis-1/3 md:gap-x-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem className=" py-6" key={index}>
                <div className="rounded-xl border border-gray-400 overflow-clip relative shadow-md z-[1] bg-white px-4 py-6 h-[325px] md:h-[430px] w-[350px] md:w-[450px]">
                  <Image
                    src="/images/gradient.png"
                    alt=""
                    width={200}
                    height={100}
                    className="absolute z-[2] w-full h-full bottom-0 right-0"
                  ></Image>

                  <p className=" font-semibold leading-[1.3] text-gray-800 px-4 md:px-10 py-6 md:py-12 italic text-base md:text-[20px]">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex gap-3 md:mt-4 items-center justify-start">
                    <Image
                      width={180}
                      height={200}
                      className="absolute bottom-0 right-0 z-[3]"
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <div className="flex flex-col gap-0 px-4 md:px-10 py-6 md:py-12">
                      <p className="text-[24px] font-semibold leading-[1.3] text-gray-800">
                        {testimonial.name}
                      </p>
                      <div className="max-w-[100px] md:max-w-[150px]">
                        <Image
                          width={150}
                          height={50}
                          className="mt-4"
                          src={testimonial.companyLogo}
                          alt={testimonial.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
            ...
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial2;
