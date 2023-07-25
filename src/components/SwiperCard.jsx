import React, { useState } from "react";
import { carouselData } from "../constants";
import SwipeableViews from "react-swipeable-views";
import styles from "../styles";

const SwiperCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwipeChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-center items-center w-[40%] h-[70%] bg-slate-100 relative mx-10 p-8 rounded-xl">
      <SwipeableViews
        index={activeIndex}
        onChangeIndex={handleSwipeChange}
        enableMouseEvents
        resistance
        style={{ width: "100%" }}
      >
        {carouselData.map((data) => {
          return (
            <div
              key={data.id}
              className="rounded-md flex flex-col items-center gap-5  slide w-[100%]"
            >
              <img src={data.img} alt="Image" className="w-[70px] h-[70px]" />
              <p className={`${styles.paragraph} mb-10`}>{data.text}</p>
            </div>
          );
        })}
      </SwipeableViews>

      <span className="indicators mt-10">
        {carouselData.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`indicator ${activeIndex === index ? "active" : ""}`}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default SwiperCard;
