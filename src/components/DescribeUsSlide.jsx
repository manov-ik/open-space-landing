import React from "react";

const DescribeUsSlide = ({ items }) => {
  return (
    <div className="flex flex-row animate-slide whitespace-nowrap">
      {items.map((item, index) => (
        <p className="m-1 mx-20 text-2xl font-Bold max-mobile:mx-8" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default DescribeUsSlide;
