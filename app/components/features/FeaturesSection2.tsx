import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { storegraphic, storegraphic2 } from "../../constants/imagesImport";

const FeaturesSection2 = () => {
  return (
    <div className="w-full h-full bg-[#E6E6FA] px-5 md:px-16 py-6 md:py-12">
      <div className="flex flex-col mt-5 items-center gap-2 justify-center">
        <Badge className="text-teal-600 bg-teal-600/20 py-1.5 px-2">
          Build an Online Store
        </Badge>
        <h2 className="font-medium text-4xl md:text-5xl mt-2 tracking-tight">
          Simplifying E-Commerce for All
        </h2>
      </div>
      <div className="banner-img relative w-full flex my-8 justify-center">
        <Image src={storegraphic2} alt="dashboard image" />
      </div>
      <div className="flex justify-center w-full">
        <div className=" max-w-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-3 justify-center items-stretch">
          <div className="grid-item flex flex-col items-start justify-start gap-2 p-4">
            <h6 className="font-semibold text-lg">Create Your Storefront</h6>
            <p className="font-medium text-gray-700 text-base pb-1.5">
              Create your storefront effortlessly, no coding required. Enjoy
              99.99% uptime reliability for uninterrupted business growth.
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
              Shape Your Brand, Your Way
            </h6>
            <p className="font-medium text-gray-700 text-base pb-1.5">
              Choose from curated templates, tailored for high conversion and
              SEO optimization. Find the perfect theme to showcase your unique
              brand identity.
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
              Go Bigger with App Integrations
            </h6>
            <p className="font-medium text-gray-700 text-base pb-1.5">
              Scale your business effortlessly and unlock a world of
              possibilities with our suite of 200+ integrations. From tracking
              analytics to managing shipments, payments, taxes, and more, expand
              your online store with ease.
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
