"use client";

import React from "react";
import { Button } from "../Button";
import PointsGrid from "./PointsGrid";
import { useInView } from "react-intersection-observer";

const Seo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full bg-white relative h-auto p-2 md:p-5">
      <div className="main-container pt-6 p-2 md:p-8 w-full">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row ${inView ? "slide-top delay-300" : ""} justify-between items-start w-full px-4 py-3`}
        >
          <div className={`float-left w-full  max-w-xl`}>
            <h2 className="text-4xl font-medium leading-[1.1]  mb-4 md:leading-tight sm:text-4xl md:text-5xl">
              Build High Performance E-Commerce Stores
            </h2>
          </div>
          <div className="w-full max-w-lg float-end flex flex-col gap-4 items-start justify-start">
            <p className={`font-medium text-[17px] leading-normal`}>
              Seamlessly create visually stunning and high-converting online
              stores with built-in tools. Empowering new age entrepreneurs with
              full-stack e-commerce solutions.
            </p>
            <div className="py-2">
              <Button
                text="Launch your Store"
                className="text-white bg-gray-800"
              />
            </div>
          </div>
        </div>
        <div
          ref={ref2}
          className={`w-full max-w-7xl mx-auto slider mt-8 ${inView2 ? "slide-top delay-1000" : ""}`}
        >
          <PointsGrid />
        </div>
      </div>
    </div>
  );
};

export default Seo;
