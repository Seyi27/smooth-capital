import React from "react";
import type { ServicesSectionAProps } from "../../../types/appTypes";

const ServicesSectionA = ({
  topText,
  bottomText,
  sideText,
  image1,
  image2,
}: ServicesSectionAProps) => {
  return (
    <div
      className="w-full sm:w-[70vw] flex flex-col justify-self-center"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-5">
        <div className="flex-1 text-[40px] font-medium">
          <p className="">{topText}</p>
          <span className="text-white bg-custom-blue pb-3 ">{bottomText}</span>
        </div>

        <p className="flex-1 text-[14px] text-custom-grey">{sideText}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-5 gap-5">
        <img src={image1} className="flex-1 w-100 " />
        <img src={image2} className="flex-1 w-100"/>
      </div>
    </div>
  );
};

export default ServicesSectionA;
