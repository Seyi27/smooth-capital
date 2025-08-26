import React from "react";
import CustomButton from "../custom-button/CustomButton";

const AmountAndDuration = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;

  return (
    <div className="mt-5">
      <p className="text-[20px] font-bold text-custom-purple">
        Investment Details
      </p>

      <div>
        <label>Investment Amount</label>
        <div className="border-1 border-custom-grey">
        <input
        
        />
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <CustomButton
          label={"Back"}
          width={"150px"}
          height={"35px"}
          bgColor={"white"}
          fontSize={12}
          fontWeight={600}
          textColor={"black"}
          borderRadius={"5px"}
          borderColor="#E4E4E7"
          borderWidth="1px"
        />

        <CustomButton
          label={"Continue"}
          width={"150px"}
          height={"35px"}
          bgColor={"#40136c"}
          fontSize={12}
          fontWeight={600}
          textColor={"white"}
          borderRadius={"5px"}
        />
      </div>
    </div>
  );
};

export default AmountAndDuration;
