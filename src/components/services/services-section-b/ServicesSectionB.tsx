import type { ServicesSectionBProps } from "../../../types/appTypes";

const ServicesSectionB = ({
  headerText,
  topText,
  image1,
  image2,
  otherParagraphs,
}: ServicesSectionBProps) => {
  return (
    <div className="w-full h-full flex flex-col sm:w-[70vw] sm:h-[50vh] sm:flex-row justify-self-center gap-6">
      <img src={image1} className="" />

      <div className="w-full h-full">
        <p className="text-[50px] leading-15 font-medium mb-2">{headerText}</p>
        <span className="text-[16px] text-custom-grey">{topText}</span>

        <div className="flex flex-col sm:w-full sm:flex-row pt-5 gap-5">
          <div>
            {otherParagraphs.map((item) => (
              <>
                <p className="text-[16px] text-custom-grey pb-2">{item}</p>
              </>
            ))}
          </div>

          <img src={image2} className="w-100 h-full sm:h-45" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionB;
