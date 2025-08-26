import { useNavigate } from "react-router-dom";
import type { ScheduleAConsultationProp } from "../../types/appTypes";
import CustomButton from "../custom-button/CustomButton";

const ScheduleAConsultation = ({
  image,
  title,
  body,
  buttonName,
}: ScheduleAConsultationProp) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center">
      <div
        className="w-full sm:w-200 h-80 p-10 bg-cover bg-center flex flex-col items-center justify-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="text-[30px] text-center text-white font-bold">{title}</p>
        <p className="text-[12px] text-white text-center pb-3">{body}</p>
        <CustomButton
          label={buttonName}
          width={"170px"}
          height={"40px"}
          bgColor={"#28098A"}
          fontSize={12}
          fontWeight={600}
          textColor={"white"}
          borderRadius={"20px"}
          onClick={()=> navigate('/get-in-touch')}
        />
      </div>
    </div>
  );
};

export default ScheduleAConsultation;
