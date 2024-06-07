"use client";

import React, { useState } from "react";
import { Button } from "../../components/Button";
import Image from "next/image";
import {
  theme1,
  theme11,
  theme13,
  theme14,
  theme15,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
  theme7,
  theme8,
  theme9,
} from "../../constants/imagesImport";
import Link from "next/link";
import Navbar from "../../components/navbar/Navbar";
import MobileNav from "../../components/navbar/MobileNav";
import FooterCopyright from "../../components/footer/FooterCopyright";

const categories = [
  "All",
  "Fashion & Clothing",
  "Jewelery & Accessories",
  "Arts & Crafts",
  "Home Decor",
  "Beauty & Wellness",
  "Food & Drinks",
  "Electronics",
  "Kids & Babies",
  "Sports & Outdoors",
];

const ThemesPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <div className="pricing-section mt-16 w-full px-5 md:px-10 py-16">
        <div className="hero-pricing flex flex-col items-center justify-center">
          <div className="max-w-2xl mx-auto">
            <h6 className="font-bold text-lg md:text-xl px-2 uppercase">
              Themes
            </h6>
          </div>
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold my-5 max-w-2xl leading-tight md:leading-loose">
            Qpe Themes - built for businesses
          </h1>
          <div className="w-full text-center text-lg md:text-xl font-medium ">
            Take your store from launch to scale with themes that make selling
            easy.
          </div>
          {/* <Button
            text="Explore Themes"
            className="bg-gray-800 text-white mt-5 !py-3"
          /> */}
        </div>
        <div className="w-full h-[1px] bg-gray-300 main-container my-8"></div>
        <div className="w-full mt-6 px-10">
          <p className="text-2xl font-semibold">Categories</p>
          <div className="mt-5 w-full flex flex-wrap text-sm items-center gap-3 ">
            {categories.map((category) => (
              <span
                key={category}
                onClick={() => setActiveTab(category)}
                className={`cursor-pointer py-2 px-4 rounded-full hover:bg-gray-900 hover:text-white transition-all ${category === activeTab ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      <section>
        <div className="grid main-container grid-cols-1 mt-10 md:grid-cols-2 gap-x-6 gap-y-5 w-full">
          <div className="theme-grid-item w-full h-auto">
            <Link href="#">
              {" "}
              <Image
                src={theme1}
                alt="theme1"
                className="shadow-sm rounded-2xl object-cover w-full max-w-full"
              />
            </Link>
            <div className="flex pt-4 items-center justify-between px-5">
              <p className="theme-name text-lg font-medium ">Beauty Secrets</p>
              <p className="text-lg font-medium">Free</p>
            </div>
            <div className="mt-3 flex items-center gap-3 px-5 w-full">
              <div className="rounded-full px-3 py-1 text-sm bg-slate-100 text-gray-800">
                Mega Menu
              </div>
            </div>
          </div>
          <div className="theme-grid-item w-full h-auto">
            <Link href="#">
              {" "}
              <Image
                src={theme3}
                alt="theme2"
                className="shadow-sm rounded-2xl  object-cover  w-full max-w-full"
              />
            </Link>
            <div className="flex pt-4 items-center justify-between px-5">
              <p className="theme-name text-lg font-medium ">Petsy</p>
              <p className="text-lg font-medium">Free</p>
            </div>
            <div className="mt-3 flex items-center gap-3 px-5 w-full">
              <div className="rounded-full px-3 py-1 text-sm bg-slate-100 text-gray-800">
                Mega Menu
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 w-full main-container py-10">
        <div className="flex flex-col md:flex-row justify-between items-start w-full py-3">
          <div className="float-left w-full max-w-lg text-balance">
            <h2 className="text-4xl leading-none mb-4 font-semibold md:leading-tight sm:text-4xl md:text-5xl">
              Every theme meets a high standard
            </h2>
          </div>
          <div className="w-full max-w-3xl float-end flex flex-col gap-4 items-end justify-end">
            <ul className="list-none *:text-[15px] *:lg:text-base/[1.5] *:font-medium *:py-1.5 *:text-gray-700 *:max-w-[60ch]">
              <li className="flex items-start gap-1.5">
                {/* <Image
                  src="./images/check-icon.png"
                  alt="icon"
                  width={20}
                  height={20}
                /> */}
                <p className="">
                  <span className="font-bold underline">
                    Packed with built‑in features.
                  </span>{" "}
                  Offer discounts, recommend products, capture emails, and do
                  more for your buyers.
                </p>
              </li>
              <li className="flex items-start gap-1.5">
                {/* <Image
                  src="./images/check-icon.png"
                  alt="icon"
                  width={20}
                  height={20}
                /> */}
                <p>
                  <span className="font-bold underline">
                    Optimized for selling online.
                  </span>
                  So your store loads fast, is mobile-friendly, and has the best
                  checkout around.{" "}
                </p>
              </li>
              <li className="flex items-start gap-1.5">
                {/* <Image
                  src="./images/check-icon.png"
                  alt="icon"
                  width={20}
                  height={20}
                /> */}
                <p>
                  <span className="font-bold underline">
                    Covered by long-term support.
                  </span>{" "}
                  All themes get free updates so you always have the latest
                  version available.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="grid main-container grid-cols-1 mt-10 md:grid-cols-2 gap-x-6 gap-y-5 w-full">
          <div className="theme-grid-item w-full h-auto">
            <Link href="#">
              {" "}
              <Image
                src={theme6}
                alt="theme1"
                className="shadow-md rounded-2xl object-cover w-full max-w-full"
              />
            </Link>
            <div className="flex pt-4 items-center justify-between px-5">
              <p className="theme-name text-lg font-medium ">Urban blend</p>
              <p className="text-lg font-medium">Free</p>
            </div>
            <div className="mt-3 flex items-center gap-3 px-5 w-full">
              <div className="rounded-full px-3 py-1 text-sm bg-slate-100 text-gray-800">
                Mega Menu
              </div>
            </div>
          </div>
          <div className="theme-grid-item w-full h-auto">
            <Link href="#">
              {" "}
              <Image
                src={theme7}
                alt="theme2"
                className="shadow-md rounded-2xl  object-cover  w-full max-w-full"
              />
            </Link>
            <div className="flex pt-4 items-center justify-between px-5">
              <p className="theme-name text-lg font-medium ">Sr Luxury</p>
              <p className="text-lg font-medium">Free</p>
            </div>
            <div className="mt-3 flex items-center gap-3 px-5 w-full">
              <div className="rounded-full px-3 py-1 text-sm bg-slate-100 text-gray-800">
                Mega Menu
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[1px] bg-gray-300 main-container my-8"></div>
      <section>
        <div className="grid main-container mb-12 grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-5 w-full">
          <div className="theme-grid-item w-full">
            <Link href="#" className="w-full max-w-full">
              {" "}
              <Image
                src={theme5}
                alt="theme1"
                className="border border-gray-700 rounded-2xl object-fill w-full max-w-full h-full max-h-[525px]"
              />
            </Link>
            <div className="flex pt-4 items-center justify-between px-2">
              <p className="theme-name text-base font-semibold ">Oak Heaven</p>
              <p className="text-base font-medium">Free</p>
            </div>
            <div className="mt-3 flex items-center gap-3 px-2 w-full">
              <div className="rounded-full px-3 py-1 text-sm bg-slate-100 text-gray-800">
                Mega Menu
              </div>
            </div>
          </div>
          <div className="theme-grid-item w-full">
            <Link href="#" className="w-full max-w-full">
              {" "}
              <Image
                src={theme4}
                alt="theme1"
                className="border border-gray-700 rounded-2xl object-fill w-full max-w-full h-full max-h-[525px]"
              />
            </Link>
            <div className="flex pt-4 items-center justify-between px-2">
              <p className="theme-name text-base font-semibold ">
                Detailing Devils
              </p>
              <p className="text-base font-medium">Free</p>
            </div>
            <div className="mt-3 flex items-center gap-3 px-2 w-full">
              <div className="rounded-full px-3 py-1 text-sm bg-slate-100 text-gray-800">
                Mega Menu
              </div>
            </div>
          </div>
          <div className="theme-grid-item w-full">
            <Link href="#" className="w-full max-w-full">
              {" "}
              <Image
                src={theme5}
                alt="theme1"
                className="border border-gray-700 rounded-2xl object-fill w-full max-w-full h-full max-h-[525px]"
              />
            </Link>
            <div className="flex pt-4 items-center justify-between px-2">
              <p className="theme-name text-base font-semibold ">Oak Heaven</p>
              <p className="text-base font-medium">Free</p>
            </div>
            <div className="mt-3 flex items-center gap-3 px-2 w-full">
              <div className="rounded-full px-3 py-1 text-sm bg-slate-100 text-gray-800">
                Mega Menu
              </div>
            </div>
          </div>
          <div className="theme-grid-item w-full">
            <Link href="#" className="w-full max-w-full">
              {" "}
              <Image
                src={theme5}
                alt="theme1"
                className="border border-gray-700 rounded-2xl object-fill w-full max-w-full h-full max-h-[525px]"
              />
            </Link>
            <div className="flex pt-4 items-center justify-between px-2">
              <p className="theme-name text-base font-semibold ">Oak Heaven</p>
              <p className="text-base font-medium">Free</p>
            </div>
            <div className="mt-3 flex items-center gap-3 px-2 w-full">
              <div className="rounded-full px-3 py-1 text-sm bg-slate-100 text-gray-800">
                Mega Menu
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pricing-section-2 bg-gradient-to-tr from-white to-cyan-100 w-full px-5 md:px-10 py-16">
          <div className="hero-pricing flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold my-5 max-w-3xl leading-tight md:leading-loose">
              All you need to start your business for free
            </h1>
            <p className="md:text-xl max-w-xl text-lg text-center font-medium tracking-normal md:tracking-wide">
              Manage, run and grow your e-commerce business with QPe. Sell
              online with ease!
            </p>
            <Link href="https://accounts.goqpe.com/v4/signup" target="_blank">
              <Button
                text="Start free trial"
                className="text-white mt-5 bg-gray-800"
              ></Button>
            </Link>
          </div>
        </div>
      </section>
      <FooterCopyright />
    </>
  );
};

export default ThemesPage;
