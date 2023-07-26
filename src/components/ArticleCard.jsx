import React, { useState } from "react";

const ArticleCard = ({ title, image, des }) => {
 
  return (
    <div className="border p-4 rounded-xl space-y-3 w-[360px]">
      <img src={image} alt="" className="mx-auto" />
      <p className="font-bold text-primary text-lg">{title}</p>
      <p>{des}</p>
      <button className="py-2 px-3 text-primary border border-primary rounded-3xl">
        Read More
      </button>
    </div>
  );
};

export default ArticleCard;
