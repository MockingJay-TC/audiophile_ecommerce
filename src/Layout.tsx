import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface ParentCompProps {
  childComp?: React.ReactNode;
}

const Layout: React.FC<ParentCompProps> = ({ childComp }) => {
  return (
    <div className="font-manrope w-full">
      <Navbar />
      {childComp}
      <Footer />
    </div>
  );
};

export default Layout;
