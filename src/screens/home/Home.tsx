import AppWrapper from "../../components/app-wrapper/AppWrapper";
import ScheduleAConsultation from "../../components/schedule-a-consultation/ScheduleAConsultation";
import partner_with_us from "../../assets/partner-with-us.jpg";
import ServicesProcessCard from "../../components/services/services-process-card/ServicesProcessCard";
import EcosystemStatistics from "../../components/ecosystem-statistics/EcosystemStatistics";
import bgLinePatterns from "../../assets/line-patterns.png";
import CustomButton from "../../components/custom-button/CustomButton";
import image1 from "../../assets/home1.svg";
import image2 from "../../assets/home2.svg";
import image3 from "../../assets/home3.svg";
import image4 from "../../assets/home4.svg";
import image5 from "../../assets/home5.svg";
import image6 from "../../assets/home6.svg";
import image7 from "../../assets/home7.svg";
import image8 from "../../assets/home8.svg";
import image9 from "../../assets/home9.svg";
import ic1 from "../../assets/home-ic1.svg";
import ic2 from "../../assets/home-ic2.svg";
import ic3 from "../../assets/home-ic3.svg";
import ic4 from "../../assets/home-ic4.svg";
import ic5 from "../../assets/home-ic4.svg";
import ic6 from "../../assets/home-ic4.svg";
import OurInvestmentSolutionsCard from "../../components/our-investment-solutions-card/OurInvestmentSolutionsCard";
import CarouselComponent from "../../components/carousel-component/CarouselComponent";

const Home = () => {
  const whyChooseSmoothCapital = [
    {
      number: "01",
      title: "Expert Investment Team",
      description: `Our team of seasoned portfolio managers brings decades of experience in financial markets.`,
    },
    {
      number: "02",
      title: "Personalized Strategies",
      description: `Tailored investment solutions designed to meet your unique financial goals and risk tolerance.`,
    },
    {
      number: "03",
      title: "Proven Track Record",
      description: `Consistent performance with competitive returns across various market conditions.`,
    },
    {
      number: "04",
      title: "Transparent Approach",
      description: `Clear communication and complete transparency in fees, performance, and investment strategies.`,
    },
  ];

  const outInvestmentSolutions = [
    {
      icon: ic1,
      image: image4,
      title: "Addosser Dollar Yield Portfolio",
      description: `USD-denominated portfolio offering stability and protection against local currency fluctuations.`,
      routeTo: "/services/funds-portfolio-management",
    },
    {
      icon: ic2,
      image: image5,
      title: "Treasury Advantage Portfolio",
      description: `Low-risk portfolio focused on money market instruments with high liquidity for optimal short-term returns.`,
      routeTo: "/services/funds-portfolio-management",
    },
    {
      icon: ic3,
      image: image6,
      title: "Prime Yield Portfolio",
      description: `High-yield portfolio providing diversified exposure to private debt instruments for superior returns.`,
      routeTo: "/services/funds-portfolio-management",
    },
    {
      icon: ic4,
      image: image7,
      title: "Halal Prosperity Portfolio",
      description: `Ethical investment portfolio adhering to Shariah-compliant principles for conscious investing.`,
      routeTo: "/services/funds-portfolio-management",
    },
    {
      icon: ic5,
      image: image8,
      title: "Wealth Advisory",
      description: `Personalized financial guidance to help you make informed investment decisions and reach your goals.`,
      routeTo: "/services/wealth-advisory",
    },
    {
      icon: ic6,
      image: image9,
      title: "Portfolio Management",
      description: `Professional management of investment portfolios tailored to your financial objectives and risk tolerance.`,
      routeTo: "/services/funds-portfolio-management",
    },
  ];

  const slideImages = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];

  return (
    <div>
      {/* Wealth management redefined */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <div className="w-full flex flex-col justify-self-center">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-5">
              <div className="flex-1 text-[55px] font-medium">
                <p className="">Wealth Management</p>
                <span className="text-white bg-custom-blue pb-3 ">
                  Redefined
                </span>
              </div>

              <div className="flex-1">
                <p className="text-[14px] text-custom-grey">
                  Providing expert investment solutions to help you grow,
                  preserve, and transfer your wealth with confidence. Our
                  tailored approach ensures your financial goals become reality.
                </p>

                <div className="flex gap-2 pt-2">
                  <CustomButton
                    label={"Explore Service"}
                    width={"150px"}
                    height={"40px"}
                    bgColor={"#28098A"}
                    fontSize={12}
                    fontWeight={600}
                    textColor={"white"}
                    borderRadius={"20px"}
                  />

                  <CustomButton
                    label={"Learn more"}
                    width={"150px"}
                    height={"40px"}
                    bgColor={"white"}
                    fontSize={12}
                    fontWeight={600}
                    textColor={"#28098A"}
                    borderRadius={"20px"}
                    borderColor="#28098A"
                    borderWidth="1px"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <CarouselComponent slideImages={slideImages} />
            </div>
          </div>
        </AppWrapper>
      </div>

      {/* Our Investment Solutions */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue">
            Our <span className="font-bold">Investment</span> Solutions
          </p>
          <p className="text-[14px] text-custom-grey">
            Professionally managed portfolios designed to optimize returns while
            meeting your financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5">
          {outInvestmentSolutions.map((item) => (
            <OurInvestmentSolutionsCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Ecosystem Statistics */}
      <AppWrapper className="py-15">
        <EcosystemStatistics screen="home" />
      </AppWrapper>

      {/* Why Choose Smooth Capital */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue">
            Why Choose <span className="font-bold">Smooth Capital</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 pt-5">
          {whyChooseSmoothCapital.map((item) => (
            <ServicesProcessCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Ready to Start Investing? */}
      <AppWrapper className="my-15">
        <ScheduleAConsultation
          image={partner_with_us}
          title="Ready to Start Investing?"
          body="Take the first step towards financial freedom. Let our experts help you build a portfolio that aligns with your goals and secures your future prosperity."
          buttonName="Schedule a Consultation"
        />
      </AppWrapper>
    </div>
  );
};

export default Home;
