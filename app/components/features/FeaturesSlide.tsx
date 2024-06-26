import React from "react";
import { sliderCardData } from "../../constants/constants";
import TopSlideCard from "./TopSlideCard";

const FeaturesSlide = () => {
  return (
    <div className="w-full bg-white relative h-auto p-2 md:p-5">
      <div className="main-container mt-5 p-2 md:p-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start w-full py-3">
          <div className="float-left w-full max-w-2xl">
            <h2 className="text-4xl leading-none mb-4 font-medium md:leading-tight sm:text-4xl md:text-5xl">
              Reach customers wherever they are. Sell to every buyer,
              everywhere.
            </h2>
          </div>
          <div className="w-full max-w-lg float-end flex flex-col gap-4 items-start justify-start">
            <p className="font-medium text-base text-gray-700 leading-normal">
              Sell your products online, in person, and globally with essential
              marketing tools, social media integrations, and diverse sales
              channels to reach your customers.
            </p>
          </div>
        </div>

        <div className="relative w-full mx-auto my-0">
          <div
            id="cards"
            className="main-container mb-[4vw] w-full h-auto mt-6 p-2 pl-0"
          >
            {sliderCardData.map((sliderData, index) => (
              <TopSlideCard key={index} sliderData={sliderData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlide;
