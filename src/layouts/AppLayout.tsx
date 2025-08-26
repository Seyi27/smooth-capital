import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

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
