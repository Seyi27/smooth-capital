import React from "react";
import type { ServicesProcessCardProps } from "../../../types/appTypes";

const ServicesProcessCard = ({ item, color }: ServicesProcessCardProps) => {
  return (
    <div className="bg-white rounde-lg p-5">
      <div className="w-[40vw] sm:w-[10vw] h-20 bg-custom-semi-white rounded-[100px]">
        <div
          className={`w-[20vw] sm:w-[6vw] h-20 ${
            color === "black" ? "bg-custom-blue" : "bg-black"
          } rounded-[100px] flex items-center justify-center text-[20px] text-white`}
        >
          {item.number}
        </div>
      </div>

      <p
        className={`${
          color === "black" ? "text-custom-blue" : "text-black"
        } pt-4 font-medium`}
      >
        {item.title}
      </p>
      <p className="text-custom-grey text-[14px] pt-1">{item.description}</p>
    </div>
  );
};

export default ServicesProcessCard;
