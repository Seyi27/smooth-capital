import ayodeji_sobolu from "../../../assets/ayodeji-sobolu.svg";
import joinOurTeam from "../../../assets/join-our-team.svg";
import bgLinePatterns from "../../../assets/line-patterns.png";
import chima_kalu from "../../../assets/chima-kalu.svg";
import nassar_akeemat from "../../../assets/nassar-akeemat.svg";
import dare_ogunbona from "../../../assets/dare-ogunbona.svg";
import olukayode_fajuyagbe from "../../../assets/olukayode-fajuyagbe.svg";
import omolara_adebiyi from "../../../assets/omolara-adebiyi.svg";
import ourTeamImg from "../../../assets/our-team-img.svg";
import olufemi_odediran from "../../../assets/olufemi-odediran.svg";
import tiwa_giwa from "../../../assets/tayo-giwa.svg";
import adebayo_fabiyi from "../../../assets/adebayo-fabiyi.svg";
import AppWrapper from "../../../components/app-wrapper/AppWrapper";
import ScheduleAConsultation from "../../../components/schedule-a-consultation/ScheduleAConsultation";
import BoardOfDirectorsCard from "../../../components/board-of-directors-card/BoardOfDirectorsCard";
import TeamManagementCard from "../../../components/team-management-card/TeamManagementCard";

