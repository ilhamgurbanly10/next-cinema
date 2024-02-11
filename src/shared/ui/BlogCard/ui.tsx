import React from "react";
import { Props } from "./type";
import Link from "next/link";
import Title1 from "@/shared/ui/Title1";
import Description from "@/shared/ui/Description";
import TextButton from "@/shared/ui/Buttons/TextButton";
import { useTranslation } from "next-i18next";
export const UI: React.FC<Props> = ({
  className = "",
  img,
  name,
  href,
  date,
  user,
  description,
}) => {
  const { t } = useTranslation("common");
  return (
    <div
      className={`blog-card img-hover-effect border border-primary-orange inline-flex flex-col lg:flex-row items-center w-full lg:w-49% ${className}`}
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
      <div className="flex flex-col items-center lg:w-8/12 lg:items-start p-4">
        <Link href={href}>
          <Title1 text={name} />
        </Link>
        <Description text={description} className="mt-4" limit={70} />

        <div className="mt-4 border-t w-full pt-2 flex justify-center lg:justify-start">
          <TextButton
            href={user}
            colorClassName={"text-primary-grey"}
            colorClassNameOnHover={"text-primary-orange"}
            text={user}
            className="mt-2 text-lg font-light"
          />

          <div className="border-r h-8 bg-primary-grey mx-6"></div>

          <TextButton
            href={href}
            colorClassName={"text-primary-grey"}
            colorClassNameOnHover={"text-primary-orange"}
            text={t("read_more")}
            className="mt-2 text-lg font-light"
          />
        </div>
      </div>
    </div>
  );
};
