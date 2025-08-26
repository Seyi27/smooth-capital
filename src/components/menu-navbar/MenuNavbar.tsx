import { useState } from "react";
import { BsChevronDown, BsX } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import smooth_capital_logo from "../../assets/smooth-capital-logo.svg";
import CustomButton from "../custom-button/CustomButton";
import type { MenuNavbarProps } from "../../types/appTypes";

const MenuNavbar = ({ isOpen, closeModal }: MenuNavbarProps) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleAddosserEcosystem = () => {
    navigate("/addosser-ecosystem");
    closeModal();
  };

  const handleLogo = () => {
    navigate("/");
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
      {/* Header with logo + close button */}
      <div className="flex items-center justify-between mb-6">
        <img
          src={smooth_capital_logo}
          onClick={handleLogo}
          className="cursor-pointer"
        />
        <BsX size={28} className="cursor-pointer" onClick={closeModal} />
      </div>

      {/* Nav links */}
      <div className="flex flex-col gap-4">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex justify-between items-center py-2 border-b border-custom-semi-white ${
              isActive ? "text-custom-purple font-bold" : "text-black"
            }`
          }
          onClick={closeModal}
        >
          Home
        </NavLink>

        {/* About Us accordion */}
        <div>
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "about" ? null : "about")
            }
            className={`flex justify-between items-center w-full py-2 border-b border-custom-semi-white ${
              openDropdown === "about"
                ? "text-custom-purple font-bold"
                : "text-black font-medium"
            }`}
          >
            About Us
            <BsChevronDown
              size={16}
              className={`transform transition-transform ${
                openDropdown === "about" ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openDropdown === "about" ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="flex flex-col pl-2 text-sm">
              <NavLink
                to="/about-us/company-profile"
                className="py-2 hover:text-custom-purple"
                onClick={closeModal}
              >
                Company Profile
              </NavLink>
              <NavLink
                to="/about-us/our-teams"
                className="py-2 hover:text-custom-purple"
                onClick={closeModal}
              >
                Our Teams
              </NavLink>
              <NavLink
                to="/about-us/careers"
                className="py-2 hover:text-custom-purple"
                onClick={closeModal}
              >
                Careers
              </NavLink>
            </div>
          </div>
        </div>

        {/* Services accordion */}
        <div>
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "services" ? null : "services")
            }
            className={`flex justify-between items-center w-full py-2 border-b border-custom-semi-white ${
              openDropdown === "services"
                ? "text-custom-purple font-bold"
                : "text-black font-medium"
            }`}
          >
            Services
            <BsChevronDown
              size={16}
              className={`transform transition-transform ${
                openDropdown === "services" ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openDropdown === "services" ? "max-h-60" : "max-h-0"
            }`}
          >
            <div className="flex flex-col pl-2 text-sm">
              <NavLink
                to="/services/funds-portfolio-management"
                className="py-2 hover:text-custom-purple"
                onClick={closeModal}
              >
                Funds & Portfolio Management
              </NavLink>
              <NavLink
                to="/services/business-incubation"
                className="py-2 hover:text-custom-purple"
                onClick={closeModal}
              >
                Business Incubation
              </NavLink>
              <NavLink
                to="/services/debit-capital-advisory"
                className="py-2 hover:text-custom-purple"
                onClick={closeModal}
              >
                Debit Capital Advisory
              </NavLink>
              <NavLink
                to="/services/bancassurance"
                className="py-2 hover:text-custom-purple"
                onClick={closeModal}
              >
                Bancassurance
              </NavLink>
              <NavLink
                to="/services/wealth-advisory"
                className="py-2 hover:text-custom-purple"
                onClick={closeModal}
              >
                Wealth Advisory
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Button at bottom */}
      <div className="mt-8">
        <CustomButton
          label="Addosser Ecosystem"
          width="100%"
          height="50px"
          bgColor="#28098A"
          fontSize={14}
          fontWeight={600}
          textColor="white"
          borderRadius="10px"
          onClick={handleAddosserEcosystem}
        />
      </div>
    </div>
  );
};

export default MenuNavbar;