const OurTeams = () => {

  const boardOfDirectors = [
    {
      image: ayodeji_sobolu,
      name: "- AYODEJI SOBULO",
      position: "Head, Investments/Ag. Managing Director",
      short_description: `Mr. Sobulo is the founder and a Director of Smooth Capital Limited. He is also the chief promoter of the Addosser Group which comprises Addosser Micro Finance Bank, Addosser Finance Limited and Addosser Insurance Brokers Limited.`,
      long_description: `Mr. Sobulo is the founder and a Director of Smooth Capital Limited. He is also the chief promoter of the Addosser Group which comprises Addosser Micro Finance Bank, Addosser Finance Limited and Addosser Insurance Brokers Limited.<p>&nbsp;</p>

He has over the years garnered experience in Retail and Corporate banking having commenced his career in 1996 as a Senior Retail Banking Officer at Ecobank Nigeria and grew to become Group Head, Retail Banking at MBC International Bank in 2001.<p>&nbsp;</p>

He proceeded to First Bank Nigeria PLC in 2006 where he served as various branches in Lagos such as the Adetokunbo Ademola branch, Agidingbi branch, etc.<p>&nbsp;</p>

He has been a transformational manager involved in strategy formulation & implementation, business and product development, and driving innovative business initiatives. He has been actively involved in investor engagement and road shows realizing several billions of Naira in investment in the Addosser Group.<p>&nbsp;</p>

He graduated from University of Ibadan, the pioneer institution in Nigeria, with a degree in Agronomy. He holds a Bachelor of Science (BSc) degree in Agronomy from the University of Ibadan, Nigeria and is a member of the Chartered Institute of Bankers of Nigeria and a Certified Microfinance Banker (MCIB).`,
    },
    {
      image: omolara_adebiyi,
      name: "- OMOLARA ADEBIYI",
      position: "Chairperson",
      short_description: `Omolara is a seasoned Finance expert with over 20 years experience in various sectors of the economy. She has participated in and led audits in the financial, construction, hotel, medical, manufacturing and the public sector..`,
      long_description: `Omolara is a seasoned Finance expert with over 20 years experience in various sectors of the economy. She has participated in and led audits in the financial, construction, hotel, medical, manufacturing and the public sector.<p>&nbsp;</p>

She has over ten years' Board experience having served as an active member on the Board of renowned institutions. She holds a Masters' degree in Corporate Governance and is renowned for her ability to reduce cost, adhere to policies and procedures, attention to detail and uncompromising integrity.<p>&nbsp;</p>

She currently serves as the Head, Finance and Accounts in Africa Real Estate Investment. She is a fellow of the Institute of Chartered Accountants of Nigeria (ICAN).`,
    },
    {
      image: adebayo_fabiyi,
      name: "- ADEBAYO FABIYI",
      position: "Head, Investments/Ag. Managing Director",
      short_description: `Bayo Fabiyi is the current Managing Director, Addosser Microfinance Bank Ltd with over twenty years banking experience in Banking.`,
      long_description: `Bayo Fabiyi is the current Managing Director, Addosser Microfinance Bank Ltd with over twenty years banking experience in Banking.<p>&nbsp;</p>

Prior to becoming the Managing Director, he served as the pioneer Executive Director, Operations in charge of Banking Operations, Human Resources, Administration etc.<p>&nbsp;</p>

Bayo has served in various institutions such as Eco bank, Intercontinental bank etc. He holds a Bachelor's Degree in English Studies and an MBA in International Business. He is a member of the Chartered Institute of Bankers of Nigeria.`,
    },
    {
      image: olufemi_odediran,
      name: "OLUFEMI ODEDIRAN",
      position: "Non-Executive Director",
      short_description: `Olufemi is a graduate of Chemical Engineering from the University of Port Harcourt and has over 20 years of oil and gas with Information Technology Industry experience.`,
      long_description: `Olufemi is a graduate of Chemical Engineering from the University of Port Harcourt and has over 20 years of oil and gas with Information Technology Industry experience. He has worked for various companies, including: Makon Engineering and Technical Services Limited; Nigeria Agip Oil Company; and Honeywell (Pty) Limited. He is currently the Managing Director of Quaddynamics Ltd, (an engineering services company) and also a director in Quaddynamics LLC.`,
    },
    {
      image: tiwa_giwa,
      name: "TAYO GIWA",
      position: "Non-Executive Director",
      short_description: `Tayo Giwa holds a Bachelor's Degree in Electrical / Electronics Engineering from the University of Lagos.`,
      long_description: `Tayo Giwa holds a Bachelor's Degree in Electrical / Electronics Engineering from the University of Lagos.<p>&nbsp;</p>
He is a seasoned engineer with over 20years experience in the Oil & gas sector. Tayo may be an engineer but he is also known for his keen eye for numbers and attention to detail. He currently serves as an Executive Director with Quaddynamics Limited engaged in providing qualitative control system solutions for the Oil & Gas sector in countries like Guinea, Chad and Cameroon.`,
    },
  ];

  const teamManagement = [
    {
      image: chima_kalu,
      name: "CHIMA KALU OCHU",
      position: "Head, Investments/Ag. Managing Director",
      short_description: `Chima Kalu Ochu obtained a Bachelor of Science degree in
                  Banking and Finance from the University of Port-Harcourt. He
                  has over a decade's professional experience covering Debt
                  Capital Markets, Credit analysis, Financial Analysis,
                  Financial and Investment Advisory Services, and Portfolio
                  Management.`,
      long_description: `Chima Kalu Ochu obtained a Bachelor of Science degree in Banking and Finance from the University of Port-Harcourt. He has over a decade's professional experience covering Debt Capital Markets, Credit analysis, Financial Analysis, Financial and Investment Advisory Services, and Portfolio Management.<p>&nbsp;</p>
He commenced his career with Northern City Global Capital Limited and left to join SCM Capital Limited (Formerly Sterling Capital Markets Limited) where he was actively involved in Capital Market activities and was responsible for business development; origination of capital market mandates; financial advisory services; client relationship management and transaction structuring, arranging and execution covering the spectrum of debt capital needs of various corporates.<p>&nbsp;</p>
He has attended training programmes and webinars organized by the Lagos Business School, Nigerian Exchange Limited (NGX), FMDQ Academy, Fitch Ratings, the Securities and Exchange Commission etc. covering Project Finance; Corporate Finance; Futures Contracts; Value and Growth Investing; Corporate Finance; Financial Modeling; Special Purpose Acquisition Companies (SPACs); Non-Interest Capital Market Products; Startup Growth, Partnerships and digitization.`,
    },
    {
      image: nassar_akeemat,
      name: "NASSAR, AKEEMAT JOJU",
      position: "Head, Compliance",
      short_description: `Akeemat is a legal practitioner qualified to practice as a Barrister and Solicitor of the Supreme Court of Nigeria.
She graduated with a Second Class (Upper Division) degree obtained from the prestigious... `,
      long_description: `Akeemat is a legal practitioner qualified to practice as a Barrister and Solicitor of the Supreme Court of Nigeria.<p>&nbsp;</p>
She graduated with a Second Class (Upper Division) degree obtained from the prestigious Obafemi Awolowo University, Ile-Ife and has her LLM in Corporate and Commercial Law from Queen Mary University of London, United Kingdom.<p>&nbsp;</p>
Akeemat has over 10 years experience as an in house counsel and is functional in a multi-disciplinary capacity in corporate and legal commercial transactions, trusteeship, real estate, mediation and secretarial duties.`,
    },
    {
      image: dare_ogunbona,
      name: "DARE OGUNBONA",
      position: "Head, Financial Advisory",
      short_description: `Dare is an entrepreneur and a seasoned professional with expertise in Business Development, Portfolio Management, Islamic Finance and Strategy. He has played an instrumental role in attracting capital at various levels to Nigeria.`,
      long_description: `Dare is an entrepreneur and a seasoned professional with expertise in Business Development, Portfolio Management, Islamic Finance and Strategy. He has played an instrumental role in attracting capital at various levels to Nigeria.<p>&nbsp;</p>
His career spans through Insurance, Islamic Finance, Investment Banking, Commodities Trading and Management Consultancy. He is also the co-founder of Kord Capital Limited, an Islamic Finance Advisory firm and Prime Grade Consult Ltd.<p>&nbsp;</p>
He graduated from the Prestigious Obafemi Awolowo University. He is also a Fellow of the Investment Advisers and Portfolio Managers of Nigeria (IAPM) and a Member of the Chartered Institute Insurance of Nigeria (CIIN).`,
    },
    {
      image: olukayode_fajuyagbe,
      name: "OLUKAYODE FAJUYAGBE",
      position: "Senior Wealth Advisor",
      short_description: `Akeemat is a legal practitioner qualified to practice as a Barrister and Solicitor of the Supreme Court of Nigeria.
She graduated with a Second Class (Upper Division) degree obtained from the prestigious...`,
      long_description: `With nearly two decades of experience in wealth management, investment advisory, and financial planning, Kayode Fajuyagbe has built a distinguished career helping high-net-worth individuals, corporates, and institutional investors navigate the complexities of financial markets. As Senior Wealth Advisor at Smooth Capital Limited, he is responsible for acquiring and managing high-value investment clients, providing strategic portfolio management, and driving asset growth.<p>&nbsp;</p>
Kayode's journey in the financial sector began at African Alliance Insurance Plc, where he worked as a Financial Advisor from 2013 to 2015, guiding clients in risk management and long-term financial planning. He then transitioned to Cordros Asset Management in 2016 as a Sales Associate, where he honed his expertise in investment strategy, market research, and client relationship management.<p>&nbsp;</p>
His next role at Asset & Resource Management (ARM) saw him take on increasing responsibilities. From 2017 to 2018, he served as an Account Executive, developing investment models and conducting market analysis. Recognized for his outstanding contributions, he was promoted to Deputy Branch Sales Manager from 2018 to 2022, where he led client acquisition strategies and played a key role in securing a NGN1 billion employee savings scheme. His success continued as he moved into Treasury Sales in 2022, closing over NGN13 billion in investment deals and managing diverse portfolios for HNWIs and corporate clients.<p>&nbsp;</p>
Beyond his professional achievements, Kayode brings a deep understanding of market trends, regulatory compliance, and financial strategy, ensuring clients receive personalized and insightful investment guidance. He holds a B.Sc. in Business Administration from the University of Benin and is a Certified Member of the Chartered Insurance Institute of Nigeria. His expertise spans treasury sales, portfolio management, and risk assessment, making him an invaluable asset to Smooth Capital Limited.<p>&nbsp;</p>
A firm believer in building wealth through smart, strategic investing, Kayode is dedicated to empowering clients with the tools and knowledge they need to achieve long-term financial success. His passion for excellence and unwavering commitment to client satisfaction continue to drive his impact in the investment management industry.`,
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
            <BoardOfDirectorsCard idx={idx} item={item}  />
          ))}
        </div>
      </AppWrapper>

      {/* Management Team */}
      <AppWrapper className="my-10">
        <p className="text-[35px] text-center font-medium">Management Team</p>

        <div className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {teamManagement.map((item) => (
              <TeamManagementCard item={item} />
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
