import React from "react";
import { Props } from "./type";
import { useTranslation } from "next-i18next";
export const UI: React.FC<Props> = ({
  className,
  text,
  underline = true,
  underlineColorClassName = "bg-primary-orange",
}) => {
  const { t } = useTranslation("common");

  return (
    <h2
      className={`title mb-5 text-center text-primary-blue font-medium text-lg lg:text-3xl ${
        className ? className : ""
      }`}
    >
      <span className="block">{t(text)}</span>
      {underline && (
        <div className="flex flex-col items-center mt-4">
          <div className={`h-px w-24 ${underlineColorClassName}`}></div>
          <div className={`h-px w-14 mt-1.5 ${underlineColorClassName}`}></div>
        </div>
      )}
    </h2>
  );
};
