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
              <ul className="flex flex-col *:pb-2 *:mt-2 *:text-sm *:font-light/loose ">
                {item.subtitle.map((subtitle, subIndex) => (
                  <li
                    key={subIndex}
                    className="*:text-gray-500 *:hover:text-blue-800"
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
            <p className="text-sm font-light text-gray-600 max-w-[24ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ratione at, eum praesentium, aliquam nulla earum quae laborum
              natus soluta velit error? Minus provident aliquam nulla error cum
              nam recusandae!
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-gray-500 text-sm font-light hover:text-blue-800"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-sm font-light hover:text-blue-800"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-200 w-full my-5 px-2">
        <div className="flex flex-wrap items-center justify-between mx-auto pt-4 md:pt-8 pb-4 md:pb-8 w-full px-6 md:px-16">
          <div className="flex items-center gap-5 ">
            {socialMediaIcons.map((icon, index) => (
              <Link key={index} href={icon.link}>
                <div dangerouslySetInnerHTML={{ __html: icon.icon }} />
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-start mt-4 md:mt-0 gap-x-12">
            <Link
              href="#"
              className="text-gray-500 text-sm hover:text-blue-800 font-light"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-gray-500 text-sm hover:text-blue-800 font-light"
            >
              Privacy Policy
            </Link>

            <p className="text-gray-500 mt-4 md:mt-0 text-sm font-light">
              {" "}
              &copy; 2024 QPe.com, Inc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
