import { BsChevronRight } from "react-icons/bs";
import ModalInfoCard from "../modal-info-card/ModalInfoCard";
import { useState } from "react";
import type { TeamManagementCardProps } from "../../types/appTypes";

const TeamManagementCard = ({ item }: TeamManagementCardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div
        className="flex flex-col h-full sm:flex-row gap-3 text-[12px] font-medium h-[250px] cursor-pointer"
        onClick={() => setIsOpenModal(true)}
      >
        <img src={item.image} className="h-70" />
        <div className="flex flex-col">
          <p className="text-[20px] text-black font-bold">{item.name}</p>
          <p className="text-custom-grey text-[15px]">{item.position}</p>

          <span className="text-custom-grey py-2 text-[15px] mb-5">
            {item.short_description}
          </span>

          <p className="flex items-center gap-2 text-custom-blue text-[15px] font-medium">
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
