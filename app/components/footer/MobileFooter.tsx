import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialMediaIcons } from "../../constants/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const MobileFooter = () => {
  return (
    <div className="block md:hidden">
      <div className="bg-gray-50 w-full">
        <div
          id="footer"
          className=" w-full main-container h-auto pt-8 pb-8 px-5"
        >
          <div className="w-full flex flex-col  gap-5">
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={60}
                height={60}
                alt="footer logo"
              />
            </Link>
            <p className="text-base font-light text-gray-600 max-w-[50ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ratione at, eum praesentium, aliquam nulla earum quae laborum
              natus soluta velit error? Minus provident aliquam nulla error cum
              nam recusandae!
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-gray-500 text-base font-light hover:text-blue-800"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-base font-light hover:text-blue-800"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-start w-full px-2">
            <Accordion type="single" collapsible className="w-full mt-4">
              {footerLinks.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="w-full"
                >
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col *:pb-2 *:mt-2 *:text-base *:font-light/loose">
                      {item.subtitle.map((subtitle, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-gray-500 hover:text-blue-800"
                        >
                          <Link href={item.links[subIndex]}>{subtitle}</Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                className="text-gray-500 text-base hover:text-blue-800 font-light"
              >
                Terms of Use
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-base hover:text-blue-800 font-light"
              >
                Privacy Policy
              </Link>

              <p className="text-gray-500 mt-4 md:mt-0 text-base font-light">
                {" "}
                &copy; 2024 QPe.com, Inc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
