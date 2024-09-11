import React from "react";
import DescribeUsSlide from "./DescribeUsSlide";

const describeUsItems = ["unique", "pro", "creative", "custom", "quality"];

function Works() {
  return (
    <section id="works">
      <div
        className="flex flex-row overflow-hidden my-7 bg-white px-0 pt-[5px] pb-[7px] relative
       after:absolute after:h-full after:z-[2] after:w-[200px] after:right-0 after:bg-gradient-to-l after:from-white
       before:absolute before:h-full before:z-[2] before:w-[200px] before:left-0 before:bg-gradient-to-r before:from-white
        rotate-[-2deg] mt-[-100px]
       "
      >
        <DescribeUsSlide items={describeUsItems} />
        <DescribeUsSlide items={describeUsItems} />
        <DescribeUsSlide items={describeUsItems} />
      </div>
    </section>
  );
}

export default Works;
