import { useState } from "react";
import InfoCard from "../info-card/InfoCard";
import type { BoardOfDirectorsCardProps } from "../../types/appTypes";
import ModalInfoCard from "../modal-info-card/ModalInfoCard";

const BoardOfDirectorsCard = ({ item, idx }: BoardOfDirectorsCardProps) => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div
        key={idx}
        className="relative group"
        onMouseEnter={() => setHoveredMember(item.name)}
        onMouseLeave={() => setHoveredMember(null)}
      >
        {/* Member Card */}
        <div>
          <img src={item.image} alt={item.name} className="h-80 rounded-lg" />
          <p className="text-[14px] pt-3 font-medium">{item.name}</p>
          <span className="text-[13px] text-custom-grey">{item.position}</span>
        </div>

        {/* InfoCard on hover (relative to this card only) */}
        {hoveredMember === item.name && (
          <div className="absolute bottom-20 flex justify-center mt-3 z-5">
            <InfoCard item={item} setIsOpenModal={setIsOpenModal}/>
          </div>
        )}
      </div>

      <ModalInfoCard
        isOpen={isOpenModal}
        closeModal={() => setIsOpenModal(false)}
        item={item}
      />
    </>
  );
};

export default BoardOfDirectorsCard;
