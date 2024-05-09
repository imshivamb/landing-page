import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import { Badge } from "../ui/badge";

const StoreSectionOne = () => {
  return (
    <div className="mx-auto w-full px-4 md:px-16 max-w-7xl mt-10 md:mt-16">
      <div className="flex flex-col md:flex-row items-start justify-start w-full px-2 md:px-6 py-4">
        <div className="flex w-full md:w-1/2 flex-col p-3 md:p-5 gap-4 items-start justify-start">
          <Badge className="bg-violet-500/80 hover:bg-violet-600 text-white mb-0 py-1.5 px-2.5">
            Customize Store
          </Badge>
          <h3 className="text-4xl md:text-5xl/tight font-semibold md:font-bold max-w-[15ch]">
            Manage all your businesses in one place
          </h3>
          <p className="text-lg/tight font-normal text-gray-500 max-w-[40ch]">
            Centralize and simplify payments, and get comprehensive insights on
            your financials. Connect your bank account and your card to
            Milestone.
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
            src="/images/product3.jpg"
            alt="store feature"
            fill
            className="object-cover rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreSectionOne;
