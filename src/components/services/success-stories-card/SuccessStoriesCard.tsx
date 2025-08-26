import React from "react";
import type { SuccessStoriesCardProps } from "../../../types/appTypes";

const SuccessStoriesCard = ({ item }: SuccessStoriesCardProps) => {
  return (
    <div>
      <p className="text-custom-purple text-[16px] font-medium">{item.title}</p>

      <span className="text-custom-grey text-[15px]">{item.description}</span>

      <p className="text-[14px] pt-3 pb-2">The Challenge</p>
      <p className="text-custom-grey text-[14px]">{item.challenge}</p>

      <p className="text-[14px] pt-3 pb-2">Our Solution</p>
      <p className="text-custom-grey text-[14px]">{item.solution}</p>

      <p className="text-[14px] pt-3 pb-2">The Result</p>
      <p className="text-custom-grey text-[14px]">{item.result}</p>
    </div>
  );
};

export default SuccessStoriesCard;
