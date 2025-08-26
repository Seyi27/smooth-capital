import React, { useState } from "react";
import AppWrapper from "../../../components/app-wrapper/AppWrapper";
import bgLinePatterns from "../../../assets/line-patterns.png";
import careers_img from "../../../assets/careers.svg";
import careers_ic from "../../../assets/career-ic.svg";
import current_openings from "../../../assets/current-openings.svg";
import CustomButton from "../../../components/custom-button/CustomButton";

const Careers = () => {
  const [currentOpenings, setCurrentOpenings] = useState({
    fullName: "",
    email: "",
    phone: "",
    cv: null,
    coverLetter: "",
  });

  const whyJoinSmothCapital = [
    {
      title: "Professional Development",
      description:
        "Plan, collaborate, and publishing your content that drivees meaningful engagement and growth for your barnd",
    },
    {
      title: "Work-Life Balance",
      description:
        "We promote a healthy balance between work and personal life with flexible working arrangements and generous leave policies.",
    },
    {
      title: "Comprehensive Benefits",
      description:
        "Enjoy competitive compensation, health insurance, pension scheme, and other benefits designed for your wellbeing.",
    },
    {
      title: "Dynamic Environment",
      description:
        "Join a diverse and collaborative team where your ideas are valued and innovation is encouraged.",
    },
  ];
  
  return (
    <div>
      {/* Careers */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
            <div>
              <span className="text-[14px] font-bold p-2 border-1 border-custom-grey rounded-[30px]">
                Careers
              </span>
              <p className="text-[60px] py-5 font-bold">Join Our Teams</p>

              <p className="text-custom-grey text-[14px] leading-5">
                Build your career at Smooth Capital and help shape the future of
                investment management in Africa.
              </p>
            </div>

            <img src={careers_img} />
          </div>
        </AppWrapper>
      </div>

      {/* Why join smooth capital */}
      <AppWrapper wrapperbgcolor="bg-custom-light-purple" className="py-15">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 items-center">
          <div>
            <div className="font-bold">
              <p className="text-[50px]">Why join</p>
              <p className="text-[40px] text-custom-blue">Smooth Capital?</p>
            </div>

            <p className="text-[12px] text-custom-grey font-medium">
              At Smooth Capital, we cultivate a culture of excellence,
              innovation, and continuous learning. Here's what you can expect
              when you join our team:
            </p>

            <br></br>

            <p className="text-[12px] text-custom-grey font-medium">
              We're always looking for talented individuals who share our values
              and passion for excellence. Even if you don't see a position that
              matches your skills, we encourage you to submit your resume for
              future opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-10">
            {whyJoinSmothCapital.map((item, idx) => (
              <div key={idx} className="flex items-center ">
                <img src={careers_ic} />

                <div>
                  <p className="text-[24px] pt-3 font-bold">{item.title}</p>
                  <span className="text-[12px] text-custom-light-grey">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppWrapper>

      {/* Current Openings */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 items-center">
          <div>
            <p className="text-[45px] font-bold">Current Openings</p>

            <p className="text-[12px] text-custom-grey font-medium pb-5">
              We don't have any open positions at the moment, but we're always
              on the lookout for exceptional talent. Please feel free to submit
              your resume for future consideration.
            </p>

            <img src={current_openings}/>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <div>
              <label className="text-sm">Full name*</label>
              <input
                type="text"
                value={currentOpenings.fullName}
                className="w-full h-10 bg-white border-0 outline-0 rounded-sm px-2"
              />
            </div>

            <div>
              <label className="text-sm">Email Address*</label>
              <input
                type="text"
                value={currentOpenings.email}
                className="w-full h-10 bg-white border-0 outline-0 rounded-sm px-2"
              />
            </div>

            <div>
              <label className="text-sm">Phone Number</label>
              <input
                type="text"
                value={currentOpenings.email}
                className="w-full h-10 bg-white border-0 outline-0 rounded-sm px-2"
              />
            </div>

            <div>
              <label className="text-sm">Upload CV</label>
              <input
                type="text"
                value={currentOpenings.email}
                className="w-full h-10 bg-white border-0 outline-0 rounded-sm px-2"
              />
            </div>

            <div>
              <label className="text-sm">Cover Letter</label>
              <textarea
                value={currentOpenings.email}
                className="w-full h-30 bg-white border-0 outline-0 rounded-sm px-2"
              />
            </div>

            <CustomButton
              label={"Submit"}
              width={"100%"}
              height={"40px"}
              bgColor={"#28098A"}
              fontSize={12}
              fontWeight={600}
              textColor={"white"}
              borderRadius={"10px"}
              // onClick={() => navigate("/")}
            />
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Careers;
