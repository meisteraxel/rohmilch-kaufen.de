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
      <main className="container mx-auto px-10 py-5 flex flex-col items-center mb-10">
        <h1 className="text-6xl text-center font-inter-black mb-10 mt-20">
          Rohmilch
          <br />
          <span className="font-pacifico mt-2 text-5xl">Übersicht</span>
        </h1>
        <div className="container relative flex flex-col max-w-[1000px]">
          <img
            src={GrasIcon}
            alt=""
            className="w-18 h-18 absolute -z-10 -left-12 -top-12"
          />
          <img
            src={SmallCircle}
            alt=""
            className=" absolute w-3 -z-10 -right-[10px] -top-[20px] opacity-0 fadeIn-animation-first"
          />
          <img
            src={Circle}
            alt=""
            className="absolute w-5 -z-10 -right-[35px] -top-[35px] opacity-0 fadeIn-animation-second"
          />
          <img
            src={Muh}
            alt=""
            className="absolute w-28 -z-10 -right-[135px] -top-[120px] opacity-0 fadeIn-animation-third"
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
