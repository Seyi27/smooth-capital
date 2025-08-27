import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import getintouch_ic1 from "../../assets/getintouch-ic1.svg";
import getintouch_ic2 from "../../assets/getintouch-ic2.svg";
import getintouch_ic3 from "../../assets/getintouch-ic3.svg";
import getintouch1 from "../../assets/getintouch1.svg";
import getintouch2 from "../../assets/getintouch2.svg";
import getintouch3 from "../../assets/getintouch3.svg";
import getintouch4 from "../../assets/getintouch4.svg";
import getintouch5 from "../../assets/getintouch5.svg";
import getintouch6 from "../../assets/getintouch6.svg";
import bgLinePatterns from "../../assets/line-patterns.png";
import AppWrapper from "../app-wrapper/AppWrapper";
import CarouselComponent from "../carousel-component/CarouselComponent";
import CustomButton from "../custom-button/CustomButton";

const GetInTouch = () => {
  const slideImages = [
    {
      image: getintouch1,
    },
    {
      image: getintouch2,
    },
    {
      image: getintouch3,
    },
  ];

  return (
    <div>
      {/* Get in Touch */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <div className="flex flex-col items-center justify-between gap-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-5">
              <div className="flex-1">
                <span className="text-[80px] text-white bg-custom-blue pb-3 ">
                  Get in Touch
                </span>
              </div>

              <p className="flex-1 text-[20px] text-custom-grey">
                Have questions about our services? Ready to start your
                investment journey? Contact our team for personalized
                assistance.
              </p>
            </div>
            <div className="mt-10">
              <CarouselComponent slideImages={slideImages} />
            </div>{" "}
          </div>
        </AppWrapper>
      </div>

      <AppWrapper className="pb-10">
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col sm:w-[50vw] sm:flex-row sm:items-center justify-between">
            <div className="flex-1">
              <p className="text-[35px] font-bold">📞 Call us</p>
              <p className="text-[14px] text-custom-grey font-medium py-2">
                Have a question? Our support team is just a tap away. Response
                Time: Under 10 minutes (for real 😎)
              </p>
              <p className="text-[24px] text-custom-blue font-bold">
                +234 806 771 0016
              </p>
            </div>

            <div className="flex flex-1 pt-2 sm:justify-end sm:pt-0">
              <CustomButton
                label="Chat with us"
                width="120px"
                height="35px"
                bgColor="#28098A"
                fontSize={14}
                fontWeight={600}
                textColor="white"
                borderRadius="5px"
              />
            </div>
          </div>

          <div className="w-full flex flex-col sm:w-[50vw] sm:flex-row sm:items-center justify-between pt-10">
            <div className="flex-1">
              <img src={getintouch4} className="w-60 h-60" />
            </div>

            <div className="pt-5 sm:pt-0">
              <div className="flex flex-col">
                <img src={getintouch_ic1} className="w-10 h-10" />
                <p className="text-[25px] font-bold py-2">📧 Drop Us a Line</p>
                <p className="text-[12px] text-gray-500 font-medium">
                  Prefer email? We got you.
                </p>
                <p className="text-[12px] text-gray-500 font-medium">
                  info@smoothcapital.ng
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col-reverse sm:w-[50vw] sm:flex-row sm:items-center justify-between pt-10">
            <div className="flex-1 pt-5 sm:pt-0">
              <div className="flex flex-col">
                <img src={getintouch_ic2} className="w-10 h-10" />
                <p className="text-[25px] font-bold py-2">📱 Follow the Vibe</p>
                <p className="text-[12px] text-gray-500 font-medium">
                  Stay in the loop, get tips, and<br></br> connect with us on
                  socials:
                </p>
                <div className="flex items-center gap-3 pt-3">
                  <BsFacebook className="cursor-pointer text-custom-blue" />
                  <BsTwitterX className="cursor-pointer text-custom-blue" />
                  <BsYoutube className="cursor-pointer text-custom-blue" />
                  <BsInstagram className="cursor-pointer text-custom-blue" />
                </div>
              </div>
            </div>

            <div>
              <img src={getintouch5} className="w-60 h-60" />
            </div>
          </div>

          <div className="w-full flex flex-col sm:w-[50vw] sm:flex-row sm:items-center justify-between pt-10">
            <div className="flex-1">
              <img src={getintouch6} className="w-60 h-60" />
            </div>

            <div className="pt-5 sm:pt-0">
              <div className="flex flex-col">
                <img src={getintouch_ic3} className="w-10 h-10" />
                <p className="text-[25px] font-bold py-2">🏢 Visit Us</p>
                <p className="text-[12px] text-gray-500 font-medium">
                  Need to stop by? We’re digital-first,<br></br> but if you
                  really need us:
                </p>
                <p className="text-[12px] text-gray-500 font-medium">
                  Head Office: <br></br>27 Ribadu road, off Awolowo road,{" "}
                  <br></br>Ikoyi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default GetInTouch;
