import React, { useState } from "react";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";
import GrasIcon from "../assets/images/gras-icon.svg";
import BubbleIcon from "../assets/images/gedanken.svg";
import Accordion from "../components/accordion.jsx";
import "../index.css";

function Faq() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-10 py-5 flex flex-col items-center mb-10">
        <h1 className="text-6xl text-center font-inter-black mb-10 mt-20">
          FAQ
          <br />
          <span className="font-pacifico mt-2 text-5xl">
            Fragen & Antworten
          </span>
        </h1>
        <div className="container relative flex flex-col max-w-[1000px]">
          <img
            src={GrasIcon}
            alt=""
            className="w-18 h-18 absolute -z-10 -left-12 -top-12"
          />
          <img
            src={BubbleIcon}
            alt=""
            className="w-24 h-24 absolute -z-10 -right-[95px] -top-[95px]"
          />
          <div className="bg-[#fafafa] p-5 rounded-xl h-[650px] flex items-center">
            <Accordion />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Faq;
