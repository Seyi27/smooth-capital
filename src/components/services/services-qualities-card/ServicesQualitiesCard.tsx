import React from "react";
import type { ServicesQualitiesCardProps } from "../../../types/appTypes";

const ServicesQualitiesCard = ({ item }: ServicesQualitiesCardProps) => {
  return (
    <div
      className={`${item.bgColor} flex flex-col p-5 sm:flex-row sm:items-center sm:p-5 gap-5 rounded-lg`}
    >
      <img src={item.image} className="w-40 h-30" />

      <div className={`${item.bgColor === "bg-black" && "text-white"} `}>
        <p className={`text-[16px] font-bold`}>{item.titleText}</p>
        <p className={`text-[14px]`}>{item.bodyText}</p>
      </div>
    </div>
  );
};

export default ServicesQualitiesCard;
