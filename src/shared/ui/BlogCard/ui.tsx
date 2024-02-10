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
  return <div className={`person-card ${className}`}>{name}</div>;
};
