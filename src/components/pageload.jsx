import React, { useState, useEffect } from "react";
import CowAnimation from "../assets/images/cow-animation.gif";
import "../index.css";

function Pageload() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`pageload-container ${isVisible ? "" : "hidden"}`}>
        <div
          className={`pageload-animation ${
            isVisible ? "" : "hidden"
          } flex items-center justify-center flex-col`}
        >
          <img src={CowAnimation} alt="cow animation" />
          <p className="text-white font-pacifico sm:text-2xl text-lg text-center">
            Einen Moment, Kühe werden gemolken...
          </p>
        </div>
      </div>
    </>
  );
}

export default Pageload;
