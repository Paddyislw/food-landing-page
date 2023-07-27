import React from "react";
import Logo from "../static/icons/logo.png";
import { ReactComponent as Twitter } from "../static/icons/twitter.svg";
import { ReactComponent as Facebook } from "../static/icons/facebook.svg";
import { ReactComponent as Instagram } from "../static/icons/instagram.svg";

const Footer = () => {
  return (
    <div className="px-[5%] text-primary flex justify-between py-20 bg-[#F8F8F8] mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:justify-items-center mb:flex mb:flex-col">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="max-w-[220px] space-y-4 mb:max-w-full text-gray text-[15px]  mb:text-[10px]">
        <p className="font-semibold text-xl text-primary mb:text-base">Contact Us</p>
        <p>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p>example2020@gmail.com</p>
        <p>(904) 443-0343</p>
      </div>
      <div className="space-y-4 text-gray text-[15px] mb:text-[9px]">
        <p className="font-semibold text-xl text-primary mb:text-base">More</p>
        <p>About Us</p>
        <p>Products</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
      <div className="space-y-4 w-[220px] mb:w-full text-[15px] flex flex-col mb:text-[10px]">
        <p className="font-semibold text-xl mb:text-center mb:text-base">Social Links</p>
        <p className="hidden mb:block text-center">© 2022 Food Truck Example</p>
        <div className="flex items-start justify-between mb:justify-center space-x-6 grow">
          <Twitter className="w-5" />
          <Facebook className="w-5" />
          <Instagram className="w-5" />
        </div>
        <p className="mb:hidden">© 2022 Food Truck Example</p>
      </div>
    </div>
  );
};

export default Footer;
