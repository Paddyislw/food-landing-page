import React from "react";
import HeroBg from "../static/images/HeroBg.png";
import Pizza from "../static/images/Pizza.png";
import logo from "../static/icons/logo.png";

const HeroSection = () => {
  return (
    <div className="flex justify-between mb-20 md:flex-col-reverse"  >
      <div className="pl-[5%] flex flex-col">
        <img src={logo} alt="" className="mt-6 md:hidden w-[110px]" />
        <p className="text-primary font-extrabold  text-5xl mt-20 md:text-center">
          Discover the <br /> <span className="text-secondary">Best</span> Food
          <br />
          and Drinks
        </p>
        <p className="mt-8 md:text-center text-gray">
          Naturally made Healthcare Products for the <br /> better care & support of
          your body.
        </p>
        <button className="mt-8 font-semibold text-white py-3 px-6 rounded-3xl bg-secondary md:mx-auto w-[200px] transition-all hover:scale-105 ease-in-out">Explore Now!</button>
      </div>
      <div className="">
        <img
          src={HeroBg}
          alt=""
          className="absolute w-[620px] h-[700px] -top-1 right-0 lg:w-[520px] lg:h-[600px] md:w-full md:h-[700px] mb:h-auto mb:w-full"
        />
        <button className="absolute top-0 right-0 text-white mt-6 mr-6 border border-white py-2 px-3 rounded-3xl transition-all hover:scale-105 ease-in-out" >
          Get In Touch
        </button>
        <img src={Pizza} alt="" className="w-[610px] h-[680px] mt-1  ml-auto lg:w-[510px] lg:h-[580px] md:w-[800px] md:h-[680px] mb:h-auto mb:w-full" />
      </div>
    </div>
  );
};

export default HeroSection;

