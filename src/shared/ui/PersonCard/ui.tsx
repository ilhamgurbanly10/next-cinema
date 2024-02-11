import React from "react";
import { Props } from "./type";
import Link from "next/link";
import Image from "@/shared/ui/Image";
import Title1 from "@/shared/ui/Title1";

export const UI: React.FC<Props> = ({
  className = "",
  src,
  label,
  href,
  position,
  socials,
}) => {
  return (
    <div className={`person-card ${className}`}>
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
        <Title1 text={label} className="mt-3" />
      </Link>

      <i className="mt-2 text-center lg:text-start block">{position}</i>
    </div>
  );
};
