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
      className="w-full sm:w-[80vw] flex flex-col justify-self-center"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-7">
        <div className="flex-1 text-[55px] font-medium">
          <p className="">{topText}</p>
          <span className="text-white bg-custom-blue pb-3 rounded-lg">{bottomText}</span>
        </div>

        <p className="flex-1 text-[20px] text-custom-grey">{sideText}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-5">
        <img src={image1} className="flex-1 w-100 " />
        <img src={image2} className="flex-1 w-100"/>
      </div>
    </div>
  );
};

export default ServicesSectionA;
