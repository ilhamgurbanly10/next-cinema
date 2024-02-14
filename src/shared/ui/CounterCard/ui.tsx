import React from "react";
import { Props } from "./type";
import useModel from "./model";
export const UI: React.FC<Props> = ({
  className = "",
  label,
  count,
  speed = 100,
  addedCount = 7,
  index,
}) => {
  const { quantity } = useModel(count, speed, addedCount, index);
  return (
    <div
      className={`counter-card flex bg-overlay-dark p-4 flex-col w-52 h-52 text-center items-center justify-center rounded-full ${className}`}
      id={`counterCard${index}`}
    >
      <p className="text-4xl text-white">{quantity}</p>
      <p className="text-primary-orange mt-4 text-sm">{label}</p>
    </div>
  );
};
