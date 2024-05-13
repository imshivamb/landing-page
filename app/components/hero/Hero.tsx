import Image from "next/image";
import React from "react";
import { Button } from "../Button";
import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";

const Hero = () => {
  return (
    <div className="relative w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      {/* <div className="hero-banner absolute inset-0 w-full z-0">
        <Image
          src="/images/hero-banner.png"
          alt="banner"
          fill
          className="h-banner"
        />
      </div> */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div id="hero-section" className="w-full pt-[120px] z-10 h-auto">
        <div className="flex flex-col items-center justify-center py-6 md:py-10 md:px-10 px-5 relative flex-1 w-100">
          <div className="main-container">
            <div className="flex flex-col gap-6 text-center justify-center text-white items-center">
              
              <h5 className="uppercase text-lg animate-pop-in h-subtitle md:text-xl font-light tracking-tight ">
                CREATE MORE THAN AN ECOMMERCE WEBSITE
              </h5>
              <h1 className="text-[40px] leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 h-title animate-pop-in sm:text-5xl md:text-6xl lg:text-7xl font-semibold md:font-medium max-w-full md:max-w-3xl md:leading-relaxed pb-2">
                Making E-Commerce better for everyone
              </h1>
              <p className="font-light animate-pop-in h-desc capitalize text-base leading-[1.6] md:text-lg max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare
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
          <div className=" aspect-[1.8/1] md:aspect-[2.4/1] w-full relative mt-8">
            <Image
              src="/images/dashboard-img.png"
              fill
              alt="image"
              loading="lazy"
              className="w-full max-w-full px-3 md:px-6 object-contain aspect-[2.4/1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
