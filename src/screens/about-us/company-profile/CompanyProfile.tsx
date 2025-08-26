import bgLinePatterns from "../../../assets/line-patterns.png";
import AppWrapper from "../../../components/app-wrapper/AppWrapper";
import about_smooth_capital from "../../../assets/about-smooth-capital.svg";
import our_mission from "../../../assets/our-mission.svg";
import our_vision from "../../../assets/our-vision.svg";
import partner_with_us from "../../../assets/partner-with-us.jpg";
import microfinance_banking from "../../../assets/microfinance-banking.svg";
import finance_leasing from "../../../assets/finance-leasing.svg";
import insurance_broking from "../../../assets/insurance-broking.svg";
import investments from "../../../assets/investments.svg";
import ScheduleAConsultation from "../../../components/schedule-a-consultation/ScheduleAConsultation";

const CompanyProfile = () => {
  const ourMissionAndVision = [
    {
      image: our_mission,
      title: "Our Mission",
      description: "Empowering individuals and SMEs for wealth creation.",
    },

    {
      image: our_vision,
      title: "Our Vision",
      description:
        "To be the foremost provider of bespoke and simplified financing and investment solutions.",
    },
  ];

  const coreValues = [
    {
      letter: "C",
      title: "Client-centricity",
      content:
        "We put our clients needs at the center of everything we do, ensuring personalized service and solutions.",
    },
    {
      letter: "A",
      title: "Accountability",
      content:
        "We take responsibility for our actions and decisions, maintaining transparency with our clients and partners.",
    },
    {
      letter: "R",
      title: "Reliability",
      content:
        "We deliver on our promises consistently, building trust through dependable service and results.",
    },
    {
      letter: "E",
      title: "Excellence",
      content:
        "We strive for the highest standards in all aspects of our work, continually improving our services.",
    },
  ];

  const integratedServices = [
    {
      image: microfinance_banking,
      title: "Microfinance Banking",
      description:
        "Addosser Microfinance Bank provides financial inclusion services to underserved communities and small businesses.",
    },
    {
      image: finance_leasing,
      title: "Finance & Leasing",
      description:
        "Addosser Finance Limited offers leasing solutions and financial services to businesses and individuals.",
    },
    {
      image: insurance_broking,
      title: "Insurance Broking",
      description:
        "Addosser Insurance Brokers Limited provides comprehensive insurance solutions and risk management services.",
    },
    {
      image: investments,
      title: "Investments",
      description:
        "Addosser Investments offers portfolio management, mutual funds, and wealth advisory services to help clients build and grow their wealth.",
    },
  ];

  return (
    <div>
      {/* Company Profile */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
            <div>
              <span className="text-[14px] font-bold p-2 border-1 border-custom-grey rounded-[30px]">
                Company Profile
              </span>
              <p className="text-[70px] font-bold">About Smooth Capital</p>

              <p className="text-custom-grey text-[14px] leading-5">
                Smooth Capital Limited ("Smooth Capital" or "the Company") was
                incorporated on March 31, 2021, and licensed by the Securities
                and Exchange Commission (SEC) on July 1, 2024, to operate as a
                Fund and Portfolio Management firm.
              </p>
            </div>

            <img src={about_smooth_capital} className="w-full sm:w-[40vw]" />
          </div>
        </AppWrapper>
      </div>

      {/* our mission and vision */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div>
          <p className="text-custom-grey text-[14px] leading-5">
            <span className="text-custom-blue text-[18px] font-bold">
              Smooth Capital
            </span>{" "}
            provides asset and portfolio management services to clients within
            the Addosser ecosystem and the general public. As an investment
            management boutique, Smooth Capital incubates, finances, and
            strategically invests in high-growth SMEs and corporates, offering
            tailored investment solutions and advisory services to position them
            as market leaders. Our strategy is focused on transforming SMEs into
            large-scale corporations through strategic financing, structured
            advisory, and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-7">
          {ourMissionAndVision.map((item) => (
            <div className="flex gap-2 bg-white rounded-lg p-4">
              <img src={item.image} className="w-[30vw] sm:w-[20vw]" />

              <div>
                <p className="font-bold">{item.title}</p>
                <p className="text-custom-grey text-[14px] font-medium pt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AppWrapper>

      {/* Core values */}
      <AppWrapper className="py-15">
        <div className="bg-[#EBEEF1] p-5 rounded-lg">
          <div className="flex flex-col items-start sm:flex-row items-center justify-between">
            <p className="text-[28px] font-bold">Core Values(CARE)</p>

            <p className="text-custom-grey text-[18px]">
              Our values guide how we operate and serve our clients.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 pt-7">
            {coreValues.map((item) => (
              <div className="flex flex-col gap-2">
                <span className=" w-[22px] bg-white flex items-center justify-center rounde-md font-bold">
                  {item.letter}
                </span>
                <p className="font-bold">{item.title}</p>
                <p className="text-custom-grey text-[12px] font-medium ">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AppWrapper>

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

          <div className="grid grid-cols-1 gap-5 pt-7">
            {integratedServices.map((item) => (
              <div className="flex flex-col p-5 sm:flex-row items-center justify-between gap-2 bg-white rounded-lg sm:p-0">
                <div className="pl-0 sm:pl-5">
                  <p className="text-[22px] font-bold">{item.title}</p>
                  <p className="text-[14px] text-custom-dark pt-2">
                    {item.description}
                  </p>
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

      {/* Ready to Partner with Us? */}
      <AppWrapper className="my-15">
        <ScheduleAConsultation
          image={partner_with_us}
          title="Ready to Partner with Us?"
          body="Let our team of experts help you build a portfolio that aligns
              with your financial goals."
          buttonName="Schedule a Consultation"
        />
      </AppWrapper>
    </div>
  );
};

export default CompanyProfile;
