import smooth_capital_logo from "../../assets/smooth-capital-logo.svg";
import {
  BsEnvelope,
  BsFacebook,
  BsPhone,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import AppWrapper from "../app-wrapper/AppWrapper";
import footerBg from "../../assets/footer-bg-image.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    { name: "Home", routes: "/" },
    { name: "About Us", routes: "/about-us/company-profile" },
    { name: "Services", routes: "/services/funds-portfolio-management" },
    {
      name: "Funds & Portfolio Management",
      routes: "/services/funds-portfolio-management",
    },
    {
      name: "Debt Capital Advisory",
      routes: "/services/debit-capital-advisory",
    },
    { name: "Bancassurance", routes: "/services/Bancassurance" },
    { name: "Business Incubation", routes: "/services/business-incubation" },
    { name: " Wealth Advisory", routes: "/services/wealth-advisory" },
  ];

  return (
    <>
      {/* For larger screen */}
      <div
        className="text-white py-20 bg-cover bg-center hidden sm:block"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <AppWrapper>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <img src={smooth_capital_logo} className="w-30" />
              <p className="w-[300px] text-[12px] italic">
                Providing expert investment solutions to help you grow,
                preserve, and transfer your wealth with confidence.
              </p>
              <div className="flex items-center gap-2">
                <BsFacebook className="cursor-pointer" />
                <BsTwitterX className="cursor-pointer" />
                <BsYoutube className="cursor-pointer" />
              </div>
            </div>

            <div className="flex flex-col gap-2 text-[14px] text-custom-semi-white">
              {/* text style for the whole div */}
              <p className="font-bold">Quick Links</p>

              {footerLinks.slice(0, 3).map((item) => (
                <p
                  className="cursor-pointer"
                  onClick={() => navigate(item.routes)}
                >
                  {item.name}
                </p>
              ))}
              {/* <p className="cursor-pointer">FAQS</p> */}
            </div>

            <div className="flex flex-col gap-2 text-[14px] text-custom-semi-white">
              {" "}
              {/* text style for the whole div */}
              <p className="font-bold">Our Services</p>
              {footerLinks.slice(3).map((item) => (
                <p
                  className="cursor-pointer"
                  onClick={() => navigate(item.routes)}
                >
                  {item.name}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-2 text-[14px] text-custom-semi-white">
              {/* text style for the whole div */}
              <p className="font-bold">OFFICE</p>
              <p className="w-[300px] ">
                25 Ribadu Road, Off Awolowo Road, Ikoyi, Lagos, Nigeria
              </p>
              <p className="w-[300px] ">Mon-Fri: 9:00AM - 5:00PM</p>
              <div className="flex items-center gap-2 cursor-pointer">
                <BsEnvelope />
                <p>info@smoothcapital.ng</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <BsPhone />
                <p>+234 806 771 0016</p>
              </div>
            </div>
          </div>

          <p className="text-[14px] text-custom-semi-white text-center pt-10">
            © 2025 Smooth Capital Limited. All rights reserved.
          </p>
        </AppWrapper>
      </div>

      {/* For mobile view */}
      <div
        className="text-white py-20 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <AppWrapper>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-[14px] text-custom-semi-white">
              {" "}
              {/* text style for the whole div */}
              <p className="font-bold">Quick Links</p>
              {footerLinks.slice(0, 3).map((item) => (
                <p
                  className="cursor-pointer"
                  onClick={() => navigate(item.routes)}
                >
                  {item.name}
                </p>
              ))}
              {/* <p className="cursor-pointer">FAQS</p> */}
            </div>

            <div className="flex flex-col gap-2 text-[14px] text-custom-semi-white">
              {/* text style for the whole div */}
              <p className="font-bold">Our Services</p>
              {footerLinks.slice(3).map((item) => (
                <p
                  className="cursor-pointer"
                  onClick={() => navigate(item.routes)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 text-[14px] text-custom-semi-white mt-10">
            {" "}
            {/* text style for the whole div */}
            <p className="font-bold">OFFICE</p>
            <p className="w-[300px] ">
              25 Ribadu Road, Off Awolowo Road, Ikoyi, Lagos, Nigeria
            </p>
            <p className="w-[300px] ">Mon-Fri: 9:00AM - 5:00PM</p>
            <div className="flex items-center gap-2 cursor-pointer">
              <BsEnvelope />
              <p>info@smoothcapital.ng</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <BsPhone />
              <p>+234 806 771 0016</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <img src={smooth_capital_logo} className="w-30" />
            <p className="w-[300px] text-[12px] italic">
              Providing expert investment solutions to help you grow, preserve,
              and transfer your wealth with confidence.
            </p>
            <div className="flex items-center gap-2">
              <BsFacebook className="cursor-pointer" />
              <BsTwitterX className="cursor-pointer" />
              <BsYoutube className="cursor-pointer" />
            </div>
          </div>

          <p className="text-[14px] text-custom-semi-white text-center pt-10">
            © 2025 Smooth Capital Limited. All rights reserved.
          </p>
        </AppWrapper>
      </div>
    </>
  );
};

export default Footer;
