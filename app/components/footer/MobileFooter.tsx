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
                width={120}
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
      </div>
    </div>
  );
};

export default MobileFooter;
