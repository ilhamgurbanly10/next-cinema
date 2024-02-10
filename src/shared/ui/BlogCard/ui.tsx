import React from "react";
import { Props } from "./type";
import Link from "next/link";
import Image from "@/shared/ui/Image";
import Title1 from "@/shared/ui/Title1";

export const UI: React.FC<Props> = ({
  className = "",
  img,
  name,
  href,
  date,
  user,
  description,
}) => {
  return (
    <div
      className={`blog-card img-hover-effect flex border border-primary-orange lg:pr-2 inline-flex flex-col lg:flex-row items-stretch w-full lg:w-49% ${className}`}
    >
      <div className="h-80 lg:h-48 overflow-hidden w-full lg:w-4/12 relative">
        <span className="absolute top-0 right-0 text-white inline-flex items-center justify-center bg-primary-orange p-2 h-14 text-center font-bold w-14 z-10">
          {date}
        </span>
        <div
          style={{ backgroundImage: `url("${img}")` }}
          className={`img-hover-effect-img h-full w-full transition-all duration-700 scale-100 bg-center bg-cover inset-0`}
        />
      </div>
      <div>{name}</div>
    </div>
  );
};
