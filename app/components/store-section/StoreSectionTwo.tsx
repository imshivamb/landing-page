import React from "react";
import Image from "next/image";

const StoreSectionTwo = () => {
  return (
    <div className="mx-auto w-full px-4 md:px-12 main-container mt-16">
      <div className="flex flex-col md:flex-row items-start justify-start gap-5 w-full px-6 py-4">
        <div className="block w-full p-5 md:w-1/2 relative min-h-[500px]">
          <Image
            src="/images/store1.png"
            alt="store feature"
            fill
            className="object-cover w-full"
          />
        </div>
        <div className="flex w-full md:w-1/2 flex-col p-5 gap-4 items-start justify-start">
          <h3 className="text-3xl md:text-5xl/tight font-semibold max-w-[15ch]">
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
        </div>
      </div>
    </div>
  );
};

export default StoreSectionTwo;
