import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AppWrapper from "../components/app-wrapper/AppWrapper";

const AppLayout = () => {
  return (
    <div>
      <Navbar />

      {/* <AppWrapper className="mt-22"> */}
      <div className="mt-17">
        <Outlet></Outlet>
      </div>
      {/* </AppWrapper> */}

      <Footer />
    </div>
  );
};

export default AppLayout;
