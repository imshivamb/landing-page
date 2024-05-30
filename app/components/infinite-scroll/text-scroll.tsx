import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const TextScroll = () => {
  const text = "Start Your Free Trial";

  return (
    <div className="pt-0 box-border pb-0">
      <a
        href=""
        className="relative overflow-hidden flex items-center whitespace-nowrap py-5 md:py-8 px-0 bg-[#10002A]"
      >
        <div className=" flex flex-none animate-marquee whitespace-nowrap">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center mx-5 ">
              <p className="text-xl md:text-4xl font-semibold uppercase ">
                <span className="text-white">Start Your </span>
                <span className="gradient-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Free Trial
                </span>
              </p>
              <ArrowRight className="ml-2 text-white" size={40} />
            </div>
          ))}
        </div>
        <div className=" flex flex-none animate-marquee whitespace-nowrap">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center mx-5 ">
              <p className="text-xl md:text-4xl font-semibold uppercase ">
                <span className="text-white">Start Your </span>
                <span className="gradient-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Free Trial
                </span>
              </p>
              <ArrowRight className="ml-2 text-white" size={40} />
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};

export default TextScroll;
