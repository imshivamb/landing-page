import Link from "next/link";
import React from "react";
import { socialMediaIcons } from "../../constants/constants";

const FooterCopyright = () => {
  return (
    <div>
      <div className="h-[1px] bg-gray-200 w-full mb-5 px-2">
        <div className="flex flex-wrap items-center justify-between mx-auto pt-4 md:pt-8 pb-4 md:pb-8 w-full px-6 md:px-16">
          <div className="flex items-center gap-5 ">
            {socialMediaIcons.map((icon, index) => (
              <Link key={index} href={icon.link} target="_blank">
                <div dangerouslySetInnerHTML={{ __html: icon.icon }} />
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-start mt-4 md:mt-0 gap-x-12">
            <Link
              href="#"
              className="text-gray-800 text-base hover:text-blue-800 font-medium"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-gray-800 text-base hover:text-blue-800 font-medium"
            >
              Privacy Policy
            </Link>

            <p className="text-gray-800 mt-4 md:mt-0 text-base font-medium">
              {" "}
              &copy; 2024 QPe.com, Inc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
