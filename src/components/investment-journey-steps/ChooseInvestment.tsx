import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import CustomButton from "../custom-button/CustomButton";

const ChooseInvestment = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;
  const [openDropdown, setOpenDropdown] = useState<Record<number, boolean>>({});

  const selectYourInvestment = [
    {
      id: 1,
      title: "Addosser Dollar Yield Portfolio",
      content: `A dollar-denominated investment portfolio designed to generate stable income
through investments in USD-denominated securities.`,
    },
    {
      id: 2,
      title: "Addosser Treasury Advantage Portfolio",
      content: `A portfolio focused on government treasury securities, offering steady returns
with minimal risk exposure.`,
    },
    {
      id: 3,
      title: "Addosser Prime Yield Portfolio",
      content: `A diversified portfolio that balances fixed income securities with select equity
investments for enhanced returns.`,
    },
    {
      id: 4,
      title: "Addosser Halal Prosperity Portfolio",
      content: `A Sharia-compliant portfolio designed for investors seeking returns that align
with Islamic finance principles.`,
    },
    {
      id: 5,
      title: "SME Debt Funds",
      content: `Specialized funds providing debt financing to vetted small and medium
enterprises with strong growth potential.`,
    },
    {
      id: 6,
      title: "Fixed Income Funds",
      content: `Diversified fixed income investment funds focusing on bonds, treasury bills, and
other debt instruments.`,
    },
    {
      id: 7,
      title: "Alternative Funds",
      content: `Innovative investment funds exploring non-traditional assets including
infrastructure, real estate, and private equity.`,
    },
  ];

  return (
    <div className="mt-5">
      <p className="text-[20px] font-bold text-custom-purple">
        Select Your Investment
      </p>

      <div className="flex flex-col gap-3 pt-3">
        {selectYourInvestment.map((item) => (
          <div
            className="border-1 border-custom-semi-white p-3 rounded-lg cursor-pointer"
            onClick={() =>
              setOpenDropdown((prev) => ({
                ...prev,
                [item.id]: !prev[item.id],
              }))
            }
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="investment"
                className="accent-custom-purple cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />{" "}
              <p className="flex-1 text-[14px] text-custom-purple font-bold">
                {item.title}
              </p>
              <BsChevronDown />
            </div>
            {openDropdown[item.id] && (
              <div className="flex items-center gap-3 pt-1">
                <div />
                <p className="flex-1 text-[14px] text-custom-grey">
                  {item.content}
                </p>
                <div />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-5">
        <div />
        <CustomButton
          label={"Continue"}
          width={"150px"}
          height={"35px"}
          bgColor={"#28098A"}
          fontSize={12}
          fontWeight={600}
          textColor={"white"}
          borderRadius={"5px"}
        />
      </div>
    </div>
  );
};

export default ChooseInvestment;
