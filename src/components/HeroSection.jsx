import React from "react";
import HeroBg from "../static/images/HeroBg.png";
import Pizza from "../static/images/Pizza.png";
import logo from "../static/icons/logo.png";

const HeroSection = () => {
  return (
    <div className="flex justify-between">
      <div className="pl-[5%]">
        <img src={logo} alt="" className="mt-6" />
        <p className="text-primary font-bold text-5xl mt-20">
          Discover the <br /> <span className="text-secondary">Best</span> Food
          <br />
          and Drinks
        </p>
        <p className="mt-8">
          Naturally made Healthcare Products for the <br /> better care & support of
          your body.
        </p>
        <button className="mt-8 font-semibold text-white py-3 px-6 rounded-3xl bg-secondary">Explore Now!</button>
      </div>
      <div className="w-[752px] h-[800px] relative">
        <img
          src={HeroBg}
          alt=""
          className="absolute w-[620px] h-[700px] top-0 right-0"
        />
        <button className="absolute top-0 right-0 text-white mt-6 mr-6 border border-white py-2 px-3 rounded-3xl">
          Get In Touch
        </button>
        <img src={Pizza} alt="" className="w-[610px] h-[680px] mt-1  ml-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
