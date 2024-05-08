import React from "react";
import "@styles/global.css";

const Slide1 = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="hello">
        {/* <h1 className="text-3xl font-bold">Hello</h1>
        <h1>
          <div>
            <div>I'm</div>
            <div>Utsav</div>
          </div>
        </h1> */}
        <p>Start/&gt;</p>
        <img src="./Hello.svg" className="hello-pc" />
        <img src="./Hellomobile.svg" className="hello-mobile" />
      </div>
      <div className="my-photo">
        <img src="./Photo.svg" />{" "}
      </div>
      <img src="./Welcome.svg" className="welcome" />
    </div>
  );
};

export default Slide1;
