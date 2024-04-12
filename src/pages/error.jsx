import React from "react";
import { Link } from "react-router-dom";
import "../error.css";

function Error() {
  return (
    <div className="drip-container">
      <div className="font-inter-bold fixed z-10 flex flex-col items-center justify-center">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link className="underline" to="/">
          Go to home page
        </Link>
      </div>
      <div className="cont">
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Error;
