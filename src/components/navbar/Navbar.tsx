import { BsChevronDown, BsList } from "react-icons/bs";
import smooth_capital_logo from "../../assets/smooth-capital-logo.svg";
import CustomButton from "../custom-button/CustomButton";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AppWrapper from "../app-wrapper/AppWrapper";
import MenuNavbar from "../menu-navbar/MenuNavbar";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAboutUsActive = location.pathname.startsWith("/about-us");
  const isServicesActive = location.pathname.startsWith("/services");

  const [isOpenMenuNavbar, setIsOpenMenuNavbar] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-custom-white py-3 z-10">
      <AppWrapper className="flex items-center justify-between">
        <img
          src={smooth_capital_logo}
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />

        <div className="hidden sm:flex items-center gap-12">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `text-black cursor-pointer text-[14px]
              ${
                isActive
                  ? "text-custom-purple font-bold" // active style
                  : "text-black" // inactive style
              }`
            }
          >
            Home
          </NavLink>

          {/* About Us with dropdown */}
          <div className="relative group">
            <div
              className={`flex items-center gap-1 cursor-pointer text-[14px]
              ${
                isAboutUsActive
                  ? "text-custom-purple font-bold" // active style
                  : "text-black" // inactive style
              }`}
            >
              About Us
              <BsChevronDown
                size={15}
                className={`transform transition-transform duration-300 
                  ${isAboutUsActive ? "text-custom-purple" : "text-black"} 
                  group-hover:rotate-180`}
              />
            </div>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-40 rounded-lg bg-white shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 ease-out">
              <NavLink
                to="/about-us/company-profile"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Company Profile
              </NavLink>
              <NavLink
                to="/about-us/our-teams"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Our Teams
              </NavLink>
              <NavLink
                to="/about-us/careers"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Careers
              </NavLink>
            </div>
          </div>

          {/* Services with dropdown */}
          <div className="relative group">
            <div
              className={`flex items-center gap-1 cursor-pointer text-[14px]
              ${
                isServicesActive
                  ? "text-custom-purple font-bold" // active style
                  : "text-black" // inactive style
              }`}
            >
              Services
              <BsChevronDown
                size={15}
                className={`transform transition-transform duration-300 
                  ${isServicesActive ? "text-custom-purple" : "text-black"} 
                  group-hover:rotate-180`}
              />
            </div>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-60 rounded-lg bg-white shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 ease-out">
              <NavLink
                to="/services/funds-portfolio-management"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Funds & Portfolio Management
              </NavLink>
              <NavLink
                to="/services/business-incubation"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Business Incubation
              </NavLink>
              <NavLink
                to="/services/debit-capital-advisory"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Debit Capital Advisory
              </NavLink>
              <NavLink
                to="/services/bancassurance"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Bancassurance
              </NavLink>
              <NavLink
                to="/services/wealth-advisory"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Wealth Advisory
              </NavLink>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <CustomButton
            label={"Addosser Ecosystem"}
            width={"150px"}
            height={"40px"}
            bgColor={"#28098A"}
            fontSize={12}
            fontWeight={600}
            textColor={"white"}
            borderRadius={"10px"}
            onClick={() => navigate("/addosser-ecosystem")}
          />
        </div>

        <BsList
          color="black"
          size={30}
          className="sm:hidden"
          onClick={() => setIsOpenMenuNavbar((prev) => !prev)}
        />

        {/* for mobile phones */}
        <MenuNavbar
          isOpen={isOpenMenuNavbar}
          closeModal={() => setIsOpenMenuNavbar(false)}
        />
      </AppWrapper>
    </div>
  );
};

export default Navbar;
