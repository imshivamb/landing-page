import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

const FeaturesSection2 = () => {
  return (
    <div className="w-full h-full bg-[#E9C0E9] px-6 md:px-16 py-6 md:py-12">
      <div className="flex flex-col items-center gap-2 justify-center">
        <Badge className="text-white bg-teal-600 hover:teal-700 py-1.5 px-2">
          Build Online Store
        </Badge>
        <h2 className="font-bold text-4xl md:text-5xl mt-2 tracking-tight">
          Your Store, your Way
        </h2>
      </div>
      <div className="banner-img relative w-full flex justify-center mt-5">
        <Image
          src="/images/dashboard-img.png"
          alt="dashboard image"
          width={1200}
          height={600}
        />
      </div>
      <div className="flex justify-center w-full">
        <div className=" max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-3 justify-center items-stretch">
          <div className="grid-item flex flex-col items-start justify-start gap-2 p-4">
            <h6 className="font-semibold text-lg">
              Build an online storefront
            </h6>
            <p className="font-medium text-gray-600 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, {" "}
            </p>
            <Link href="#">
              <Button
                text="Online Store Builder"
                className="bg-gray-800 text-white"
              />
            </Link>
          </div>
          <div className="grid-item flex flex-col items-start justify-start gap-2 p-4">
            <h6 className="font-semibold text-lg">
              Build an online storefront
            </h6>
            <p className="font-medium text-gray-600 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, {" "}
            </p>
            <Link href="#">
              <Button
                text="Online Store Builder"
                className="bg-gray-800 text-white"
              />
            </Link>
          </div>
          <div className="grid-item flex flex-col items-start justify-start gap-2 p-4">
            <h6 className="font-semibold text-lg">
              Build an online storefront
            </h6>
            <p className="font-medium text-gray-600 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, {" "}
            </p>
            <Link href="#">
              <Button
                text="Online Store Builder"
                className="bg-gray-800 text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection2;
