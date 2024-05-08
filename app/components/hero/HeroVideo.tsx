import Image from "next/image";
import React from "react";
import { Button } from "../Button";
import Link from "next/link";

const HeroVideo = () => {
  return (
    <div className="relative w-full h-full min-h-[600px] md:min-h-[700px]">
      <div className="hero-banner absolute inset-0 w-full h-full z-0">
        <video
          src="/videos/video1.mp4"
          loop
          autoPlay
          muted
          className="w-full min-h-[600px] md:min-h-[700px] object-cover"
        ></video>
      </div>
      <div
        id="hero-section"
        className="absolute w-full pt-[200px] z-10 h-auto inset-0 bg-gray-900/50"
      >
        <div className="flex flex-col items-start justify-start py-6 md:py-10 md:px-10 px-5 relative flex-1 w-full">
          <div className="">
            <div className="flex flex-col gap-6 text-start justify-center text-white items-start">
              <h1 className="text-4xl slide-top sm:text-5xl md:text-5xl lg:text-6xl font-bold max-w-full md:max-w-2xl leading-none md:leading-relaxed pb-2">
                Making{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  E-Commerce
                </span>{" "}
                better for everyone
              </h1>
              <p className="font-light capitalize text-base md:text-lg max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare
              </p>
              <div className="flex flex-row items-center justify-start w-full gap-5">
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
          {/* <div className="aspect-[2.4/1] w-full relative mt-8">
            <Image
              src="/images/dashboard-img.png"
              fill
              alt="image"
              loading="lazy"
              className="w-full max-w-full px-6 object-contain aspect-[2.4/1]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
