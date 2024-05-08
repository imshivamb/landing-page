import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className=" bg-black w-full pt-6">
      <section className="main-container h-auto pt-8 md:pt-10 pb-8 md:pb-16 md:px-10 px-5">
        <div className="flex flex-col justify-start w-full items-start">
          <h2 className="text-4xl h-full mb-5 max-w-[18ch] md:text-4xl lg:text-5xl/tight font-bold bg-clip-text text-transparent bg-gradient-to-bl from-[#FFFFFF] via-[#B1B1B6] to-[#71717A]">
            Everything you need. Nothing you don’t{" "}
          </h2>
          <p className="max-w-xl text-lg text-gray-400">
            Financial management and visibility in one place. Experience a{" "}
            <span className="text-white">flexible toolkit</span> that makes
            every task feel like a breeze.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-16 items-stretch">
          <div className="w-full flex flex-col border border-gray-950 bg-gray-950 rounded-2xl">
            <div className=" relative w-full overflow-hidden h-full min-h-[325px]">
              <Image
                fill
                src="/images/feature1.png"
                alt="features"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full pt-6 px-10 pb-8">
              <h6 className="text-gray-50 font-semibold text-lg">
                Insights at your fingertips
              </h6>
              <p className="pt-4 text-gray-400 font-normal text-sm">
                All your data and finances in one place to provide quick answers
                and make decisions instantly.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col border border-gray-950 bg-gray-950 rounded-2xl">
            <div className=" relative w-full overflow-hidden h-full min-h-[325px]">
              <Image
                fill
                src="/images/feature2.png"
                alt="features"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full pt-6 px-10 pb-8">
              <h6 className="text-gray-50 font-semibold text-lg">
                Manage in real time
              </h6>
              <p className="pt-4 text-gray-400 font-normal text-sm">
                Have full control of your business finances on the go using our
                iOS/Android mobile apps. Because, you know, it’s 2023.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col border border-gray-950 bg-gray-950 rounded-2xl">
            <div className=" relative w-full overflow-hidden h-full min-h-[325px]">
              <Image
                fill
                src="/images/feature3.png"
                alt="features"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full pt-6 px-10 pb-8">
              <h6 className="text-gray-50 font-semibold text-lg">
                Important business alerts
              </h6>
              <p className="pt-4 text-gray-400 font-normal text-sm">
                Choose the alerts you need and receive them via email, mobile or
                Slack. Review and take action in one click.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
