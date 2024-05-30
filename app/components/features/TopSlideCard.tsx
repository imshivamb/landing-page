import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import Image from "next/image";

const TopSlideCard = ({ sliderData }) => {
  const { id, title, description, link, image, backgroundColor } = sliderData;
  return (
    <div className="card" id={id}>
      <div
        style={{ backgroundColor }}
        className="w-full card-div rounded-2xl px-6 md:px-12  lg:px-16 md:py-8 py-4 flex justify-between items-center flex-col md:flex-row"
      >
        <div className="flex w-full md:w-1/2 flex-col gap-4 items-start justify-start">
          <h4 className=" text-3xl md:text-4xl/normal font-medium">{title}</h4>
          <p className="text-base/normal font-medium ">{description}</p>
          <Link href={link}>
            <Button text="Get Started" className="text-white bg-gray-800" />
          </Link>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 w-full rounded-xl overflow-hidden relative h-full px-10 py-4 max-w-[350px] md:max-w-[450px] min-h-[250px] md:min-h-[250px]">
          <Image
            fill
            src={image}
            alt="Slider image"
            className=" object-contain md:object-cover rounded-xl w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSlideCard;
