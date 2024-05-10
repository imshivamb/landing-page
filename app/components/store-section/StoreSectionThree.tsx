import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import { WandSparkles } from "lucide-react";

const StoreSectionThree = () => {
  return (
    <div className="mx-auto w-full px-4 md:px-12 main-container mt-6 md:mt-16">
      <div className="flex flex-col md:flex-row items-start justify-start gap-5 w-full px-0 md:px-6 py-4">
        <div className="block w-full p-3 md:p-5 md:w-1/2 relative min-h-[500px]">
          <Image
            src="/images/product2.jpg"
            alt="store feature"
            fill
            className="object-cover rounded-xl w-full"
          />
        </div>
        <div className="flex w-full md:w-1/2 flex-col p-2 md:p-5 gap-4 items-start justify-start">
          <div className="mb-0 bg-gray-100 text-gray-800 font-light text-base rounded-full  px-3 py-1">
            Notifications
          </div>
          <h3 className="text-4xl md:text-5xl/tight font-medium max-w-[20ch]">
            Real time notifications on account activity
          </h3>
          <p className="text-lg/tight font-normal text-gray-500 max-w-[40ch]">
            Centralize and simplify payments, and get comprehensive insights on
            your financials. Connect your bank account and your card to
            Milestone.
          </p>
          <div className="flex gap-4 w-full items-stretch pt-6 flex-col md:flex-row">
            <div className="w-full flex flex-col shadow-md rounded-xl bg-white px-5 py-4">
              <div className="flex items-center gap-3">
                <p className="text-2xl font-semibold">₹999</p>
                <div className="bg-green-100/80 flex gap-1.5 items-center text-green-500 font-light text-base rounded-full  px-3 py-2">
                  <WandSparkles size={20} /> <span>Up to 25%</span>
                </div>
              </div>
              <p className="text-base max-w-[25ch] pt-5 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-full flex flex-col shadow-md rounded-xl bg-white px-5 py-4">
              <div className="flex items-center gap-3">
                <p className="text-2xl font-semibold">₹2,999</p>
                <div className="bg-green-100/80 flex gap-1.5 items-center text-green-500 font-light text-base rounded-full  px-3 py-2">
                  <WandSparkles size={20} /> <span>Up to 25%</span>
                </div>
              </div>
              <p className="text-base max-w-[25ch] pt-5 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="my-5">
            <Button text="Get Started" className="text-white bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSectionThree;
