import React, { useState } from "react";
import ChooseInvestment from "./ChooseInvestment";
import AmountAndDuration from "./AmountAndDuration";
import Confirmation from "./Confirmation";

const InvestmentJourneySteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, label: "1. Choose Investment" },
    { id: 2, label: "2. Amount & Duration" },
    { id: 3, label: "3. Confirmation" },
  ];

  return (
    <div className="w-full sm:w-[45vw] rounded-lg bg-white shadow-md my-5 p-5">
      {/* Navbar */}
      <div className="relative px-4 py-2 bg-white border-b border-custom-grey">
        <div className="flex items-center justify-between z-10">
          {steps.map((step) => (
            <p
              key={step.id}
              className={`text-[14px] text-${
                activeStep === step.id ? "custom-purple" : "custom-grey"
              } font-${
                activeStep === step.id ? "semibold" : "normal"
              } cursor-pointer`}
              onClick={() => setActiveStep(step.id)}
            >
              {step.label}
            </p>
          ))}
        </div>
        <div
          className="absolute bottom-0 h-[2px] bg-custom-purple transition-all duration-300"
          style={{
            width: `${100 / steps.length}%`,
            left: `${(activeStep - 1) * (100 / steps.length)}%`,
          }}
        />
      </div>

      <ChooseInvestment isActive={activeStep === 1} />

      <AmountAndDuration isActive={activeStep === 2} />

      <Confirmation isActive={activeStep === 3} />
    </div>
  );
};

export default InvestmentJourneySteps;
