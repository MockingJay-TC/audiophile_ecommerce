import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import Audiophile from "../assets/audiophile";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="px-60 flex items-center justify-between py-8 mx-auto bg-[#0E0E0E] text-white font-bold border-b border-[#ffffff2c]">
      <Link to="/" className="w-36">
        <Audiophile />
      </Link>
      <NavItems />
      <ShoppingCartIcon className="w-5 h-5" />
    </div>
  );
};

export default Navbar;
