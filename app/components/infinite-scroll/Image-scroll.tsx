import Image from "next/image";
import React from "react";
import {
  scroll1,
  scroll2,
  scroll3,
  scroll4,
  scroll5,
  scroll6,
} from "../../constants/imagesImport";

const ImageScroll = () => {
  const images = [scroll1, scroll2, scroll3, scroll4, scroll5, scroll6];
  return (
    <div className="pt-8 md:pt-10 box-border pb-8 md:pb-16 md:px-10 px-5">
      <div className="logos relative overflow-hidden flex items-center whitespace-nowrap py-12 px-0 bg-white">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="logos-slide inline-flex flex-none justify-evenly w-full *:h-[50px] *:mx-10"
          >
            {images.map((src, idx) => (
              <Image key={idx} src={src} alt="brand logo" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroll;
