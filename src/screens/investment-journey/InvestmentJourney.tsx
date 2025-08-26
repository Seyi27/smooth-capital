import bgLinePatterns from "../../assets/line-patterns.png";
import partner_with_us from "../../assets/partner-with-us.jpg";
import AppWrapper from "../../components/app-wrapper/AppWrapper";
import InvestmentJourneySteps from "../../components/investment-journey-steps/InvestmentJourneySteps";
import ScheduleAConsultation from "../../components/schedule-a-consultation/ScheduleAConsultation";
import Testimonial from "../../components/testimonial/Testimonial";

const InvestmentJourney = () => {
  return (
    <div>
      <div
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLinePatterns})` }}
      >
        <AppWrapper>
          <div className="flex flex-col items-center">
            <div className="flex-1 text-[40px] font-medium text-center">
              <p className="">Start Your</p>
              <span className="text-white bg-custom-blue pb-3">
                Investment Journey
              </span>
              <p className="flex-1 text-[14px] text-custom-grey mt-3">
                Take the first step towards financial growth with our tailored
                investment solutions.
              </p>
            </div>

            <InvestmentJourneySteps />

            <p className="text-[14px]">
              <span className="text-custom-grey">Need assistance?</span>{" "}
              <span className="text-custom-purple">Contact our team</span>
            </p>
          </div>
        </AppWrapper>
      </div>

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

export default InvestmentJourney;
