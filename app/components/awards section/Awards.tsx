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
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-0 md:justify-evenly w-full *:w-[50%] *:max-w-[150px] *:md:w-[20%] *:md:max-w-[150px]">
        <Image src={award1} alt="Awards" />
        <Image src={award2} alt="Awards" />
        <Image src={award3} alt="Awards" />
        <Image src={award4} alt="Awards" />
        <Image src={award5} alt="Awards" />
      </div>
    </div>
  );
};

export default Awards;
