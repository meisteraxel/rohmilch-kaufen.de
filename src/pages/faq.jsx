import React from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Accordion from "../components/accordion.jsx";
import GrasIcon from "../assets/images/gras-icon.svg";
import SmallCircle from "../assets/images/small-circle.svg";
import Circle from "../assets/images/circle.svg";
import Muh from "../assets/images/muh.svg";
import "../index.css";

function Faq() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-5 py-5 flex flex-col items-center mb-10">
        <h1 className="md:text-6xl text-5xl text-center font-inter-black mt-20 mb-10">
          FAQ
          <br />
          <span className="font-pacifico mt-2 md:text-5xl text-4xl">
            Fragen & Antworten
          </span>
        </h1>
        <div className="container relative flex flex-col max-w-[1000px]">
          <img
            src={GrasIcon}
            alt=""
            className="absolute -z-10 w-16 h-16 -left-12 -top-12 hidden lg:block"
          />
          <img
            src={SmallCircle}
            alt=""
            className=" absolute -z-10 w-3 -right-[10px] -top-[20px] opacity-0 fadeIn-animation-first hidden lg:block"
          />
          <img
            src={Circle}
            alt=""
            className="absolute -z-10 w-5 -right-[35px] -top-[35px] opacity-0 fadeIn-animation-second hidden lg:block"
          />
          <img
            src={Muh}
            alt=""
            className="absolute -z-10 w-28 -right-[135px] -top-[120px] opacity-0 fadeIn-animation-third hidden lg:block"
          />
          <div className="bg-[#fafafa] p-5 rounded-xl h-[580px] flex items-center">
            <Accordion />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Faq;
