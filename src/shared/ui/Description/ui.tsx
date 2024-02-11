import React from "react";
import { Props } from "./type";
export const UI: React.FC<Props> = ({
  className = "",
  text,
  colorClassName = "text-primary-grey",
  limit = 100,
}) => {
  return (
    <p
      className={`description text-center lg:text-start transition-all text-base ${colorClassName} ${className}`}
    >
      {text?.slice(0, limit)} {text?.length > limit ? "..." : ""}
    </p>
  );
};
