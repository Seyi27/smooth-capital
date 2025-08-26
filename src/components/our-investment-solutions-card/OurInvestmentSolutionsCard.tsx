import React from "react";
import type { OurInvestmentSolutionsCardProps } from "../../types/appTypes";
import { useNavigate } from "react-router-dom";

const OurInvestmentSolutionsCard = ({
  item,
}: OurInvestmentSolutionsCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white flex flex-col rounded-lg cursor-pointer group overflow-hidden"
      onClick={() => navigate(item.routeTo)}
    >
      <div className="flex items-start gap-4 px-2 py-3">
        <img src={item.icon} className="w-10 h-10" />
        <img
          src={item.image}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105 w-[300px] h-[200px] object-cover"
        />
      </div>

      <div className="px-3 flex-1">
        <p className="font-medium">{item.title}</p>
        <p className="text-[14px] text-custom-dark py-2">{item.description}</p>
      </div>

      <p className="p-3 text-[14px] text-custom-grey font-bold">
        Learn more &gt;
      </p>
    </div>
  );
};

export default OurInvestmentSolutionsCard;
