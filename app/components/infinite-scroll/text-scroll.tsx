import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const TextScroll = () => {
  const text = "Start Your Free Trial";

  return (
    <div className="pt-8 md:pt-10 box-border pb-8 md:pb-16">
      <a
        href=""
        className="relative overflow-hidden flex items-center whitespace-nowrap py-5 md:py-12 px-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <div className=" flex flex-none animate-marquee whitespace-nowrap">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center mx-5 text-white">
              <span className="text-xl md:text-4xl font-semibold uppercase">
                {text}
              </span>
              <ArrowRight className="ml-2" size={40} />
            </div>
          ))}
        </div>
        <div className=" flex flex-none animate-marquee whitespace-nowrap">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center mx-5 text-white">
              <span className=" text-xl md:text-4xl font-semibold uppercase">
                {text}
              </span>
              <ArrowRight className="ml-2" size={40} />
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};

export default TextScroll;
