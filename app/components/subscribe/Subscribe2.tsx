import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../Button";
import Image from "next/image";
import { subscribe } from "../../constants/imagesImport";

const Subscribe2 = () => {
  return (
    <div className="main-container rounded-3xl overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 h-full bg-[#FFDFAD] py-8 px-6 lg:py-10 lg:px-10">
        <div className="max-w-full w-full flex flex-col items-start justify-start text-start">
          <h2 className="mt-5 text-3xl/[40px] md:text-4xl/[50px] max-w-4xl lg:text-5xl/[60px] font-medium">
            Powering 45000+ eCommerce entrepreneurs, enterprise and d2c brands
          </h2>
          <p className="mt-4 hidden text-base md:text-lg font-medium text-gray-800 ">
            Get started for free, then upgrade from ₹1,799 INR / month.
          </p>
          <div className="flex gap-3 mt-5 items-start justify-start">
            <Link href="" className="group">
              <Button
                text="Book a Demo"
                icon={
                  <ArrowRight
                    size={18}
                    className=" group-hover:translate-x-2 transition-all duration-700"
                  />
                }
                className="bg-white flex gap-1.5 items-center text-gray-900 transition-all duration-700"
              />
            </Link>
          </div>
        </div>
        <div className=" w-full h-full max-w-full">
          <Image src={subscribe} alt="book a demo" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe2;
