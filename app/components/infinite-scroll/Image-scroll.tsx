import Image from "next/image";
import React from "react";
import {
  scroll1,
  scroll2,
  scroll3,
  scroll4,
  scroll5,
  scroll6,
  scroll7,
  scroll8,
  scroll9,
  scroll10,
  scroll11,
  scroll12,
  scroll13,
  scroll14,
  scroll15,
  scroll16,
  scroll17,
  scroll18,
  scroll19,
  scroll20,
} from "../../constants/imagesImport";

const ImageScroll = () => {
  const images = [
    scroll1,
    scroll2,
    scroll3,
    scroll4,
    scroll5,
    scroll6,
    scroll7,
    scroll8,
    scroll9,
    scroll10,
    scroll11,
    scroll12,
    scroll13,
    scroll14,
    scroll15,
    scroll16,
    scroll17,
    scroll18,
    scroll19,
    scroll20,
  ];
  return (
    <div className="main-container pt-8 md:pt-10 box-border pb-8 md:pb-16 md:px-10 px-5">
      <div className="logos relative overflow-hidden flex items-center py-12 px-0 border border-gray-300 rounded-lg bg-white">
        <div className="logos-slide flex flex-none whitespace-nowrap animate-scroll">
          {images.map((src, idx) => (
            <div key={idx} className="mx-4">
              <Image src={src} alt="brand logo" className="h-[50px] w-auto" />
            </div>
          ))}
          {images.map((src, idx) => (
            <div key={`duplicate-${idx}`} className="mx-4">
              <Image src={src} alt="brand logo" className="h-[50px] w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageScroll;
