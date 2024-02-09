import React from "react";
import { Props } from "./type";
import Link from "next/link";
import Image from "@/shared/ui/Image";
import {
  TwitterOutlined,
  YoutubeFilled,
  InstagramOutlined,
  FacebookFilled,
} from "@/shared/icons";

export const UI: React.FC<Props> = ({
  className,
  src,
  label,
  href,
  position,
  socials,
}) => {
  return (
    <div className={`person-card ${className ? className : ""}`}>
      <Link href="/">
        <Image
          className="brand"
          width={258}
          height={324}
          alt={label}
          src={src}
        />
      </Link>

      <Link href={href}>
        <p className="mt-3 text-center lg:text-start transition-all text-lg text-primary-blue hover:text-primary-orange cursor-pointer font-bold">
          {label}
        </p>
      </Link>

      <i className="mt-2 text-center lg:text-start block">{position}</i>
    </div>
  );
};
