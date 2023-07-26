import React, { useState } from "react";
import card1 from "../static/images/card1.png";
import card2 from "../static/images/card2.png";
import card3 from "../static/images/card3.png";
import card4 from "../static/images/card4.png";
import card5 from "../static/images/card5.png";
import card6 from "../static/images/card6.png";
import ArticleCard from "./ArticleCard";
import { ReactComponent as Left } from "../static/icons/arrowLeft.svg";
import { ReactComponent as Right } from "../static/icons/arrowRight.svg";

const ArticleSection = () => {
  const [pagination, setPagination] = useState({ start: 0, end: 3 });
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="px-[5%] mt-20 xl:px-[3%]">
      <p className="font-semibold text-4xl text-primary">Latest Articles</p>
      <div className="flex justify-between mt-14 lg:grid lg:grid-cols-2 lg:gap-6 lg:justify-items-center sm:grid-cols-1">
        {articleData
          .map((item, index) => (
            <ArticleCard
              des={item.des}
              image={item.image}
              title={item.title}
              key={index}
            />
          ))
          .slice(pagination.start, pagination.end)}
      </div>
      <div className="flex justify-center items-center space-x-2 mt-12">
        <button
          className={`${
            currentPage === 2 ? " border-darkGray" : "border-lightGray"
          } p-1 rounded border`}
          onClick={() => {
            setCurrentPage(1);
            setPagination({ start: 0, end: 3 });
          }}
        >
          <Left className={`${
              currentPage === 2 ? "text-darkGray" : "text-lightGray"
            } w-5`} />
        </button>
        <p className="text-darkGray">{currentPage}/2</p>
        <button
          className={`${
            currentPage === 1 ? " border-darkGray" : "border-lightGray"
          } p-1 rounded border`}
          onClick={() => {
            setCurrentPage(2);
            setPagination({ start: 3, end: 6 });
          }}
        >
          <Right
            className={`${
              currentPage === 1 ? "text-darkGray" : "text-lightGray"
            } w-5`}
          />
        </button>
      </div>
    </div>
  );
};

const articleData = [
  {
    image: card1,
    title: "Grilled  Tomatoes at Home",
    des: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... ",
  },
  {
    image: card2,
    title: "Snacks for Travel",
    des: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... ",
  },
  {
    image: card3,
    title: "Post-workout Recipes",
    des: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... ",
  },
  {
    image: card4,
    title: "How To Grill Corn",
    des: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... ",
  },
  {
    image: card5,
    title: "Crunchwrap Supreme",
    des: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... ",
  },
  {
    image: card6,
    title: "Broccoli Cheese Soup",
    des: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... ",
  },
];

export default ArticleSection;
