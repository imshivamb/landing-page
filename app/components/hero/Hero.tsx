"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../Button";
import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";
import { ContainerScroll } from "../ui/container-scroll-animation";
import {
  heroBg,
  heroImg1,
  heroImg2,
  hero1,
  hero2,
  heroImg3,
  hero3,
} from "../../constants/imagesImport";

const Hero = () => {
  return (
    <div className="relative w-full hero-div bg-[#0d0028] antialiased bg-grid-white/[0.02] overflow-hidden ">
      {/* <div className="hero-banner absolute inset-0 w-full z-0">
        <Image
          src="/images/hero-banner.png"
          alt="banner"
          fill
          className="h-banner"
        />
      </div> */}
      <Image
        src={heroBg}
        className=" max-h-[800px] absolute w-full h-full left-0 top-0 px-[300px] pt-[200px]"
        alt="background"
      />
      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-10"
        fill="white"
      />
      <div id="hero-section" className="w-full pt-[120px] z-10 h-auto">
        <div className="flex flex-col items-center justify-center py-6 md:py-10 md:px-10 px-5 relative flex-1 w-100">
          {/* <ContainerScroll
            titleComponent={
              <div className="main-container mb-8">
                <div className="flex flex-col gap-6 text-center justify-center text-white items-center">
                  <h5 className="uppercase text-lg animate-pop-in h-subtitle md:text-xl font-light tracking-tight ">
                    CREATE MORE THAN AN ECOMMERCE WEBSITE
                  </h5>
                  <h1 className="text-[40px] leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 h-title animate-pop-in sm:text-5xl md:text-6xl lg:text-7xl font-semibold md:font-medium max-w-full md:max-w-3xl md:leading-relaxed pb-2">
                    Making E-Commerce Affordable & Accessible for Everyone
                  </h1>
                  <p className="font-light animate-pop-in h-desc capitalize text-base leading-[1.6] md:text-lg max-w-2xl">
                    Effortlessly launch a captivating online store and increase
                    customer conversions. All-in-one platform designed to help
                    your business thrive and grow.
                  </p>
                  <div className="flex animate-pop-in h-buttons flex-row items-center justify-center w-full gap-5">
                    <Link href="">
                      <Button
                        text="Start free trial"
                        className="leading-tight text-white bg-violet-500"
                      />
                    </Link>
                    <Link href="">
                      <Button
                        text="Schedule a Demo"
                        className="bg-white text-gray-800 leading-tight"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            }
          >
            <div className=" md:aspect-auto mx-auto flex justify-center w-full relative">
              <video
                src="/videos/file.mp4"
                muted
                autoPlay
                loop
                poster="/images/thumbnail.jpg"
                className="rounded-xl w-full max-w-full"
              ></video>
            </div>
          </ContainerScroll> */}
          <div className="main-container mb-8 block">
            <div className="flex flex-col gap-6 text-center justify-center text-white items-center">
              <h5 className="uppercase text-lg animate-pop-in h-subtitle md:text-xl font-medium tracking-tight ">
                CREATE MORE THAN AN ECOMMERCE WEBSITE
              </h5>
              <h1 className="text-[40px] leading-[1.1] bg-clip-text text-transparent text-white bg-opacity-50 h-title animate-pop-in sm:text-5xl md:text-6xl lg:text-7xl font-semibold md:font-medium max-w-full md:max-w-4xl md:leading-[1.7] pb-2">
                Making E-Commerce Affordable & Accessible for Everyone
              </h1>
              <p className="font-medium text-balance animate-pop-in h-desc capitalize text-base leading-[1.6] md:text-lg max-w-2xl">
                Effortlessly launch a captivating online store and increase
                customer conversions. All-in-one platform designed to help your
                business thrive and grow.
              </p>
              <div className="flex animate-pop-in h-buttons flex-row items-center justify-center w-full gap-5">
                <Link href="">
                  <Button
                    text="Start free trial"
                    className="leading-tight text-white bg-gray-800"
                  />
                </Link>
                <Link href="">
                  <Button
                    text="Schedule a Demo"
                    className="bg-white text-gray-800 leading-tight"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative hero-image-section z-10  w-full max-w-7xl mx-auto">
            <div className="primary-image flex items-center justify-center relative">
              <Image
                src={hero1}
                alt="Hero image 1"
                className="w-full h-full max-w-[700px] max-h-[550px] rounded-lg shadow-2xl"
              />
            </div>
            <div className="second-image absolute left-[50px] top-[130px] hidden md:block w-auto">
              <Image
                src={hero3}
                alt="hero-image-2"
                className="w-full h-full max-w-[350px] shadow-lg rounded-lg hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="third-image absolute right-[50px] top-[50px] hidden md:block w-auto">
              <Image
                src={hero2}
                alt="hero-image-3"
                className="w-full h-full max-w-[300px] shadow-2xl rounded-lg hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* <div className=" md:aspect-auto mx-auto flex justify-center w-full relative">
            <video
              src="/videos/file.mp4"
              muted
              autoPlay
              loop
              poster="/images/thumbnail.jpg"
              className="rounded-xl w-full max-w-full"
            ></video>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
