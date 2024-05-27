import React, { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  icon,
}) => {
  const buttonCLass = clsx(
    "text-[15px] py-2 md:py-2 px-4 font-semibold w-auto max-w-[230px] rounded-2xl hover:-translate-y-1 transition-all ease-in-out duration-300 hover:shadow-md",
    className
  );
  return (
    <button onClick={onClick} className={buttonCLass}>
      {text} {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};
