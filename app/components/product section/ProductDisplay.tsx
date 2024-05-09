"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "framer-motion";

const ProductDisplay = () => {
  const [selectedItem, setSelectedItem] = useState("item-1");
  const images = {
    "item-1": "/images/product-img.png",
    "item-2": "/images/product2.jpg",
    "item-3": "/images/product3.jpg",
    "item-4": "/images/product2.jpg",
    "item-5": "/images/product3.jpg",
  };

  return (
    <div className="main-container w-full px-4 md:px-7 pt-8 pb-12 mt-5">
      <div className="flex justify-between items-start gap-5 flex-col md:flex-row">
        <div
          className={`image-container w-full md:w-1/2 relative max-w-[550px] min-h-[400px] md:min-h-[550px] px-6 py-4 ${selectedItem ? "swing-in-right-bck" : ""}`}
        >
          {selectedItem && (
            <Image
              key={selectedItem}
              fill
              src={images[selectedItem]}
              alt="product-display image"
              className="w-full aspect-1/1.2  rounded-2xl h-full max-w-full"
            />
          )}
        </div>
        <div className="w-full md:w-1/2 pr-5 md:pr-16 md:pl-4 pl-5 py-4">
          <h3 className=" leading-[1.1] md:leading-[55px] text-4xl mt-4 md:text-4xl lg:text-5xl font-medium text-gray-800 max-w-[20ch]">
            Sell your own products, or find products to sell
          </h3>
          <div className="h-[1px] bg-gray-300 w-full px-5 mt-6"></div>
          <div className="flex w-full flex-col mt-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              onValueChange={setSelectedItem}
            >
              <AccordionItem value="item-1" className="py-1.5">
                <AccordionTrigger className="text-2xl font-semibold">
                  Physical Products
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="py-1.5">
                <AccordionTrigger className="text-2xl font-semibold">
                  Dropshipping
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="py-1.5">
                <AccordionTrigger className="text-2xl font-semibold">
                  Print on Demand
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="py-1.5">
                <AccordionTrigger className="text-2xl font-semibold">
                  Digital Products
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="py-1.5">
                <AccordionTrigger className="text-2xl font-semibold">
                  Subscriptions
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
