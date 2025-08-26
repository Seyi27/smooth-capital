import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GetInTouch from "./components/get-in-touch/GetInTouch";
import ScrollToTop from "./components/scroll-to-top/scrollToTop";
import AppLayout from "./layouts/AppLayout";
import Careers from "./screens/about-us/careers/Careers";
import CompanyProfile from "./screens/about-us/company-profile/CompanyProfile";
import OurTeams from "./screens/about-us/our-teams/OurTeams";
import AddosserEcosystem from "./screens/addosser-ecosystem/AddosserEcosystem";
import Home from "./screens/home/Home";
import Bancassurance from "./screens/services/bancassurance/Bancassurance";
import BusinessIncubation from "./screens/services/business-incubation/BusinessIncubation";
import DebtCapitalAdvisory from "./screens/services/debt-capital-advisory/DebtCapitalAdvisory";
import FundsPortfolioMgmt from "./screens/services/funds-portfolio-mgmt/FundsPortfolioMgmt";
import WealthAdvisory from "./screens/services/wealth-advisory/WealthAdvisory";

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
