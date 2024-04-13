import React, { useState, useEffect } from "react";
import Pageload from "../components/pageload.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import GrasIcon from "../assets/images/gras-icon.svg";
import SmallCircle from "../assets/images/small-circle.svg";
import Circle from "../assets/images/circle.svg";
import Muh from "../assets/images/muh.svg";
import "../index.css";

function Home() {
  const [runPageload, setRunPageload] = useState(true);

  // Run Pageload Animation only on first visit
  useEffect(() => {
    if (sessionStorage.getItem("visited") === null) {
      setTimeout(() => sessionStorage.setItem("visited", true), 1000);
    } else if (sessionStorage.getItem("visited") === "true") {
      setRunPageload(false);
    }
  }, []);

  return (
    <>
      <Navbar />
      {runPageload && <Pageload />}
      <main className="container mx-auto py-5 flex flex-col items-center mb-10 px-5">
        <h1 className="md:text-6xl text-5xl text-center font-inter-black mb-10 mt-20">
          Rohmilch
          <br />
          <span className="font-pacifico mt-2 md:text-5xl text-4xl">
            Übersicht
          </span>
        </h1>
        <div className="container relative flex flex-col max-w-[1000px]">
          <img
            src={GrasIcon}
            alt=""
            className="absolute -z-10 w-8 h-8 -left-5 -top-6 sm:w-18 sm:h-18 sm:-left-12 sm:-top-12"
          />
          <img
            src={SmallCircle}
            alt=""
            className=" absolute -z-10 w-2 right-10 -top-[10px] sm:w-3 sm:-right-[10px] sm:-top-[20px] opacity-0 fadeIn-animation-first"
          />
          <img
            src={Circle}
            alt=""
            className="absolute -z-10 w-3 right-7 -top-[25px] sm:w-5 sm:-right-[35px] sm:-top-[35px] opacity-0 fadeIn-animation-second"
          />
          <img
            src={Muh}
            alt=""
            className="absolute -z-10 w-16 -right-3 -top-[80px] sm:w-28 sm:-right-[135px] sm:-top-[120px] opacity-0 fadeIn-animation-third"
          />
          <div className="bg-[#fafafa] p-5 rounded-xl">
            <iframe
              src="https://airtable.com/embed/appVQeK2S27Ao22O2/shrxwBedOL86REAZz?backgroundColor=purple&layout=card&viewControls=on"
              className="bg-white w-full h-[60vh] rounded-2xl border"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
