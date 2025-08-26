import { BsCheck2Circle } from "react-icons/bs";
import type { OurServicesCardProps } from "../../../types/appTypes";

const OurServicesCard = ({ item, screen }: OurServicesCardProps) => {
  let listHeader;

  if (screen === "debt_capital") {
    listHeader = <p>Our Approach</p>;
  } else if (screen === "bancassurance") {
    listHeader = <p>Key Benefits</p>;
  } else {
    listHeader = <p>What We Offer</p>;
  }

  return (
    <div className="bg-white p-3 rounded-lg">
      <img src={item.icon} />

      <p className="text-[14px] text-custom-blue font-bold pt-2">
        {item.titleText}
      </p>

      <p className="text-[14px] text-custom-grey leading-5 pt-2">
        {item.description}
      </p>

      <div className="pt-5 text-[14px] text-custom-dark">
        {listHeader}
        {item.offer.map((item) => (
          <div className="flex items-center gap-2">
            <BsCheck2Circle className="text-custom-blue" />

            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesCard;
