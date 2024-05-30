"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../Button";
import { WandSparkles } from "lucide-react";
import {
  features1,
  features2,
  featuresImg3,
  features4,
} from "../../constants/imagesImport";

const StoreSectionThree = () => {
  const [currentImage, setCurrentImage] = useState(features1);
  const [clickedDiv, setClickedDiv] = useState(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleImageChange = (image, divIndex) => {
    setCurrentImage(image);
    setClickedDiv(divIndex);
    setShouldAnimate(true);
  };

  const getClassNames = (divIndex) => {
    return `first-click-div hover:text-gray-950  hover:opacity-100 cursor-pointer flex flex-col gap-3 w-full pb-5 border-b border-gray-300 ${
      clickedDiv === divIndex ? "opacity-100" : "opacity-80"
    }`;
  };
  return (
    <div className="mx-auto w-full px-4 md:px-6 main-container mt-6 md:mt-16">
      <div className="flex flex-col md:flex-row items-center justify-start gap-5 w-full px-0 md:px-6 py-4">
        <div className="block w-full p-3 md:p-5 md:w-1/2 relative min-h-[500px]">
          <Image
            src={currentImage}
            alt="store feature"
            className={`object-cover rounded-xl w-full ${
              shouldAnimate ? "animate-zoom" : ""
            }`}
            onAnimationEnd={() => setShouldAnimate(false)}
          />
        </div>
        <div className="flex w-full md:w-1/2 flex-col p-2 md:p-5 gap-4 items-start justify-start">
          <div className="mb-0 bg-gray-200 text-gray-800 font-medium text-xs rounded-full  px-3 py-1">
            Selling Products
          </div>
          <h3 className="text-4xl md:text-5xl/tight font-medium max-w-[20ch]">
            Sell your products or source new items to sell
          </h3>
          <div className="flex flex-col gap-4 mt-4 w-full">
            <div
              className={getClassNames(1)}
              onClick={() => handleImageChange(features1, 1)}
            >
              <h4 className="text-2xl font-semibold text-gray-800 leading-normal">
                Sell Physical Products
              </h4>
              <p className="font-medium text-base leading-[1.5]">
                Market and sell physical products directly from your fully
                responsive e-commerce website. Customizable themes, integrate
                payment gateways, upload products in bulk, manage inventory,
                process orders, and reach customers worldwide with ease.
              </p>
            </div>
            <div
              className={getClassNames(2)}
              onClick={() => handleImageChange(features2, 2)}
            >
              <h4 className="text-2xl font-semibold text-gray-800 leading-normal">
                Dropshipping
              </h4>
              <p className="font-medium text-base leading-[1.5]">
                Start your dropshipping business with minimal investment and
                zero inventory management. Connect with suppliers, list products
                from third party apps, and focus on marketing and sales while
                suppliers will handle the logistics.
              </p>
            </div>
            <div
              className={getClassNames(3)}
              onClick={() => handleImageChange(featuresImg3, 3)}
            >
              <h4 className="text-2xl font-semibold text-gray-800 leading-normal">
                Print on Demand
              </h4>
              <p className="font-medium text-base leading-[1.5]">
                Launch your print-on-demand business with ease. Design,
                customize, and sell unique products without holding inventory.
                From t-shirts to headphones etc, Let suppliers handle the
                manufacturing and shipping, while you focus on creating and
                marketing your custom merchandise.
              </p>
            </div>
            <div
              className={getClassNames(4)}
              onClick={() => handleImageChange(features4, 4)}
            >
              <h4 className="text-2xl font-semibold text-gray-800 leading-normal">
                Sell Digital Products
              </h4>
              <p className="font-medium text-base leading-[1.5]">
                Monetize your digital creations effortlessly. From music files
                to ebooks, offer a diverse range of digital products to your
                audience.
              </p>
            </div>
          </div>

          {/* <div className="my-5">
            <Button text="Get Started" className="text-white bg-gray-800" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StoreSectionThree;
