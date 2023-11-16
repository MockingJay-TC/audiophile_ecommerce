import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface ParentCompProps {
  childComp?: React.ReactNode;
}

const Layout: React.FC<ParentCompProps> = ({ childComp }) => {
  return (
    <div>
      <Navbar />
      {childComp}
      <Footer />
    </div>
  );
};

export default Layout;
