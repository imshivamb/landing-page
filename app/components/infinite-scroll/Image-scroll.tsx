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
  return (
    <div className="main-container h-auto pt-8 md:pt-10 pb-8 md:pb-16 md:px-10 px-5">
      <div className="logos relative overflow-hidden flex items-center whitespace-nowrap py-12 px-0 bg-white">
        <div className="logo-slide-container w-[200%] flex">
          <div className="logos-slide inline-flex w-[50%] *:h-[50px] *:mx-10">
            <Image src={scroll1} alt="brand logo" />
            <Image src={scroll2} alt="brand logo" />
            <Image src={scroll3} alt="brand logo" />
            <Image src={scroll4} alt="brand logo" />
            <Image src={scroll5} alt="brand logo" />
            <Image src={scroll6} alt="brand logo" />
          </div>
          <div className="logos-slide inline-flex w-[50%] *:h-[50px] *:mx-10">
            <Image src={scroll1} alt="brand logo" />
            <Image src={scroll2} alt="brand logo" />
            <Image src={scroll3} alt="brand logo" />
            <Image src={scroll4} alt="brand logo" />
            <Image src={scroll5} alt="brand logo" />
            <Image src={scroll6} alt="brand logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScroll;
