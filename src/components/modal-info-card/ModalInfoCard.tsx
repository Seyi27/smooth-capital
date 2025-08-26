import type { ModalInfoCardProps } from "../../types/appTypes";

const ModalInfoCard = ({ isOpen, closeModal, item }: ModalInfoCardProps) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-modal-overlay bg-opacity-50 flex items-center justify-center z-20"
      onClick={closeModal} // close on outside click
    >
      {/* Modal Content */}
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="flex flex-col h-full sm:flex-row gap-3 text-[12px] font-medium h-[250px]">
          <img src={item.image} className="w-40 h-40 object-cover" />
          <div className="flex flex-col max-h-[30vh] sm:max-h-[40vh] overflow-y-auto">
            <p className="text-[16px] text-black font-bold">{item.name}</p>
            <p className="text-custom-grey">{item.position}</p>

            <p
            className="text-custom-grey flex-1 py-2"
              dangerouslySetInnerHTML={{
                __html: item.long_description,
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfoCard;
