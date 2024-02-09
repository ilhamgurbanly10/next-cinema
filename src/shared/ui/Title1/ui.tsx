import React from "react";
import { Props } from "./type";
export const UI: React.FC<Props> = ({
  className = "",
  text,
  colorClassName = "text-primary-blue hover:text-primary-orange",
}) => {
  return (
    <h2
      className={`title-1 mt-3 text-center lg:text-start transition-all text-lg ${colorClassName} cursor-pointer font-bold ${className}}`}
    >
      {text}
    </h2>
  );
};
