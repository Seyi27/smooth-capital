import React from "react";
import AppWrapper from "../../../components/app-wrapper/AppWrapper";
import ServicesSectionA from "../../../components/services/services-section-a/ServicesSectionA";
import bgLinePatterns from "../../../assets/line-patterns.png";
import image1 from "../../../assets/debt-capital1.svg";
import image2 from "../../../assets/debt-capital2.svg";
import image3 from "../../../assets/debt-capital3.svg";
import image4 from "../../../assets/debt-capital4.svg";
import image5 from "../../../assets/debt-capital5.svg";
import image6 from "../../../assets/debt-capital6.svg";
import image7 from "../../../assets/debt-capital7.svg";
import image8 from "../../../assets/debt-capital8.svg";
import ic1 from "../../../assets/business-ic2.svg";
import ic2 from "../../../assets/debit-capital-ic1.svg";
import ic3 from "../../../assets/fundmgmt-ic3.svg";
import ic4 from "../../../assets/debit-capiltal-ic2.svg";
import partner_with_us from "../../../assets/partner-with-us.jpg";
import ServicesSectionB from "../../../components/services/services-section-b/ServicesSectionB";
import ServicesQualitiesCard from "../../../components/services/services-qualities-card/ServicesQualitiesCard";
import OurServicesCard from "../../../components/services/our-services-card/OurServicesCard";
import ScheduleAConsultation from "../../../components/schedule-a-consultation/ScheduleAConsultation";
import ServicesProcessCard from "../../../components/services/services-process-card/ServicesProcessCard";
import SuccessStoriesCard from "../../../components/services/success-stories-card/SuccessStoriesCard";

