import React, { useState, useEffect } from "react";
import Pageload from "../components/pageload.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTop from "../components/scrolltotop.js";
import GrasIcon from "../assets/images/gras-icon.svg";
import SmallCircle from "../assets/images/small-circle.svg";
import Circle from "../assets/images/circle.svg";
import Muh from "../assets/images/muh.svg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../index.css";

function Home() {
  const pageTitle = "Frische Quelle: Rohmilch finden & genießen";
  const [runPageload, setRunPageload] = useState(true);
  const [toggleView, setToggleView] = useState("Karte");

  // Run Pageload Animation only on first visit
  useEffect(() => {
    if (sessionStorage.getItem("visited") === null) {
      setTimeout(() => {
        sessionStorage.setItem("visited", true);
        document.body.classList.add("show-background");
      }, 1000);
    } else if (sessionStorage.getItem("visited") === "true") {
      setRunPageload(false);
      document.body.classList.add("show-background");
    }
  }, []);

  function setList() {
    setToggleView("Liste");
  }

  function setMap() {
    setToggleView("Karte");
  }

  useEffect(() => {
    const cookieBotWrapper = document.getElementById("CookiebotDeclaration");
    if (cookieBotWrapper) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.type = "text/javascript";
      script.async = true;
      script.src = `https://consent.cookiebot.com/${process.env.NEXT_PUBLIC_COOKIEBOT_DOMAIN_GROUP_ID}/cd.js`;

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Navbar />
      {runPageload && <Pageload />}
      <main className="container mx-auto py-5 flex flex-col items-center mb-10 px-5">
        <motion.h1
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "spring" }}
          className="md:text-6xl text-5xl text-center font-inter-black mb-10 mt-20"
        >
          Rohmilch
          <br />
          <span className="font-pacifico mt-2 md:text-5xl text-4xl">
            Übersicht
          </span>
        </motion.h1>
        <div className="container relative flex flex-col max-w-[1000px]">
          <img
            src={GrasIcon}
            alt=""
            className="absolute -z-10 w-16 h-16 -left-12 top-1 hidden lg:block"
          />
          <motion.img
            src={SmallCircle}
            alt=""
            className=" absolute -z-10 w-3 -right-[10px] -top-[20px] opacity-0 fadeIn-animation-first hidden lg:block"
            animate={{
              x: [0, 3, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.img
            src={Circle}
            alt=""
            className="absolute -z-10 w-5 -right-[35px] -top-[35px] opacity-0 fadeIn-animation-second hidden lg:block"
            animate={{
              x: [0, 4.5, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
          />
          <motion.img
            src={Muh}
            alt=""
            className="absolute -z-10 w-28 -right-[135px] -top-[120px] opacity-0 fadeIn-animation-third hidden lg:block"
            animate={{
              x: [0, 6, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          />
          <div className="md:self-end self-center mb-3">
            <button
              onClick={setList}
              className={`cta-button w-24 px-4 py-2 font-inter-bold ${
                toggleView === "Liste" ? "bg-black text-white !important" : ""
              }`}
            >
              Liste
            </button>
            <button
              onClick={setMap}
              className={`cta-button w-24 px-4 py-2 font-inter-bold ${
                toggleView === "Karte" ? "bg-black text-white" : ""
              }`}
            >
              Karte
            </button>
          </div>
          <div className="bg-[#fafafa] p-5 rounded-xl">
            {toggleView === "Liste" && (
              <iframe
                src="https://airtable.com/embed/appVQeK2S27Ao22O2/shrxwBedOL86REAZz?backgroundColor=purple&layout=card&viewControls=on"
                className="bg-white w-full h-[60vh] rounded-2xl border"
                title="Listenansicht aller Stationen"
              ></iframe>
            )}
            {toggleView === "Karte" && (
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1j-vSFXpJLG0BVcDzCjzG6S4hqTxNTvs&ehbc=2E312F&noprof=1"
                className="bg-white w-full h-[60vh] rounded-2xl border"
                title="Kartenansicht aller Stationen"
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
