import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import { Badge } from "../ui/badge";
import { features1, features3 } from "../../constants/imagesImport";

const StoreSectionOne = () => {
  return (
    <div className="mx-auto w-full px-4 md:px-12 main-container mt-6 md:mt-16">
      <div className="flex flex-col md:flex-row items-start justify-start w-full px-0 md:px-6 py-4">
        <div className="flex w-full md:w-1/2 flex-col p-2 md:p-5 gap-4 items-start justify-start">
          <Badge className="bg-violet-500/20 text-violet-600 mb-0 py-1.5 px-2.5">
            Customize Store
          </Badge>
          <h3 className="text-4xl md:text-5xl/tight font-medium max-w-[15ch]">
            Robust infrastructure engineered for your brand&apos;s growth
          </h3>
          <p className="text-base/normal font-medium text-gray-800 max-w-[40ch]">
            Unmatched performance speed. Our robust, speed-optimized
            infrastructure ensures rapid page loading, delivering a superior
            online shopping experience for your customers.
          </p>
          <ul className="list-none  *:text-lg/tight *:font-normal *:py-1.5 *:text-gray-700 *:max-w-[40ch]">
            <li className="flex items-center gap-1.5">
              <Image
                src="/images/check-icon.png"
                alt="icon"
                width={20}
                height={20}
              />
              No hidden fees.
            </li>
            <li className="flex items-center gap-1.5">
              <Image
                src="/images/check-icon.png"
                alt="icon"
                width={20}
                height={20}
              />
              100% Security. Guaranteed.
            </li>
            <li className="flex items-center gap-1.5">
              <Image
                src="/images/check-icon.png"
                alt="icon"
                width={20}
                height={20}
              />
              No training or maintenance needed.
            </li>
          </ul>
          <div className="my-5">
            <Button
              text="Design your Store"
              className="text-white bg-gray-800"
            />
          </div>
        </div>
        <div className="block w-full md:w-1/2 p-5 relative min-h-[500px]">
          <Image
            src={features3}
            alt="store feature"
            className="object-cover rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreSectionOne;
