import React from "react";
import { Button } from "../Button";
import { ArrowRight } from "lucide-react";
import {
  scroll1,
  scroll2,
  scroll3,
  scroll4,
  scroll5,
  scroll6,
  int1,
  int2,
  int3,
  int4,
  int5,
  int6,
  int7,
  int8,
} from "../../constants/imagesImport";
import Image from "next/image";

const Integrations = () => {
  const images = [int1, int2, int3, int4, int5, int6, int7, int8];
  return (
    <div className="main-container pt-6 p-2 md:p-8 w-full">
      <div
        className={`flex flex-col md:flex-row justify-between items-start w-full px-4 py-3`}
      >
        <div className={`float-left w-full  max-w-2xl`}>
          <h2 className="text-4xl font-medium leading-[1.1]  mb-4 md:leading-tight sm:text-4xl md:text-5xl">
            Sell smarter, sell faster with apps integration
          </h2>
        </div>
        <div className="w-full max-w-lg float-end flex flex-col gap-4 items-start justify-start">
          <p className={`font-medium text-[17px] leading-normal pt-4`}>
            Integrate your favorite apps to streamline processes and supercharge
            your sales growth. Take your business to the next level with
            powerful app integrations.
          </p>
          <div className="py-2 group">
            <Button
              text="Explore all Integrations"
              icon={
                <ArrowRight
                  size={18}
                  className=" group-hover:translate-x-2 transition-all duration-300"
                />
              }
              className="text-white flex items-center gap-1.5 bg-gray-800"
            />
          </div>
        </div>
      </div>
      <div className="pt-8 md:pt-10 box-border pb-8 md:pb-16 md:px-2 px-5">
        <div className="logos relative overflow-hidden border border-gray-300 rounded-lg flex items-center whitespace-nowrap py-12 px-0 bg-white">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="logos-slide inline-flex flex-none justify-evenly w-full *:h-[80px] *:w-[80px] *:mx-10"
            >
              {images.map((src, idx) => (
                <Image key={idx} src={src} alt="brand logo" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;
