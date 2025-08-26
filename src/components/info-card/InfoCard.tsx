import type { InfoCardProps } from "../../types/appTypes";

const InfoCard = ({ item, setIsOpenModal }: InfoCardProps) => {
  return (
    <div className="relative p-5 bg-custom-blue text-white rounded-[30px] shadow-lg rotate -rotate-10">
      <p className="text-[14px] leading-relaxed">{item.short_description}</p>

      {/* Button */}
      <button
        className="text-[14px] mt-5 inline-block rounded-full bg-[#00E5FF] text-custom-blue font-medium px-3 py-1 text-sm hover:opacity-90 transition cursor-pointer"
        onClick={() => setIsOpenModal(true)}
      >
        Read more &gt;
      </button>

      {/* Small bottom "arrow" like in your screenshot */}
      <div className="absolute bottom-[-10px] left-10 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-[#2A0D8A]" />
    </div>
  );
};

export default InfoCard;
