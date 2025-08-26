import { BsCheck2Circle } from "react-icons/bs";
import ic2 from "../../../assets/business-ic1.svg";
import ic3 from "../../../assets/business-ic2.svg";
import ic4 from "../../../assets/business-ic3.svg";
import image1 from "../../../assets/business1.svg";
import image2 from "../../../assets/business2.svg";
import image3 from "../../../assets/business3.svg";
import image4 from "../../../assets/business4.svg";
import image5 from "../../../assets/business5.svg";
import image6 from "../../../assets/business6.svg";
import image7 from "../../../assets/business7.svg";
import image8 from "../../../assets/business8.svg";
import ic1 from "../../../assets/fundmgmt-ic1.svg";
import bgLinePatterns from "../../../assets/line-patterns.png";
import partner_with_us from "../../../assets/partner-with-us.jpg";
import AppWrapper from "../../../components/app-wrapper/AppWrapper";
import ScheduleAConsultation from "../../../components/schedule-a-consultation/ScheduleAConsultation";
import OurServicesCard from "../../../components/services/our-services-card/OurServicesCard";
import ServicesQualitiesCard from "../../../components/services/services-qualities-card/ServicesQualitiesCard";
import ServicesSectionA from "../../../components/services/services-section-a/ServicesSectionA";
import ServicesSectionB from "../../../components/services/services-section-b/ServicesSectionB";
import Testimonial from "../../../components/testimonial/Testimonial";

