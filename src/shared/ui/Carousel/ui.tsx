import React from "react";
import { Props, Item } from "./type";
import useModel from "./model";
import { useTranslation } from "next-i18next";

export const UI: React.FC<Props> = ({
  className,
  data,
  speed = 1000,
  overlay = true,
  arrows = true,
  infinite = true,
  autoplay = true,
  autoplaySpeed = 5000,
  pauseOnHover = true,
}) => {
  const { key, next, prev, setIsHover } = useModel(
    data?.length - 1,
    infinite,
    autoplay,
    autoplaySpeed,
    pauseOnHover
  );

  const { t } = useTranslation("common");

  return (
    <div
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      className={`carousel ${className ? className : ""}`}
    >
      <div className="flex items-center justify-center h-screen w-full relative">
        {data?.map((item: Item, i: number) => (
          <div
            key={i}
            className={`transition-all px-10 lg:px-20 py-4 lg:py-10 items-center justify-center duration-1000 bg-center bg-cover absolute w-full h-full inset-0 ${
              i == key ? "opacity-1 visible flex" : "hidden opacity-0 invisible"
            }`}
            style={{
              backgroundImage: `url("${item.img}")`,
              transitionDuration: `${speed}s`,
            }}
          >
            <div
              className={`transition-all relative z-10 text-white text-center ${
                i === key ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <h6 className="font-bold lg:w-10/12 mx-auto text-lg lg:text-3xl">
                {item.subtitle}
              </h6>
              <h3 className="font-bold lg:w-10/12 mx-auto text-2xl lg:text-5xl mt-4">
                {item.title}
              </h3>
              <p className="lg:w-10/12 mx-auto mt-4">{item.description}</p>
            </div>
            {overlay && (
              <div className="absolute inset-0 w-full h-full bg-overlay"></div>
            )}
          </div>
        ))}
        {arrows && (
          <>
            <button
              type="button"
              onClick={() => {
                next();
              }}
              className="transition-all absolute right-0 w-10 h-10 lg:w-16 lg:h-16 text-white lg:text-3xl bg-primary-blue hover:bg-primary-orange inline-flex justify-center items-center "
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="right"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
              </svg>
            </button>

            <button
              type="button"
              onClick={() => {
                prev();
              }}
              className="transition-all absolute left-0 w-10 h-10 lg:w-16 lg:h-16 text-white lg:text-3xl bg-primary-blue hover:bg-primary-orange inline-flex justify-center items-center "
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="left"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// arrow disabled, animations, button
