import { BsCheck2Circle } from "react-icons/bs";
import image1 from "../../../assets/fundmgmt1.svg";
import image2 from "../../../assets/fundmgmt2.svg";
import image3 from "../../../assets/fundmgmt3.svg";
import image4 from "../../../assets/fundmgmt4.svg";
import image5 from "../../../assets/fundmgmt5.svg";
import image6 from "../../../assets/fundmgmt6.svg";
import image7 from "../../../assets/fundmgmt7.svg";
import image8 from "../../../assets/fundmgmt8.svg";
import image9 from "../../../assets/fundmgmt10.svg";
import ic1 from "../../../assets/fundmgmt-ic1.svg";
import ic2 from "../../../assets/fundmgmt-ic2.svg";
import ic3 from "../../../assets/fundmgmt-ic3.svg";
import ic4 from "../../../assets/fundmgmt-ic4.svg";
import bgLinePatterns from "../../../assets/line-patterns.png";
import partner_with_us from "../../../assets/partner-with-us.jpg";
import AppWrapper from "../../../components/app-wrapper/AppWrapper";
import ScheduleAConsultation from "../../../components/schedule-a-consultation/ScheduleAConsultation";
import ServicesPortfolioCard from "../../../components/services/services-portfolio-card/ServicesPortfolioCard";
import ServicesProcessCard from "../../../components/services/services-process-card/ServicesProcessCard";
import ServicesQualitiesCard from "../../../components/services/services-qualities-card/ServicesQualitiesCard";
import ServicesSectionA from "../../../components/services/services-section-a/ServicesSectionA";
import ServicesSectionB from "../../../components/services/services-section-b/ServicesSectionB";
import Testimonial from "../../../components/testimonial/Testimonial";

