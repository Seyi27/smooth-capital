import React from "react";
import type { ServicesPortfolioCardProps } from "../../../types/appTypes";

const ServicesPortfolioCard = ({ item }: ServicesPortfolioCardProps) => {
  return (
    <div className="bg-white h-full p-3 sm:h-85 rounded-lg">
      <img src={item.icon} />

      <p className="text-[14px] text-custom-purple font-medium pt-2">
        {item.titleText}
      </p>

      <p className="text-[14px] text-custom-grey leading-5 pt-2">
        {item.description}
      </p>

      <div className="bg-custom-white p-2 text-[12px] rounded-sm mt-3">
        <p className="font-medium Investment Focus">Investment Focus</p>
        <p className="text-custom-dark">{item.investment_focus}</p>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <div className="flex-1 bg-custom-white p-2 text-[12px] rounded-sm ">
          <p className="font-medium Investment Focus">Minimum Investment</p>
          <p className="text-custom-dark">{item.minimum_investment}</p>
        </div>
        <div className="flex-1 bg-custom-white p-2 text-[12px] rounded-sm ">
          <p className="font-medium Investment Focus">Holding Period</p>
          <p className="text-custom-dark">{item.holding_period}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <div className="flex-1 bg-custom-white p-2 text-[12px] rounded-sm ">
          <p className="font-medium Investment Focus">Target Returns</p>
          <p className="text-custom-dark">{item.target_returns}</p>
        </div>
        <div className="flex-1 bg-custom-white p-2 text-[12px] rounded-sm ">
          <p className="font-medium Investment Focus">Ideal For</p>
          <p className="text-custom-dark">{item.ideal_for}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPortfolioCard;
