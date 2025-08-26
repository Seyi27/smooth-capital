import React, { useState } from "react";
import ourTeamImg from "../../../assets/our-team-img.svg";
import AppWrapper from "../../../components/app-wrapper/AppWrapper";
import bgLinePatterns from "../../../assets/line-patterns.png";
import ayodeji_sobolu from "../../../assets/ayodeji-sobolu.svg";
import omolara_adebiyi from "../../../assets/omolara-adebiyi.svg";
import williams from "../../../assets/williams.svg";
import person_3 from "../../../assets/person-3.svg";
import person_4 from "../../../assets/person-4.svg";
import CustomButton from "../../../components/custom-button/CustomButton";
import joinOurTeam from "../../../assets/join-our-team.jpg";
import { BsChevronRight } from "react-icons/bs";
import mgmt_person_1 from "../../../assets/mgmt-person-1.svg";
import mgmt_person_2 from "../../../assets/mgmt-person-2.svg";
import mgmt_person_3 from "../../../assets/mgmt-person-3.svg";
import mgmt_person_4 from "../../../assets/mgmt-person-4.svg";
import InfoCard from "../../../components/info-card/InfoCard";
import ScheduleAConsultation from "../../../components/schedule-a-consultation/ScheduleAConsultation";

const OurTeams = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const boardOfDirectors = [
    {
      image: ayodeji_sobolu,
      name: "- AYODEJI SOBULO",
      position: "Head, Investments/Ag. Managing Director",
      description: `Mr. Sobulo is the founder and a Director of Smooth Capital Limited. He is also the chief promoter of the Addosser Group which comprises Addosser Micro Finance Bank, Addosser Finance Limited and Addosser Insurance Brokers Limited.`,
    },
    {
      image: omolara_adebiyi,
      name: "- OMOLARA ADEBIYI",
      position: "Chairperson",
      description: `Omolara is a seasoned Finance expert with over 20 years experience in various sectors of the economy. She has participated in and led audits in the financial, construction, hotel, medical, manufacturing and the public sector..`,
    },
    {
      image: williams,
      name: "- ADEBAYO FABIYI",
      position: "Head, Investments/Ag. Managing Director",
      description: `Bayo Fabiyi is the current Managing Director, Addosser Microfinance Bank Ltd with over twenty years banking experience in Banking.`,
    },
    {
      image: person_3,
      name: "OLUFEMI ODEDIRAN",
      position: "Non-Executive Director",
      description: `Olufemi is a graduate of Chemical Engineering from the University of Port Harcourt and has over 20 years of oil and gas with Information Technology Industry experience.`,
    },
    {
      image: person_4,
      name: "TAYO GIWA",
      position: "Non-Executive Director",
      description: `Tayo Giwa holds a Bachelor's Degree in Electrical / Electronics Engineering from the University of Lagos.`,
    },
  ];

  const teamManagement = [
    {
      image: mgmt_person_1,
      name: "CHIMA KALU OCHU",
      position: "Head, Investments/Ag. Managing Director",
      decription: `Chima Kalu Ochu obtained a Bachelor of Science degree in
                  Banking and Finance from the University of Port-Harcourt. He
                  has over a decade's professional experience covering Debt
                  Capital Markets, Credit analysis, Financial Analysis,
                  Financial and Investment Advisory Services, and Portfolio
                  Management.`,
    },
    {
      image: mgmt_person_2,
      name: "CHIMA KALU OCHU",
      position: "Head, Investments/Ag. Managing Director",
      decription: `Chima Kalu Ochu obtained a Bachelor of Science degree in
                  Banking and Finance from the University of Port-Harcourt. He
                  has over a decade's professional experience covering Debt
                  Capital Markets, Credit analysis, Financial Analysis,
                  Financial and Investment Advisory Services, and Portfolio
                  Management.`,
    },
    {
      image: mgmt_person_3,
      name: "CHIMA KALU OCHU",
      position: "Head, Investments/Ag. Managing Director",
      decription: `Chima Kalu Ochu obtained a Bachelor of Science degree in
                  Banking and Finance from the University of Port-Harcourt. He
                  has over a decade's professional experience covering Debt
                  Capital Markets, Credit analysis, Financial Analysis,
                  Financial and Investment Advisory Services, and Portfolio
                  Management.`,
    },
    {
      image: mgmt_person_4,
      name: "CHIMA KALU OCHU",
      position: "Head, Investments/Ag. Managing Director",
      decription: `Chima Kalu Ochu obtained a Bachelor of Science degree in
                  Banking and Finance from the University of Port-Harcourt. He
                  has over a decade's professional experience covering Debt
                  Capital Markets, Credit analysis, Financial Analysis,
                  Financial and Investment Advisory Services, and Portfolio
                  Management.`,
    },
  ];

  return (
    <div>
      {/* Our team */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
            <div>
              <span className="text-[14px] font-bold p-2 border-1 border-custom-grey rounded-[30px]">
                Our Team
              </span>
              <p className="text-[100px] font-bold">Team</p>

              <p className="text-custom-grey text-[14px] leading-5">
                Meet the dedicated professionals who power our investment
                strategies and deliver exceptional service to our clients.
              </p>
            </div>

            <img src={ourTeamImg} />
          </div>
        </AppWrapper>
      </div>

      {/* The People Behind Our Success */}
      <AppWrapper wrapperbgcolor="bg-custom-light-purple" className="py-15">
        <p className="text-[30px] text-center font-medium">
          The People Behind Our Success
        </p>
        <p className="text-[20px] text-center font-medium">
          Board of Directors
        </p>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {boardOfDirectors.map((item, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer group"
              onMouseEnter={() => setHoveredMember(item.name)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Member Card */}
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-80 rounded-lg"
                />
                <p className="pt-3 font-medium">{item.name}</p>
                <span className="text-custom-grey">{item.position}</span>
              </div>

              {/* InfoCard on hover (relative to this card only) */}
              {hoveredMember === item.name && (
                <div className="absolute bottom-20 flex justify-center mt-3 z-20">
                  <InfoCard description={item.description} />
                </div>
              )}
            </div>
          ))}
        </div>
      </AppWrapper>

      {/* Management Team */}
      <AppWrapper className="my-10">
        <p className="text-[35px] text-center font-medium">Management Team</p>

        <div className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {teamManagement.map((item) => (
              <div className="flex flex-col h-full sm:flex-row gap-3 text-[12px] font-medium h-[250px]">
                <img src={item.image} />
                <div className="flex flex-col">
                  <p className="text-[16px] text-black font-bold">
                    {item.name}
                  </p>
                  <p className="text-custom-grey">{item.position}</p>

                  <span className="text-custom-grey flex-1 py-2">
                    {item.decription}
                  </span>

                  <p className="flex items-center gap-2 text-custom-blue text-[12px] font-medium cursor-pointer">
                    Learn more <BsChevronRight size={12} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppWrapper>

      {/* Join our team */}
      <AppWrapper className="my-15">
        <ScheduleAConsultation
          image={joinOurTeam}
          title="Join Our Team"
          body="Smooth Capital is always looking for talented individuals who are
              passionate about investment management and client service. Explore
              our current opportunities and become part of our growing team."
          buttonName="View Current Openings"
        />
      </AppWrapper>
    </div>
  );
};

export default OurTeams;
