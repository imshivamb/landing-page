import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialMediaIcons } from "../../constants/constants";

const Footer = () => {
  return (
    <div className="bg-gray-50 w-full">
      <div
        id="footer"
        className=" w-full main-container hidden md:block h-auto pt-12 pb-8 px-16"
      >
        <div className="flex items-start justify-start w-full px-2">
          {footerLinks.map((item, index) => (
            <div
              key={index}
              className="w-[15%] flex flex-col mr-4 items-start justify-start"
            >
              <p className="text-lg/tight pb-2 font-medium text-gray-800">
                {item.title}
              </p>
              <ul className="flex flex-col *:pb-2 *:mt-2 *:text-base *:font-light/loose ">
                {item.subtitle.map((subtitle, subIndex) => (
                  <li
                    key={subIndex}
                    className="*:text-gray-700 *:hover:text-blue-800"
                  >
                    <Link href={item.links[subIndex]} className="">
                      {subtitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-[20%] flex flex-col items-start justify-start gap-5">
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={120}
                height={60}
                alt="footer logo"
              />
            </Link>
            <p className="text-base font-medium text-gray-600 max-w-[24ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ratione at, eum praesentium, aliquam nulla earum quae laborum
              natus soluta velit error? Minus provident aliquam nulla error cum
              nam recusandae!
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-gray-700 text-base font-medium hover:text-blue-800"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-700 text-base font-medium hover:text-blue-800"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
