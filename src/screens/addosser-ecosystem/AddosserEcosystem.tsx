import React from "react";
import AppWrapper from "../../components/app-wrapper/AppWrapper";
import ScheduleAConsultation from "../../components/schedule-a-consultation/ScheduleAConsultation";
import partner_with_us from "../../assets/partner-with-us.jpg";
import ServicesProcessCard from "../../components/services/services-process-card/ServicesProcessCard";
import microfinance_banking from "../../assets/microfinance-banking.svg";
import finance_leasing from "../../assets/finance-leasing.svg";
import insurance_broking from "../../assets/insurance-broking.svg";
import investments from "../../assets/investments.svg";
import EcosystemStatistics from "../../components/ecosystem-statistics/EcosystemStatistics";

const AddosserEcosystem = () => {
  const howWeWorkTogether = [
    {
      number: "01",
      title: "Integrated Financial Solutions",
      description: `Clients can access a complete suite of financial services, from lending and insurance to investment management.`,
    },
    {
      number: "02",
      title: "Shared Expertise",
      description: `Our companies share resources and expertise, ensuring clients benefit from specialized knowledge across financial sectors.`,
    },
    {
      number: "03",
      title: "Seamless Client Experience",
      description: `Clients enjoy a seamless experience as they navigate different financial needs across our ecosystem companies.`,
    },
  ];

  const integratedServices = [
    {
      image: microfinance_banking,
      title: "Addosser MFB Limited",
      description:
        "Addosser Microfinance Bank provides financial inclusion services to underserved communities and small businesses.",
      properties: [
        "A state licensed Microfinance Bank",
        "Ranked among the top 10 Microfinance Banks in Nigeria",
        "25 branches across Lagos, Nigeria",
        "CAGR 35% on gross revenue",
        "Average loan disbursement of N5billion per month",
      ],
    },
    {
      image: finance_leasing,
      title: "Addosser Finance Limited",
      description:
        "Addosser Finance Limited offers leasing solutions and financial services to businesses and individuals.",
      properties: [
        "A licensed Finance House",
        "Ranked among the top 10 Finance Houses in Nigeria",
        "2 branches in Lagos, Nigeria",
        "CAGR 30%+ on gross revenue",
        "Average loan disbursement of N1billion per month",
      ],
    },
    {
      image: insurance_broking,
      title: "Addosser Insurance Brokers Limited",
      description:
        "Addosser Insurance Brokers Limited provides comprehensive insurance solutions and risk management services.",
      properties: [
        "A licensed Insurance brokerage company",
        "CAGR 40% on gross revenue",
        "An average of 2,000 insurance polices per month",
      ],
    },
    {
      image: investments,
      title: "Addosser Investments Limited",
      description:
        "Addosser Investments offers portfolio management, mutual funds, and wealth advisory services to help clients build and grow their wealth.",
      properties: [
        "A company providing corporate and technical services to the Addosser ecosystem for optimal performance",
        "Positioned to provide corporate and technical services to SMEs and Corporates (small and medium)",
      ],
    },
  ];

  return (
    <div>
      {/* our integrated services */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div>
            <span className=" text-[30px] font-bold">
              Our Integrated Services
            </span>
            <p className="text-[14px] pb-5">
              Smooth Capital works within the Addosser ecosystem to provide
              comprehensive financial solutions that meet diverse client needs.
            </p>

            <span className="text-[14px] text-custom-blue underline cursor-pointer">
              Explore the Addosser Ecosystem &gt;
            </span>
          </div>

          <div className="hidden sm:block border-1 border-custom-semi-white border-dashed"></div>

          <div className="w-full grid grid-cols-1 gap-5 pt-7">
            {integratedServices.map((item) => (
              <div className="flex flex-col p-5 sm:flex-row items-center justify-between gap-2 bg-white rounded-lg sm:p-0">
                <div className="pl-0 sm:pl-5">
                  <p className="text-[22px] font-bold">{item.title}</p>

                  <ul className="list-disc pl-5">
                    {item.properties.map((item, index) => (
                      <li
                        key={index}
                        className="text-[14px] text-custom-dark pt-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-[14px] font-medium pt-10 cursor-pointer">
                    Learn more &gt;
                  </p>
                </div>

                <img
                  src={item.image}
                  className="rounded-none  pt-2 sm:w-[20vw] sm:rounded-e-lg sm:pt-0"
                />
              </div>
            ))}
          </div>
        </div>
      </AppWrapper>

      {/* Ecosystem Statistics */}
      <AppWrapper className="py-15">
        <EcosystemStatistics />
      </AppWrapper>

      {/* How We Work Together */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue">
            How We <span className="font-bold">Work Together</span>
          </p>
          <p className="text-[14px] text-custom-grey">
            The Addosser ecosystem creates synergies through integration of
            financial services across our companies:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5">
          {howWeWorkTogether.map((item) => (
            <ServicesProcessCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Ready to Partner with Us? */}
      <AppWrapper className="my-15">
        <ScheduleAConsultation
          image={partner_with_us}
          title="Ready to Partner with Us?"
          body="Let our team of experts help you build a portfolio that aligns with your financial goals."
          buttonName="Schedule a Consultation"
        />
      </AppWrapper>
    </div>
  );
};

export default AddosserEcosystem;