const BusinessIncubation = () => {
  const otherParagraphs = [
    "We take a hands-on approach, providing not just financial capital but also the strategic guidance, operational expertise, and industry connections that entrepreneurs need to navigate the challenges of scaling a business.",
    "Whether you're an early-stage startup with a disruptive idea or an established SME looking to accelerate growth, our team of experienced business builders and investors can help you reach your full potential.",
  ];

  const qualities = [
    {
      image: image5,
      titleText: "Innovation Focus",
      bodyText:
        "We support businesses that bring innovative solutions to market needs.",
      bgColor: "bg-custom-card-purple",
    },
    {
      image: image6,
      titleText: "Scalable Growth",
      bodyText:
        "We prioritize businesses with significant growth and scaling potential.",
      bgColor: "bg-black",
    },
    {
      image: image7,
      titleText: "Value Creation",
      bodyText:
        "We help build sustainable value through strategic development.",
      bgColor: "bg-black",
    },
    {
      image: image8,
      titleText: "Long-term Vision",
      bodyText: "We partner with founders who have ambitious long-term goals..",
      bgColor: "bg-custom-card-purple",
    },
  ];

  const ourServices = [
    {
      icon: ic1,
      titleText: "Equity & Venture Financing",
      description: `We provide seed, early-stage, and growth funding for startups and SMEs
through equity investments, helping promising businesses access the capital
they need to scale operations and accelerate growth.`,
      offer: [
        "Strategic capital injection",
        "Flexible investment structures",
        "Patient capital with long-term vision",
        "Follow-on funding opportunities",
      ],
    },
    {
      icon: ic2,
      titleText: "Business Advisory & Strategy",
      description: `Our experienced advisors provide financial and operational guidance to help
scale businesses effectively. We identify growth opportunities, optimize
processes, and develop robust business models for long-term success.`,
      offer: [
        "Strategic planning and execution",
        "Financial modeling and projections",
        "Operational efficiency improvements",
        "Corporate governance enhancement",
      ],
    },
    {
      icon: ic3,
      titleText: "Market Entry & Expansion Support",
      description: `We help businesses penetrate new markets and scale operations through
market research, partnership facilitation, and strategic planning, reducing the
risks associated with expansion while maximizing growth potential.`,
      offer: [
        "Market research and analysis",
        "Expansion strategy development",
        "Market entry risk assessment",
        "Local partnership facilitation",
      ],
    },
    {
      icon: ic4,
      titleText: "Access to Industry Networks",
      description: `We connect businesses with investors, mentors, and strategic partners within
our extensive network, facilitating valuable relationships that can accelerate
growth, provide expertise, and open doors to new opportunities.`,
      offer: [
        "Investor introductions",
        "Industry mentorship connections",
        "Strategic partnership facilitation",
        "Networking events and opportunities",
      ],
    },
  ];

  const investmentCriteria = [
    "Strong founding team with domain expertise and execution capability",
    "Innovative solutions addressing significant market needs or pain points",
    "Clear path to profitability and sustainability",
    "Scalable business model with potential for significant growth",
    "Demonstrated market traction or proof of concept",
  ];

  const investmentParameters = {
    investment_size: "₦50 million to ₦500 million",
    stage: "Seed to Series B",
    sectors:
      "Fintech, Agritech, Healthtech, Cleantech, Edtech, and other innovative sectors",
    geography: "Nigeria and broader West Africa",
  };

  return (
    <div>
      {/* Business Incubation */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <ServicesSectionA
            topText="Business Incubation"
            bottomText="& Venture Growth"
            sideText="We nurture high-potential startups and SMEs by providing them with the capital, strategic advisory, and business expertise required to scale and succeed."
            image1={image1}
            image2={image2}
          />
        </AppWrapper>
      </div>

      {/* Expert Investment Management */}
      <AppWrapper wrapperbgcolor="bg-custom-light-purple" className="py-15">
        <ServicesSectionB
          headerText="Transforming Promising Ideas Into Thriving Businesses"
          topText="At Smooth Capital, we believe in the power of entrepreneurship to drive innovation and economic growth. Our Business Incubation & Venture Growth division is dedicated to identifying, supporting, and scaling high-potential businesses across various sectors."
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

      {/* Our Services */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue font-bold">Our Services</p>
          <p className="text-[14px] text-custom-grey">
            We provide comprehensive support across all aspects of business
            development and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
          {ourServices.map((item) => (
            <OurServicesCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Our Investment Criteria */}
      <AppWrapper className="py-15">
        <div className="flex flex-col items-center">
          <p className="text-[30px] text-custom-blue font-bold">
            Our Investment Criteria
          </p>
          <p className="text-[14px] text-custom-grey">
            We look for specific qualities in the businesses we support and
            invest in.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-5">
            <div className="w-full sm:w-[25vw] bg-custom-white p-3 rounded-sm">
              <p className="text-[14px] pb-1 mb-2 border-b-1 border-b-custom-semi-white font-bold">
                What We Look For
              </p>
              {investmentCriteria.map((item) => (
                <div className="flex items-start gap-2 mb-2">
                  <BsCheck2Circle size={20} className="text-custom-blue" />
                  <p className="text-custom-dark text-[14px]">{item}</p>
                </div>
              ))}
            </div>

            <div className="w-full sm:w-[25vw] bg-custom-white p-3 rounded-sm">
              <p className="text-[14px] pb-1 mb-2 border-b-1 border-b-custom-semi-white font-bold">
                Investment Parameters
              </p>
              <div>
                <div className="text-[14px]">
                  <p className="text-custom-blue font-medium">
                    Investment Size
                  </p>
                  <p className="text-custom-grey">
                    {investmentParameters.investment_size}
                  </p>
                </div>

                <div className="text-[14px] mt-2">
                  <p className="text-custom-blue font-medium">Stage</p>
                  <p className="text-custom-grey">
                    {investmentParameters.stage}
                  </p>
                </div>

                <div className="text-[14px] mt-2">
                  <p className="text-custom-blue font-medium">Sectors</p>
                  <p className="text-custom-grey">
                    {investmentParameters.sectors}
                  </p>
                </div>

                <div className="text-[14px] mt-2">
                  <p className="text-custom-blue font-medium">Geography</p>
                  <p className="text-custom-grey">
                    {investmentParameters.geography}
                  </p>
                </div>
              </div>
            </div>
          </div>
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

      {/* Ready to Scale Your Business? */}
      <AppWrapper className="my-15">
        <ScheduleAConsultation
          image={partner_with_us}
          title="Ready to Scale Your Business?"
          body="Whether you're seeking capital, strategic guidance, or business expertise, our team is ready to help turn your vision into reality."
          buttonName="Schedule a Consultation"
        />
      </AppWrapper>
    </div>
  );
};

export default BusinessIncubation;
