import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import OurTeams from "./screens/about-us/our-teams/OurTeams";
import Home from "./screens/home/Home";
import CompanyProfile from "./screens/about-us/company-profile/CompanyProfile";
import Careers from "./screens/about-us/careers/Careers";
import FundsPortfolioMgmt from "./screens/services/funds-portfolio-mgmt/FundsPortfolioMgmt";
import BusinessIncubation from "./screens/services/business-incubation/BusinessIncubation";
import DebtCapitalAdvisory from "./screens/services/debt-capital-advisory/DebtCapitalAdvisory";
import Bancassurance from "./screens/services/bancassurance/Bancassurance";
import WealthAdvisory from "./screens/services/wealth-advisory/WealthAdvisory";
import AddosserEcosystem from "./screens/addosser-ecosystem/AddosserEcosystem";
import GetInTouch from "./components/get-in-touch/GetInTouch";
import ScrollToTop from "./components/scroll-to-top/scrollToTop";
import InvestmentJourney from "./screens/investment-journey/InvestmentJourney";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us">
            <Route path="company-profile" element={<CompanyProfile />} />
            <Route path="our-teams" element={<OurTeams />} />
            <Route path="careers" element={<Careers />} />
          </Route>
          <Route path="/services">
            <Route
              path="funds-portfolio-management"
              element={<FundsPortfolioMgmt />}
            />
            <Route
              path="business-incubation"
              element={<BusinessIncubation />}
            />
            <Route
              path="debit-capital-advisory"
              element={<DebtCapitalAdvisory />}
            />
            <Route path="bancassurance" element={<Bancassurance />} />
            <Route path="wealth-advisory" element={<WealthAdvisory />} />
          </Route>
          <Route path="/addosser-ecosystem" element={<AddosserEcosystem />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          {/* <Route path="/" element={<InvestmentJourney />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
