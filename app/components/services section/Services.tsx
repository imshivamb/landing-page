import { BadgeHelp, Book, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 px-6 py-6 md:px-16 md:py-16 mx-auto w-full md:max-w-full">
      <div className="main-container relative w-full">
        <div className=" w-full  flex justify-start ">
          <h2 className="text-4xl/10 text-start max-w-[500px] pb-5 font-bold leading-tight text-white sm:text-3xl md:text-5xl">
            Everything you need to grow your team
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-x-5 mt-6 md:mt-12">
          <div className="w-full sm:w-[45%] md:w-[30%] mb-6 p-4 bg-[rgba(255,255,255,0.1)] rounded-xl px-6 py-6 backdrop-blur-md border border-white border-opacity-20">
            <div className="flex flex-col gap-3 items-start justify-start">
              <div className="shadow-sm w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-white">
                <Book size={24} />
              </div>
              <h3 className="font-bold text-3xl text-white">Blog</h3>
              <p className="font-light text-white text-base max-w-[30ch]">
                You&apos;ll have a branded job board as a centralized place to
                display all the open positions at your organization.{" "}
              </p>
              <Link href="">
                <Button
                  text="Learn more"
                  className="bg-gray-700/20 border border-white text-white "
                />
              </Link>
            </div>
          </div>
          <div className=" w-full sm:w-[45%] md:w-[30%] p-4 mb-6 bg-[rgba(255,255,255,0.1)] rounded-xl px-6 py-6 backdrop-blur-md border border-white border-opacity-20">
            <div className="flex flex-col gap-3 items-start justify-start">
              <div className="shadow-sm w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-white">
                <UsersRound size={24} />
              </div>
              <h3 className="font-bold text-3xl text-white">Community</h3>
              <p className="font-light text-white text-base max-w-[30ch]">
                Connect with a community of brands, partners, and fellow
                merchants who understand QPe.
              </p>
              <Link href="">
                <Button
                  text="Learn more"
                  className="bg-gray-700/20 border border-white text-white "
                />
              </Link>
            </div>
          </div>
          <div className=" w-full sm:w-[45%] mb-6 md:w-[30%] p-4 bg-[rgba(255,255,255,0.1)] rounded-xl px-6 py-6 backdrop-blur-md border border-white border-opacity-20">
            <div className="flex flex-col gap-3 items-start justify-start">
              <div className="shadow-sm w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-white">
                <BadgeHelp size={24} />
              </div>
              <h3 className="font-bold text-3xl text-white">Help Center</h3>
              <p className="font-light text-white text-base max-w-[30ch]">
                Find answers with a dedicated helpdesk resource full of articles
                and videos from our Support team.
              </p>
              <Link href="">
                <Button
                  text="Learn more"
                  className="bg-gray-700/20 border border-white text-white "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
