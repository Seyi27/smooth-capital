import React from "react";
import AppWrapper from "../../../components/app-wrapper/AppWrapper";
import ServicesSectionA from "../../../components/services/services-section-a/ServicesSectionA";
import bgLinePatterns from "../../../assets/line-patterns.png";
import image1 from "../../../assets/banc1.svg";
import image2 from "../../../assets/banc2.svg";
import image3 from "../../../assets/banc3.svg";
import image4 from "../../../assets/banc4.svg";
import image5 from "../../../assets/banc5.svg";
import image6 from "../../../assets/banc6.svg";
import image7 from "../../../assets/banc7.svg";
import image8 from "../../../assets/banc8.svg";
import ic1 from "../../../assets/banc-ic1.svg";
import ic2 from "../../../assets/banc-ic2.svg";
import ic3 from "../../../assets/banc-ic3.svg";
import ic4 from "../../../assets/banc-ic4.svg";
import ServicesSectionB from "../../../components/services/services-section-b/ServicesSectionB";
import ServicesQualitiesCard from "../../../components/services/services-qualities-card/ServicesQualitiesCard";
import ServicesProcessCard from "../../../components/services/services-process-card/ServicesProcessCard";
import ScheduleAConsultation from "../../../components/schedule-a-consultation/ScheduleAConsultation";
import partner_with_us from "../../../assets/partner-with-us.jpg";
import OurServicesCard from "../../../components/services/our-services-card/OurServicesCard";
import ni_logo from "../../../assets/national-insurance-logo.svg";
import gl_logo from "../../../assets/guardian-logo.svg";
import ph_logo from "../../../assets/premium-health-logo.svg";
import sp_logo from "../../../assets/secure-property-logo.svg";
import ap_logo from "../../../assets/auto-protect-logo.svg";

