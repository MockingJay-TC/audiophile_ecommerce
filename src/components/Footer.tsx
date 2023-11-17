import React from "react";
import NavItems from "./NavItems";
import Audiophile from "../assets/audiophile";

const Footer = () => {
  return (
    <div className="h-96 bg-mat px-60 pt-20 text-white">
      <div>
        <div className="flex items-center justify-between ">
          <div className="w-36">
            <Audiophile />
          </div>
          <NavItems />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[#ffffff5f] text-base">
            <p className="w-[540px]  my-9 font-medium">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          <ul className="flex gap-5 items-center">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
