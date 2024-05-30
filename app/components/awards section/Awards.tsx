import React from "react";
import {
  award1,
  award2,
  award3,
  award4,
  award5,
} from "../../constants/imagesImport";
import Image from "next/image";

const Awards = () => {
  return (
    <div className=" pt-6 max-w-7xl mx-auto p-2 mt-8 md:p-8 w-full">
      <div className="flex flex-wrap items-center justify-evenly gap-5 md:gap-0 md:justify-evenly w-full *:w-[50%] *:max-w-[120px] *:md:w-[20%] *:md:max-w-[150px]">
        {/* <Image src={award1} alt="Awards" />
        <Image src={award2} alt="Awards" />
        <Image src={award3} alt="Awards" />
        <Image src={award4} alt="Awards" />
        <Image src={award5} alt="Awards" /> */}
        <a
          href=""
          className="flex flex-col text-center mx-3 md:mx-5 w-full items-center justify-center"
        >
          <div className="lg:text-[45px] tracking-tighter font-extrabold md:text-4xl text-3xl pb-1.5">
            Top 30
          </div>
          <div className="my-2 w-full">
            <span className="flex justify-center relative">
              <span className=" inline-block text-[15px] py-1 font-bold leading-relaxed ">
                Startups (May 2022)
              </span>
            </span>
          </div>
          <div className="w-full flex justify-center">
            <Image src={award4} alt="g2" className="max-w-[100px]" />
          </div>
        </a>
        <a
          href=""
          className="flex flex-col text-center mx-3 md:mx-5 w-full items-center justify-center"
        >
          <div className="lg:text-[45px] tracking-tighter font-extrabold md:text-4xl text-3xl pb-1.5">
            Best
          </div>
          <div className="my-2 w-full">
            <span className="flex justify-center relative">
              <span className=" inline-block text-[15px] font-bold leading-relaxed ">
                Tech Startup (2023)
              </span>
            </span>
          </div>
          <div className="w-full flex justify-center">
            <Image src={award5} alt="g2" className="max-w-[110px]" />
          </div>
        </a>
        <a
          href=""
          className="flex flex-col text-center mx-3 md:mx-5 w-full items-center justify-center"
        >
          <div className="lg:text-6xl font-extrabold md:text-4xl text-3xl pb-1.5">
            5.0
          </div>
          <div className="my-1.5 w-full">
            <span className="flex justify-center relative">
              <span className="achievement-rating-ct inline-block text-lg leading-normal"></span>
            </span>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src={award1}
              alt="captera"
              className="max-w-[110px] h-[34px]"
            />
          </div>
        </a>

        <a
          href=""
          className="flex flex-col text-center mx-3 md:mx-5 w-full items-center justify-center"
        >
          <div className="lg:text-6xl font-extrabold md:text-4xl text-3xl pb-1.5">
            5.0
          </div>
          <div className="my-1.5 w-full">
            <span className="flex justify-center relative">
              <span className="achievement-rating-g2 inline-block text-lg leading-normal"></span>
            </span>
          </div>
          <div className="w-full flex justify-center">
            <Image src={award2} alt="g2" className="max-w-[110px]" />
          </div>
        </a>

        <a
          href=""
          className="flex flex-col text-center mx-3 md:mx-5 w-full mb-3 items-center justify-center"
        >
          <div className="lg:text-6xl font-extrabold md:text-4xl text-3xl pb-2">
            5.0
          </div>
          <div className="my-2.5 w-full">
            <span className="flex justify-center relative">
              <span className="achievement-rating-g2 inline-block text-lg leading-normal"></span>
            </span>
          </div>
          <div className="w-full flex justify-center">
            <Image src={award3} alt="g2" className="max-w-[140px]" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Awards;
