import Image from "next/image";
import Link from "next/link";
import React from "react";
import vector from "./images/vector.png";
import { Button } from "../Button";

const Subscribe = () => {
  return (
    <div className="w-full md:min-h-[450px] flex justify-center h-full bg-[#FFDFAD] py-8 px-6 lg:py-20 lg:px-20">
      <div className="max-w-6xl w-full flex flex-col items-center justify-center text-center">
        <Image src="/vector.png" alt="vector" width={70} height={70} />
        <h2 className="mt-5 text-4xl/[40px] md:text-5xl/[50px] max-w-2xl lg:text-6xl/[60px] font-medium">
          Grow your Business with 10,000+ store owners{" "}
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 ">
          Get started for free, then upgrade from ₹1,799 INR / month.
        </p>
        <div className="flex gap-3 mt-5 items-center">
          <Link href="">
            <Button text="Try for Free" className="bg-gray-900 text-white" />
          </Link>
          <Link href="">
            <Button text="View Pricing" className="bg-white text-gray-900 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