const FundsPortfolioMgmt = () => {
  const otherParagraphs = [
    "Our team of seasoned investment professionals utilizes comprehensive research, market insights, and disciplined investment processes to navigate market volatility and pursue long-term growth.",
    "Whether you're saving for retirement, building wealth, or seeking income, our portfolio management solutions provide the expertise and attention your investments deserve.",
  ];

  const qualities = [
    {
      image: image5,
      titleText: "Professional Management",
      bodyText:
        "Our team of experienced portfolio managers actively monitor and adjust your investments to maximize returns while managing risk.",
      bgColor: "bg-custom-card-purple",
    },
    {
      image: image6,
      titleText: "Diversification",
      bodyText:
        "We spread your investments across different asset classes and securities to reduce risk and enhance returns potential.",
      bgColor: "bg-black",
    },
    {
      image: image7,
      titleText: "Regular Reporting",
      bodyText:
        "Receive detailed performance reports and portfolio updates to stay informed about your investments at all times.",
      bgColor: "bg-black",
    },
    {
      image: image8,
      titleText: "Personalized Service",
      bodyText:
        "Enjoy dedicated support from our relationship managers who understand your financial goals and preferences.",
      bgColor: "bg-custom-card-purple",
    },
  ];

  const portfolioOfferings = [
    {
      icon: ic1,
      titleText: "Addosser Dollar Yield Portfolio",
      description: `A USD-denominated portfolio offering stability and protection against local
currency fluctuations.`,
      investment_focus: `USD-denominated fixed-income instruments, including government and corporate
bonds`,
      minimum_investment: `$500 (Retail) | $10,000 (Institutional)`,
      holding_period: `182 days`,
      target_returns: `3% - 5% (subject to market conditions)`,
      ideal_for: `Investors looking for capital
preservation, stable foreign currency`,
    },
    {
      icon: ic2,
      titleText: "Addosser Treasury Advantage Portfolio",
      description: `A low-risk portfolio focused on money market instruments with high liquidity.`,
      investment_focus: `Treasury bills and other money market instruments`,
      minimum_investment: `N1,000,000 (Retail) | N50,001,000
(Auction)`,
      holding_period: `91 days`,
      target_returns: `18% - 20% (subject to market
conditions)`,
      ideal_for: `Investors prioritizing liquidity and
short-term capital deployment`,
    },
    {
      icon: ic3,
      titleText: "Addosser Prime Yield Portfolio",
      description: `A high-yield portfolio providing diversified exposure to private debt
instruments.`,
      investment_focus: `SME private debt, tenured deposits, and commercial papers`,
      minimum_investment: `N500,000`,
      holding_period: `180 days`,
      target_returns: `15% - 24% (subject to market
conditions)`,
      ideal_for: `Investors seeking high-yield
opportunities with diversified debt`,
    },
    {
      icon: ic4,
      titleText: "Addosser Halal Prosperity Portfolio",
      description: `An ethical investment portfolio adhering to Shariah-compliant principles.`,
      investment_focus: `Shari'ah-compliant assets, including Sukuk and Fixed Term Investments`,
      minimum_investment: `N500,000`,
      holding_period: `1 year`,
      target_returns: `15% - 24% (subject to market
conditions)`,
      ideal_for: `Ethical investors seeking stable Halal-
compliant returns in adherence to`,
    },
  ];

  const investmentProcess = [
    {
      number: "01",
      title: "Understand",
      description: `We start by understanding your goals, time horizon, risk tolerance, and unique circumstances.`,
    },
    {
      number: "02",
      title: "Design",
      description: `We create a personalized investment strategy that aligns with your objectives and preferences.`,
    },
    {
      number: "03",
      title: "Implement",
      description: `We build your portfolio with carefully selected investments based on rigorous analysis.`,
    },
    {
      number: "04",
      title: "Monitor",
      description: `We continually review your portfolio, making adjustments as needed to keep aligned with your goals.`,
    },
  ];

  const whyInvestInWithSmoothCapital = [
    {
      reason: "Capital Preservation",
      description: "Secure and structured investment strategies.",
    },
    {
      reason: "Professional Management",
      description: "Expert fund management ensuring risk-adjusted returns.",
    },
    {
      reason: "Diversified Exposure",
      description:
        "Spread across fixed-income, debt, and alternative instruments.",
    },
    {
      reason: "Regulated & Transparent",
      description:
        "All portfolios adhere to regulatory guidelines with clear fee structures.",
    },
  ];

  return (
    <div>
      {/* Funds & Portfolio */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <ServicesSectionA
            topText="Funds & Portfolio"
            bottomText="Management"
            sideText="Our Portfolio Management services provide professionally managed investment opportunities designed to maximize returns while mitigating risks based on your unique financial goals."
            image1={image1}
            image2={image2}
          />
        </AppWrapper>
      </div>

      {/* Expert Investment Management */}
      <AppWrapper wrapperbgcolor="bg-custom-light-purple" className="py-15">
        <ServicesSectionB
          headerText="Expert Investment Management"
          topText="At Smooth Capital, our portfolio management service takes the complexity out of investing. We design and manage personalized investment portfolios tailored to your financial goals, risk tolerance, and time horizon."
          image1={image3}
          image2={image4}
          otherParagraphs={otherParagraphs}
        />
      </AppWrapper>

      {/* Why choose us? */}
      <AppWrapper className="py-15">
        <p className="text-[30px] text-custom-blue text-center font-bold">
          Why choose us?{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
          {qualities.map((item) => (
            <ServicesQualitiesCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Our Portfolio Offerings */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue font-bold">
            Our Portfolio Offerings
          </p>
          <p className="text-[14px] text-custom-grey">
            We offer a range of professionally managed portfolios to match
            different investment objectives, risk tolerances, and time horizons.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
          {portfolioOfferings.map((item) => (
            <ServicesPortfolioCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Why Invest with Smooth Capital? */}
      <AppWrapper className="my-15">
        <div className="flex flex-col items-center">
          <div
            className="w-full h-full p-5 sm:w-[45vw] sm:h-80 sm:p-10 bg-cover bg-center flex flex-col items-center justify-center rounded-lg"
            style={{ backgroundImage: `url(${image9})` }}
          >
            <p className="text-[30px] text-center text-white font-bold pb-2">
              Why Invest with Smooth Capital?
            </p>

            <div>
              {whyInvestInWithSmoothCapital.map((item) => (
                <div className="flex items-start gap-2 pb-2">
                  <BsCheck2Circle color="white" className="mt-1"/>

                  <div>
                    <p className="text-[16px] text-white font-bold">
                      {item.reason}
                    </p>
                    <p className="text-[14px] text-white">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <span className="text-[14px] pt-5 text-center">
            Take control of your investments with Smooth Capital's expertly
            managed portfolios.
          </span>
        </div>
      </AppWrapper>

      {/* Our Investment Process */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue">
            Our <span className="font-bold">Investment Process</span>
          </p>
          <p className="text-[14px] text-custom-grey">
            We follow a disciplined, four-step approach to managing your
            portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 pt-5">
          {investmentProcess.map((item) => (
            <ServicesProcessCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Testimonial */}
      <AppWrapper wrapperbgcolor="bg-custom-blue" className="py-15">
        <Testimonial
          body="Smooth Capital's portfolio management service has been instrumental in helping
me achieve my financial goals. Their professional team, personalized approach, and
consistent performance have exceeded my expectations."
          author="Adebayo Johnson"
          time="Client since 2019"
        />
      </AppWrapper>

      {/* Ready to Partner with Us? */}
      <AppWrapper className="my-15">
        <ScheduleAConsultation
          image={partner_with_us}
          title="Ready to Partner with Us?"
          body="Take the first step towards financial freedom. Let our experts help you build a portfolio that aligns with your goals and secures your future prosperity."
          buttonName="Schedule a Consultation"
        />
      </AppWrapper>
    </div>
  );
};

export default FundsPortfolioMgmt;
