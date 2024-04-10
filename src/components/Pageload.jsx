import React, { useState, useEffect } from "react";
import CowAnimation from "../assets/images/cow-animation.gif";
import "../index.css";

function Pageload() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`pageload-container ${isVisible ? "" : "hidden"}`}>
        <img
          src={CowAnimation}
          alt="cow animation"
          className={`pageload-animation ${isVisible ? "" : "hidden"}`}
        />
      </div>
    </>
  );
}

export default Pageload;
