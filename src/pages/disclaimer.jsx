import React, { useEffect } from "react";
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

function Disclaimer() {
  const pageTitle = "Disclaimer";

  useEffect(() => {
    document.body.classList.add("show-background");
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Navbar />
      <main className="container mx-auto py-5 flex flex-col items-center mb-10 px-5">
        <motion.h1
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "spring" }}
          className="md:text-6xl text-5xl text-center font-inter-black mt-20 mb-10"
        >
          DISCLAIMER
          <br />
          <span className="font-pacifico mt-2 md:text-5xl text-4xl">
            Rechtliches Gedöns
          </span>
        </motion.h1>
        <div className="container relative flex flex-col max-w-[1000px]">
          <img
            src={GrasIcon}
            alt=""
            className="absolute -z-10 w-16 h-16 -left-12 -top-12 hidden lg:block"
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
          <div className="bg-[#fafafa] p-5 rounded-xl">
            <div className="bg-white rounded-2xl p-5">
              <h2 className="font-inter-bold mb-5 md:text-base text-xs">
                Impressum
              </h2>
              <p className="font-inter mb-4 md:text-base text-xs">
                Diese Webseite dient ausschließlich privaten, nicht
                kommerziellen Zwecken.
                <br /> Aufgrund dessen verzichten wir auf die Angabe eines
                Impressums.
              </p>

              <p className="font-inter max-w-2xl md:text-base text-xs">
                Ihr könnt uns jedoch über folgende Email erreichen:
                <a
                  href="mailto:rohmilch.kaufen@gmail.com"
                  className="underline ml-1 md:text-base text-xs"
                >
                  rohmilch.kaufen@gmail.com
                </a>
              </p>
              <h2 className="font-inter-bold mt-8 mb-5 md:text-base text-xs">
                Haftungsausschluss:
              </h2>
              <p className="font-inter mb-5 md:text-base text-xs">
                Die Informationen auf dieser Website dienen ausschließlich zu
                Informationszwecken. Obwohl wir uns bemühen, genaue und aktuelle
                Informationen bereitzustellen, übernehmen wir keine Garantie für
                die Richtigkeit, Vollständigkeit oder Aktualität der
                bereitgestellten Informationen. Jegliche Handlungen, die auf den
                Informationen dieser Website basieren, liegen in der alleinigen
                Verantwortung des Nutzers. Wir übernehmen keine Haftung für
                Schäden oder Verluste, die durch die Verwendung oder das
                Vertrauen auf die auf dieser Website bereitgestellten
                Informationen entstehen.
              </p>
              <p className="font-inter md:text-base text-xs">
                Die Einbindung von Links zu externen Websites bedeutet nicht,
                dass wir die Inhalte dieser Websites unterstützen oder für sie
                verantwortlich sind. Wir distanzieren uns ausdrücklich von allen
                Inhalten externer Websites, auf die von dieser Website aus
                verlinkt wird. Für den Inhalt der verlinkten Seiten sind
                ausschließlich deren Betreiber verantwortlich. Bitte beachten
                Sie, dass Gesetze und Vorschriften variieren können und sich
                ändern können, und es liegt in der Verantwortung des Nutzers
                sicherzustellen, dass die auf dieser Website bereitgestellten
                Informationen den aktuellen rechtlichen Anforderungen
                entsprechen.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Disclaimer;
