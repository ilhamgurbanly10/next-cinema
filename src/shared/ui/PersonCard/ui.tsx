import React from "react";
import { Props } from "./type";
import Link from "next/link";
import Image from "@/shared/ui/Image";
import Title1 from "@/shared/ui/Title1";
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
          className="person-card-img cursor-pointer"
          width={258}
          height={324}
          alt={label}
          src={src}
        />
      </Link>

      <Link href={href}>
        <Title1 text={label} />
      </Link>

      <i className="mt-2 text-center lg:text-start block">{position}</i>
    </div>
  );
};
