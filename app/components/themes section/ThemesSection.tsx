import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import {
  theme1,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
  theme7,
  theme8,
} from "../../constants/imagesImport";

const ThemesSection = () => {
  return (
    <div className="w-full pt-12 pb-8 mt-5 md:mt-6 bg-[#CDE4E1] ">
      <div className="main-container p-2 md:p-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-3">
          <div className="float-left w-full max-w-xl">
            <h2 className="text-4xl font-medium leading-none mb-4 md:leading-tight sm:text-4xl md:text-5xl">
              QPe Themes Created for E-commerce success
            </h2>
          </div>
          <div className="w-full max-w-lg float-end flex flex-col gap-4 items-start justify-start">
            <p className="font-medium text-base leading-normal">
              Transform your online store with our meticulously crafted QPe
              themes. Designed for e-commerce success, our eCommerce website
              templates ensure a seamless customer experience.
              <span>
                <Link href="#">eCommerce templates</Link>
              </span>{" "}
              tailored specially for high-converting mobile and web stores.
            </p>
          </div>
        </div>
      </div>
      <div
        className="pl-6 md:pl-16  w-full overflow-hidden overflow-x-auto flex  h-full pr-6"
        // style={{ scrollbarWidth: "none" }}
      >
        <div className="relative flex justify-start items-start w-full pb-10 gap-8 pr-6">
          <div className="relative max-h-[200px] md:max-h-[325px] h-full w-full flex-shrink-0 max-w-[325px] md:max-w-[500px]">
            <Image
              src="/images/13.png"
              alt="theme 1"
              width={500}
              height={325}
              className="w-full hover:scale-105 object-cover object-center transition-all duration-500 h-full flex flex-shrink-0 rounded-xl"
            />
          </div>
          <div className="relative max-h-[200px] md:max-h-[325px] h-full w-full flex-shrink-0 max-w-[100px] md:max-w-[170px]">
            <Image
              src="/images/theme2.jpg"
              alt="theme 1"
              width={170}
              height={325}
              className="w-full hover:scale-105 transition-all duration-500 h-full flex flex-shrink-0 rounded-xl"
            />
          </div>
          <div className="relative max-h-[200px] md:max-h-[325px] h-full w-full flex-shrink-0 max-w-[325px] md:max-w-[500px]">
            <Image
              src="/images/14.png"
              alt="theme 1"
              width={500}
              height={325}
              className="w-full hover:scale-105 transition-all duration-500 h-full flex flex-shrink-0 rounded-xl"
            />
          </div>
          <div className="relative max-h-[200px] md:max-h-[325px] h-full w-full flex-shrink-0 max-w-[325px] md:max-w-[500px]">
            <Image
              src="/images/15.png"
              alt="theme 1"
              width={500}
              height={325}
              className="w-full hover:scale-105 transition-all duration-500 h-full flex flex-shrink-0 rounded-xl"
            />
          </div>
          <div className="relative max-h-[200px] md:max-h-[325px] h-full w-full flex-shrink-0 max-w-[100px] md:max-w-[170px]">
            <Image
              src="/images/theme2.jpg"
              alt="theme 1"
              width={170}
              height={325}
              className="w-full hover:scale-105 transition-all duration-500 h-full flex flex-shrink-0 rounded-xl"
            />
          </div>
          <div className="relative max-h-[200px] md:max-h-[325px] h-full w-full flex-shrink-0 max-w-[100px] md:max-w-[170px]">
            <Image
              src="/images/theme2.jpg"
              alt="theme 1"
              width={170}
              height={325}
              className="w-full hover:scale-105 transition-all duration-500 h-full flex flex-shrink-0 rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className=" pl-6 md:pl-16 mt-6">
        <Button text="Explore all Themes" className="bg-gray-900 text-white" />
      </div>
    </div>
  );
};

export default ThemesSection;
