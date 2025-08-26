import React from "react";
import bgLinePatterns from "../../../assets/line-patterns.png";
import AppWrapper from "../../../components/app-wrapper/AppWrapper";
import ServicesSectionA from "../../../components/services/services-section-a/ServicesSectionA";
import image1 from "../../../assets/wealth1.svg";
import image2 from "../../../assets/wealth2.svg";
import image3 from "../../../assets/fundMgmt5.svg";
import image4 from "../../../assets/fundMgmt6.svg";
import image5 from "../../../assets/wealth3.svg";
import ServicesQualitiesCard from "../../../components/services/services-qualities-card/ServicesQualitiesCard";
import ServicesProcessCard from "../../../components/services/services-process-card/ServicesProcessCard";
import ScheduleAConsultation from "../../../components/schedule-a-consultation/ScheduleAConsultation";
import partner_with_us from "../../../assets/partner-with-us.jpg";

const WealthAdvisory = () => {
  const OurWealthAdvisoryApproach = [
    {
      image: image3,
      titleText: "Private Wealth Management",
      bodyText:
        "Exclusive wealth management services for high-net-worth individuals with complex financial needs.",
      bgColor: "bg-custom-card-purple",
    },
    {
      image: image4,
      titleText: "Investment Advisory",
      bodyText:
        "Strategic investment advice and portfolio management to optimize returns while managing risk.",
      bgColor: "bg-black",
    },
    {
      image: image5,
      titleText: "Family Office Services",
      bodyText:
        "Comprehensive wealth management and legacy planning for families across multiple generations.",
      bgColor: "bg-custom-card-purple",
    },
  ];

  const whyChooseOurWealthAdvisory = [
    {
      number: "01",
      title: "Personalized Approach",
      description: `We take the time to understand your unique financial situation, goals, and risk tolerance to create truly customized solutions.`,
    },
    {
      number: "02",
      title: "Holistic Planning",
      description: `Our wealth advisory considers all aspects of your financial life, from investments and tax strategies to estate planning.`,
    },
    {
      number: "03",
      title: "Expert Team",
      description: `Access to a team of experienced financial advisors, investment professionals, and specialists in various financial disciplines.`,
    },
    {
      number: "04",
      title: "Ongoing Relationship",
      description: `We build long-term relationships with our clients, providing continuous monitoring and adjustment of strategies as your life evolves.`,
    },
  ];

  return (
    <div>
      {/* Wealth */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <ServicesSectionA
            topText="Wealth"
            bottomText="Advisory Services"
            sideText="Comprehensive wealth management solutions tailored to your unique financial goals."
            image1={image1}
            image2={image2}
          />
        </AppWrapper>
      </div>

      {/* Our Wealth Advisory Approach */}
      <AppWrapper className="pb-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue font-bold">
            Our Wealth Advisory Approach
          </p>
          <p className="text-[14px] text-custom-grey">
            We follow a disciplined, four-step approach to managing your
            portfolio.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
            {OurWealthAdvisoryApproach.slice(0, -1).map((item) => (
              <ServicesQualitiesCard item={item} />
            ))}
          </div>

          <div className="w-full flex justify-center rounded-lg mt-5">
            <ServicesQualitiesCard
              item={
                OurWealthAdvisoryApproach[OurWealthAdvisoryApproach.length - 1]
              }
            />
          </div>
        </div>
      </AppWrapper>

      {/* Why Choose Our Wealth Advisory */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue">
            Why Choose Our <span className="font-bold">Wealth Advisory</span>
          </p>
          <p className="text-[14px] text-custom-grey">
            We follow a disciplined, four-step approach to managing your
            portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 pt-5">
          {whyChooseOurWealthAdvisory.map((item) => (
            <ServicesProcessCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Take Control of Your Financial Future */}
      <AppWrapper className="my-15">
        <ScheduleAConsultation
          image={partner_with_us}
          title="Take Control of Your Financial Future"
          body="Partner with our wealth advisory team to create a comprehensive financial strategy tailored to your goals."
          buttonName="Schedule a Consultation"
        />
      </AppWrapper>
    </div>
  );
};

export default WealthAdvisory;