const DebtCapitalAdvisory = () => {
  const otherParagraphs = [
    "Whether you're seeking to fund growth initiatives, refinance existing debt, or finance specific projects, our team can help you navigate the complex landscape of debt financing options and secure the funding you need on optimal terms.",
    "We work with businesses across various sectors and sizes, from established corporations to mid-market companies and emerging growth businesses, adapting our approach to meet each client's unique circumstances and objectives",
  ];

  const qualities = [
    {
      image: image5,
      titleText: "Tailored Solutions",
      bodyText:
        "Financing structures customized to your specific business needs and objectives.",
      bgColor: "bg-custom-card-purple",
    },
    {
      image: image6,
      titleText: "Financial Expertise",
      bodyText: "Deep understanding of debt markets and financial structuring.",
      bgColor: "bg-black",
    },
    {
      image: image7,
      titleText: "Market Access",
      bodyText:
        "Connections to a wide network of lenders, investors, and capital providers.",
      bgColor: "bg-black",
    },
    {
      image: image8,
      titleText: "End-to-End Support",
      bodyText: "Comprehensive guidance from strategy to execution and beyond.",
      bgColor: "bg-custom-card-purple",
    },
  ];

  const ourServices = [
    {
      icon: ic1,
      titleText: "Debt Structuring & Syndication",
      description: `We help businesses secure long-term and short-term financing through
various debt instruments, including bonds, commercial papers, bank loans,
and private credit placements.`,
      offer: [
        "Comprehensive analysis of funding requirements",
        "Optimal debt structure design based on business needs",
        "Identification and engagement with potential lenders",
        "Negotiation of favorable terms and conditions",
      ],
    },
    {
      icon: ic2,
      titleText: "Capital Market Advisory",
      description: `Our team guides businesses through the process of raising funds via capital
markets, including corporate bond issuance, commercial paper programs, and
other debt securities.`,
      offer: [
        "Market timing and issuance strategy development",
        "Preparation of offering documents and regulatory filings",
        "Investor targeting and roadshow organization",
        "Pricing optimization and transaction execution",
      ],
    },
    {
      icon: ic3,
      titleText: "Alternative Financing Solutions",
      description: `We connect businesses with private lenders, mezzanine financing, and
structured credit solutions to address specific funding needs that may not fit
traditional lending criteria.`,
      offer: [
        "Assessment of non-traditional financing options",
        "Matching with specialized lenders and investors",
        "Structuring of hybrid debt-equity solutions",
        "Implementation of creative financing arrangements",
      ],
    },
    {
      icon: ic4,
      titleText: "Credit Rating Advisory",
      description: `Our experts assist businesses in obtaining and improving their credit ratings to
enhance their funding capabilities and reduce borrowing costs.`,
      offer: [
        "Credit profile assessment and gap analysis",
        "Rating agency presentation preparation",
        "Strategic guidance for rating improvement",
        "Ongoing credit rating management support",
      ],
    },
  ];

  const advisoryProcess = [
    {
      number: "01",
      title: "Assessment",
      description: `We analyze your business, financial position, and funding requirements to understand your specific needs.`,
    },
    {
      number: "02",
      title: "Strategy",
      description: `We develop a tailored funding strategy, identifying the most appropriate financing sources and structures.`,
    },
    {
      number: "03",
      title: "Execution",
      description: `We manage the entire funding process, from preparation of materials to negotiation and closing.`,
    },
    {
      number: "04",
      title: "Optimization",
      description: `We provide ongoing support to help you manage and optimize your debt portfolio over time.`,
    },
  ];

  const successStories = [
    {
      title: "Manufacturing Company Expansion",
      description: `A leading manufacturing company seeking to
fund a major expansion project.`,
      challenge: `The company needed ₦5 billion to finance factory
expansion but wanted to avoid diluting equity
ownership while maintaining flexible repayment terms.`,
      solution: `We structured a syndicated term loan facility with a
consortium of three banks, featuring a two-year
moratorium on principal repayments and competitive
interest rates.`,
      result: `The company successfully expanded operations with a
40% increase in production capacity while maintaining
a sustainable debt service profile aligned with
projected cash flows.`,
    },
    {
      title: "Real Estate Developer Bond Issuance",
      description: `A mid-sized real estate developer looking to
finance multiple development projects
simultaneously.`,
      challenge: `The developer required long-term financing of ₦10
billion but faced challenges accessing bank loans due
to the long-term nature of their projects.`,
      solution: `We advised on a 7-year corporate bond issuance in
the capital market, helping with rating acquisition,
investor presentations, and pricing optimization.`,
      result: `The bond was oversubscribed by 20%, allowing the
developer to secure funding at a rate 200 basis points
lower than comparable bank financing.`,
    },
    {
      title: "Fintech Startup Growth Financing",
      description: `A rapidly growing fintech company needing
capital for market expansion and technology
development.`,
      challenge: `The startup needed ₦2 billion for growth but had
limited assets for collateral and a short operating
history, making traditional bank financing difficult.`,
      solution: `We arranged a combination of venture debt and
convertible notes from specialized technology lenders
and venture debt providers.`,
      result: `The company secured the needed growth capital
without immediate equity dilution, enabling them to
triple their customer base within 18 months.`,
    },
  ];

  return (
    <div>
      {/* Debt Capital Advisory */}
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <ServicesSectionA
            topText="Debt Capital Advisory"
            bottomText="& Fund Arrangement"
            sideText="We help businesses access structured financing solutions to support their growth, working capital, and strategic initiatives."
            image1={image1}
            image2={image2}
          />
        </AppWrapper>
      </div>

      {/* Strategic Debt Financing Solutions */}
      <AppWrapper wrapperbgcolor="bg-custom-light-purple" className="py-15">
        <ServicesSectionB
          headerText="Strategic Debt Financing Solutions"
          topText="At Smooth Capital, we understand that accessing the right financing at the right time and on the right terms is critical for business success. Our Debt Capital Advisory team provides expert guidance and execution support to help businesses optimize their capital structure."
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
          <p className="text-[30px] text-custom-purple font-bold">
            Our Services
          </p>
          <p className="text-[14px] text-custom-grey">
            We offer a comprehensive range of debt capital advisory services to
            address diverse financing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
          {ourServices.map((item) => (
            <OurServicesCard item={item} screen="debt_capital" />
          ))}
        </div>
      </AppWrapper>

      {/* Success Stories */}
      <AppWrapper className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-purple font-bold">
            Success Stories{" "}
          </p>
          <p className="text-[14px] text-custom-grey">
            Explore how we've helped businesses across sectors secure optimal
            financing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 pt-7">
          {successStories.map((item) => (
            <SuccessStoriesCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Our Advisory Process */}
      <AppWrapper wrapperbgcolor="bg-custom-white" className="py-15">
        <div className="text-center">
          <p className="text-[30px] text-custom-blue">
            Our <span className="font-bold">Advisory Process</span>
          </p>
          <p className="text-[14px] text-custom-grey">
            We follow a disciplined, four-step approach to managing your
            portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 pt-5">
          {advisoryProcess.map((item) => (
            <ServicesProcessCard item={item} />
          ))}
        </div>
      </AppWrapper>

      {/* Ready to Partner with Us? */}
      <AppWrapper className="my-15">
        <ScheduleAConsultation
          image={partner_with_us}
          title="Ready to Optimize Your Capital Structure?"
          body="Our debt capital advisory team is ready to help you secure the financing your business needs to achieve its objectives."
          buttonName="Schedule a Consultation"
        />
      </AppWrapper>
    </div>
  );
};

export default DebtCapitalAdvisory;
