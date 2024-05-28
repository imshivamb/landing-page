"use client";

import clsx from "clsx";
import { useState } from "react";

const NumbersCard = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardClass = clsx(
    "border rounded-xl border-gray-800 transition-all h-full p-3 md:p-5",
    {
      "bg-white ": !isHovered,
      [card.backgroundColor]: isHovered,
    }
  );
  return (
    <div
      key={card.title}
      className={cardClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-start justify-start">
        <h5 className="uppercase text-sm font-medium mb-8 text-left">
          {card.title}
        </h5>
        <h3 className="text-5xl font-semibold">{card.percent}</h3>
        <p className="text-base font-medium text-gray-800 mt-3">
          {card.description1}
        </p>
        <div className="w-[90%] h-[1px] bg-gray-500 my-2"></div>
        <p className="text-base font-medium text-gray-800 mt-2 pb-3">
          {card.description2}
        </p>
      </div>
    </div>
  );
};

export default NumbersCard;
