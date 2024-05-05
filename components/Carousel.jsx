import React from "react";
import { useState } from "react";
import "@styles/global.css";

const Carousel = ({ children: slides }) => {
  console.log(slides.length);
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));
  };
  return (
    <div className="container">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${curr * 100}vw)` }}
      >
        {slides}
      </div>{" "}
      <div className="controller">
        <div className="previous-btn" onClick={prev}>
          <img src="./prev icon.svg" />
          Prev
        </div>
        <div style={{ color: "white", margin: "0 auto" }}>{curr}</div>
        <div className="next-btn" onClick={next}>
          Next
          <img src="./next icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
