import React, { useState } from "react";

const ArticleCard = ({ title, image, des }) => {
 
  return (
    <div className="border border-[#93a2d3] p-4 rounded-xl space-y-3 w-[360px] xl:w-[300px] sm:w-[340px]">
      <img src={image} alt="" className="mx-auto" />
      <p className="font-bold text-primary text-lg">{title}</p>
      <p className="text-gray">{des}</p>
      <button className="py-2 px-3 text-primary border border-primary rounded-3xl transition-all hover:scale-105 ease-in-out">
        Read More
      </button>
    </div>
  );
};

export default ArticleCard;
