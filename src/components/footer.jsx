import React from "react";
import Heart from "../assets/images/heart.png";
import "../index.css";

function Footer() {
  return (
    <footer className="container mx-auto mt-auto p-10 flex items-center justify-between text-xs font-inter-bold text-white">
      <div>
        <p>
          Mit{" "}
          <img
            className="inline-block mb-1 ml-[1px]"
            src={Heart}
            alt="Heart Icon"
          />{" "}
          erstellt in Berlin & Sachsen
        </p>
      </div>
      <a href="#" className="text-white hover:underline">
        Disclaimer
      </a>
    </footer>
  );
}

export default Footer;
