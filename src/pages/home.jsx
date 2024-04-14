import React, { useState, useEffect } from "react";
import Pageload from "../components/pageload.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTop from "../components/scrolltotop.js";
import GrasIcon from "../assets/images/gras-icon.svg";
import SmallCircle from "../assets/images/small-circle.svg";
import Circle from "../assets/images/circle.svg";
import Muh from "../assets/images/muh.svg";
import "../index.css";

function Home() {
  const [runPageload, setRunPageload] = useState(true);
  const [toggleView, setToggleView] = useState(false);

  // Run Pageload Animation only on first visit
  useEffect(() => {
    if (sessionStorage.getItem("visited") === null) {
      setTimeout(() => sessionStorage.setItem("visited", true), 1000);
    } else if (sessionStorage.getItem("visited") === "true") {
      setRunPageload(false);
    }
  }, []);

  function switchView() {
    setToggleView(!toggleView);
  }

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
          <button
            onClick={switchView}
            className="cta-button w-36 self-center font-inter-bold"
          >
            {toggleView ? "Liste" : "Karte"}
          </button>
          <div className="bg-[#fafafa] p-5 rounded-xl">
            {toggleView && (
              <iframe
                src="https://airtable.com/embed/appVQeK2S27Ao22O2/shrxwBedOL86REAZz?backgroundColor=purple&layout=card&viewControls=on"
                className="bg-white w-full h-[60vh] rounded-2xl border"
              ></iframe>
            )}
            {!toggleView && (
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=18Hnv5oS2Geg97o_bpRmjqbcBEttpTK0&ehbc=2E312F&noprof=1"
                className="bg-white w-full h-[60vh] rounded-2xl border"
              ></iframe>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
