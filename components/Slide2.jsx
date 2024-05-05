import React from "react";
import Typewriter from "typewriter-effect";
import "@styles/global.css";

const Slide2 = () => {
  const f1 = {
    fontFamily: "Archivo",
    color: "white",
    fontSize: "3vw",
  };

  const heading = {
    margin: "0 auto",

    // position: "absolute",
    // transform: "translateY(50%)",
    // color: "white",
    // letterSpacing: "0.2vw",
    // left: "21vw",
    // top: "8vw",
    // width: "100vw",
  };

  const a1 = {
    display: "inline-block",
    marginRight: "20px",
    fontFamily: "Archivo",
    color: "white",
    fontSize: "3vw",
  };
  const a2 = {
    display: "inline-block",
    marginRight: "20px",
    fontFamily: "Abhaya Libre, serif",
    color: "white",
    fontSize: "3vw",
  };
  const a3 = {
    display: "inline-block",
    marginRight: "20px",
    fontFamily: "courier, serif",
    color: "#00C4AC",
    fontSize: "3vw",
  };
  return (
    <div className="slide2" style={heading}>
      <h1 style={{}}>
        <p style={a1}>I am</p>
        <p style={a2}>interested</p>
        <p style={{ ...f1, ...a1 }}>in</p>
        <p style={a3}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              pauseFor: 1000,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Machine Learning")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Computer Vision")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Neuromorphic Computing")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Quantum Computing")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Robotics")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </p>
      </h1>
    </div>
  );
};

export default Slide2;
