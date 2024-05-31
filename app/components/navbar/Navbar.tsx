import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { NavigationMenuPage } from "./NavMenu";

const Navbar = () => {
  return (
    <header>
      <div className="nav-wrapper z-[9999] w-full mx-auto pt-0  px-0 block fixed left-0 top-0 bottom-auto right-0">
        <div
          id="nav"
          className="bg-white rounded-none mx-auto tracking-tight text-base leading-normal shadow-lg relative block"
        >
          <div id="nav-content-wrapper" className="mx-auto px-[1.5rem] w-full">
            <div
              id="nav-content"
              className="gap-x-4 gap-y-0 flex-row flex justify-between items-center w-full min-h-[70px]"
            >
              <div className="nav-left z-10 flex-row flex flex-shrink-0 justify-between items-center relative min-w-[20%]">
                <Link href="/" className="logo flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt=""
                    width={100}
                    height={50}
                    className="max-h-[50px] max-w-[95px] md:max-w-[150px] flex flex-shrink-0 w-full flex-row h-auto items-start justify-start"
                  />
                </Link>
              </div>
              <nav id="nav-menu" className="float-right md:block hidden">
                {/* <div className="nav-menu-content">
                  <ul className="nav-menu flex gap-5 justify-between items-center h-full flex-row *:cursor-pointer">
                    <li className="nav-dropdown h-full text-left mx-auto z-[900] block transition-all">
                      <div className="nav-link flex flex-row items-center gap-1 justify-center p-0 min-h-[70px] text-base font-semibold">
                        <span>Home</span>
                      </div>
                    </li>
                    <li className="nav-dropdown h-full text-left mx-auto z-[900] block transition-all">
                      <div className="nav-link flex flex-row items-center gap-1 justify-center p-0 min-h-[70px] text-base font-semibold">
                        <span>Solutions</span>
                        <ChevronDown size={14} />
                      </div>
                    </li>
                    <li className="nav-dropdown h-full text-left mx-auto z-[900] block transition-all">
                      <Link href="/pricing">
                        <div className="nav-link flex flex-row items-center gap-1 justify-center p-0 min-h-[70px] text-base font-semibold">
                          <span>Pricing</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div> */}
                <NavigationMenuPage />
              </nav>
              <div
                className="flex flex-row justify-end min-w-[20%]
              "
              >
                <Link href="/">
                  <Button
                    text="Get Started"
                    className="text-white bg-violet-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
