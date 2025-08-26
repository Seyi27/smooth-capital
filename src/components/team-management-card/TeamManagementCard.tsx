import { BsChevronRight } from "react-icons/bs";
import ModalInfoCard from "../modal-info-card/ModalInfoCard";
import { useState } from "react";
import type { TeamManagementCardProps } from "../../types/appTypes";

const TeamManagementCard = ({ item }: TeamManagementCardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full sm:flex-row gap-3 text-[12px] font-medium h-[250px]">
        <img src={item.image} />
        <div className="flex flex-col">
          <p className="text-[16px] text-black font-bold">{item.name}</p>
          <p className="text-custom-grey">{item.position}</p>

          <span className="text-custom-grey flex-1 py-2">
            {item.short_description}
          </span>

          <p
            className="flex items-center gap-2 text-custom-blue text-[12px] font-medium cursor-pointer"
            onClick={() => setIsOpenModal(true)}
          >
            Learn more <BsChevronRight size={12} />
          </p>
        </div>
      </div>

      <ModalInfoCard
        isOpen={isOpenModal}
        closeModal={() => setIsOpenModal(false)}
        item={item}
      />
    </>
  );
};

export default TeamManagementCard;