const Bancassurance = () => {
  const otherParagraphs = [
    "Through strategic partnerships with leading insurance providers, we offer carefully selected insurance solutions that provide comprehensive coverage, competitive premiums, and excellent customer service.",
    "Our experienced advisors will help you identify the right insurance products for your specific needs, ensuring that you and your assets are adequately protected while optimizing your overall financial strategy.",
  ];

  const qualities = [
    {
      image: image5,
      titleText: "Expert Guidance",
      bodyText:
        "Financing structures customized to your specific business needs and objectives.",
      bgColor: "bg-custom-card-purple",
    },
    {
      image: image6,
      titleText: "Competitive Rates",
      bodyText:
        "Access to special rates and exclusive policies through our partnerships.",
      bgColor: "bg-black",
    },
    {
      image: image7,
      titleText: "One-Stop Solution",
      bodyText:
        "Integrate insurance with your other financial services for holistic planning.",
      bgColor: "bg-black",
    },
    {
      image: image8,
      titleText: "Quality Assurance",
      bodyText:
        "All partners are thoroughly vetted for financial strength and service quality.",
      bgColor: "bg-custom-card-purple",
    },
  ];

  const ourProcess = [
    {
      number: "01",
      title: "Assessment",
      description: `We evaluate your current situation, assets, and potential risks to understand your protection needs.`,
    },
    {
      number: "02",
      title: "Recommendation",
      description: `Our advisors suggest appropriate insurance policies based on your specific requirements.`,
    },
    {
      number: "03",
      title: "Implementation",
      description: `We handle the application process and coordinate with insurance providers on your behalf.`,
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: `We provide continuous assistance with policy management, claims, and future coverage adjustments.`,
    },
  ];

  const insuranceProducts = [
    {
      icon: ic1,
      titleText: "Life Insurance",
      description: `Comprehensive life insurance solutions that provide financial security for your
loved ones in the event of your passing.`,
      offer: [
        "Financial protection for dependents",
        "Estate planning and wealth transfer",
        "Tax-advantaged investment component",
        "Coverage for critical illness and disability",
      ],
    },
    {
      icon: ic2,
      titleText: "Health Insurance",
      description: `Quality healthcare coverage to protect you and your family from unexpected
medical expenses and provide access to the best care.`,
      offer: [
        "Comprehensive medical coverage",
        "Access to network of quality healthcare providers",
        "Preventive care and wellness programs",
        "Coverage for prescription medications",
      ],
    },
    {
      icon: ic3,
      titleText: "Property Insurance",
      description: `Protect your home, business premises, and other valuable assets against
damage, theft, and other risks.`,
      offer: [
        "Coverage for structural damage",
        "Protection for personal belongings",
        "Liability coverage for accidents on your property",
        "Additional living expenses if home is uninhabitable",
      ],
    },
    {
      icon: ic4,
      titleText: "Auto Insurance",
      description: `Comprehensive coverage for your vehicles, providing protection against
accidents, theft, and third-party liability.`,
      offer: [
        "Third-party liability coverage",
        "Comprehensive coverage for vehicle damage",
        "Personal accident cover for driver and passengers",
        "24/7 roadside assistance",
      ],
    },
  ];

  const insurancePartners = [
    {
      logo: ni_logo,
      name: "National Insurance",
    },
    {
      logo: gl_logo,
      name: "Guardian Life",
    },
    {
      logo: ph_logo,
      name: "Premium Health",
    },
    {
      logo: sp_logo,
      name: "Secure Property",
    },
    {
      logo: ap_logo,
      name: "Auto Protect",
    },
  ];

  return (
    <div>
      {/* Bancassurance */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <ServicesSectionA
            topText="Bancassurance"
            bottomText="Services"
            sideText="Comprehensive insurance solutions to protect what matters most to you - your health, life, property, and business."
            image1={image1}
            image2={image2}
          />
        </AppWrapper>
      </div>

      {/* Integrated Insurance Solutions via Addosser Insurance Brokers */}
      <AppWrapper wrapperbgcolor="bg-custom-light-purple" className="py-15">
        <ServicesSectionB
          headerText="Integrated Insurance Solutions via Addosser Insurance Brokers"
          topText="At Smooth Capital, we understand that protecting your assets and investments is just as important as growing them. Our bancassurance services provide seamless access to a wide range of insurance products that complement your financial planning."
          image1={image3}
          image2={image4}
          otherParagraphs={otherParagraphs}
        />
      </AppWrapper>

      {/* Quality */}
      <AppWrapper className="py-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
          {qualities.map((item) => (
            <ServicesQualitiesCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Insurance Products */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-purple font-bold">
            Insurance Products
          </p>
          <p className="text-[14px] text-custom-grey">
            We offer a comprehensive range of insurance solutions to address
            your protection needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
          {insuranceProducts.map((item) => (
            <OurServicesCard item={item} screen="bancassurance" />
          ))}
        </div>
      </AppWrapper>

      {/* Our Process */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-10">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue">
            Our <span className="font-bold">Process</span>
          </p>
          <p className="text-[14px] text-custom-grey">
            We follow a disciplined, four-step approach to managing your
            portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 pt-5">
          {ourProcess.map((item) => (
            <ServicesProcessCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Protect What Matters Most */}
      <AppWrapper className="my-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-purple font-bold">
            Our Insurance Partners
          </p>
          <p className="text-[14px] text-custom-grey">
            We collaborate with top-rated insurance providers to offer you the
            best coverage options.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-[60vw] flex flex-col sm:flex-row gap-10 justify-center bg-custom-white rounded-lg p-2 my-10">
            {insurancePartners.map((item) => (
              <div className="flex flex-col items-center">
                <img src={item.logo} />
                <p className="text-[14px] text-custom-purple font-medium">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ScheduleAConsultation
          image={partner_with_us}
          title="Protect What Matters Most"
          body="Talk to our insurance advisors today to ensure you have the right coverage for your needs."
          buttonName="Schedule a Consultation"
        />
      </AppWrapper>
    </div>
  );
};

export default Bancassurance;
