import React from "react";
import aboutUs from "../static/images/aboutUs.png";

const AboutSection = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(30, 42, 93, 0.04) 0%, rgba(48, 62, 130, 0.04) 55.51%, rgba(60, 80, 157, 0.04) 100%)",
      }}
      className="flex justify-between items-center px-[10%]"
    >
      <img src={aboutUs} alt="" />
      <div className="w-[50%]">
        <p className="font-bold text-4xl text-primary">About Us</p>
        <p className="w-[400px] mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="text-white mt-6 mr-6 border border-white py-2 px-3 rounded-3xl bg-secondary">Read More</button>
      </div>
    </div>
  );
};

export default AboutSection;
