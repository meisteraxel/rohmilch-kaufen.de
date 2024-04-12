import React from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import GrasIcon from "../assets/images/gras-icon.svg";
import SmallCircle from "../assets/images/small-circle.svg";
import Circle from "../assets/images/circle.svg";
import Muh from "../assets/images/muh.svg";
import "../index.css";

function Disclaimer() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-10 py-5 flex flex-col items-center mb-10">
        <h1 className="text-6xl text-center font-inter-black mb-10 mt-20">
          DISCLAIMER
          <br />
          <span className="font-pacifico mt-2 text-5xl">
            Rechtliches Gedöns
          </span>
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
            <div className="bg-white rounded-2xl p-5">
              <h2 className="font-inter-bold mb-5">Impressum</h2>
              <p className="font-inter mb-4">
                Diese Webseite dient ausschließlich privaten, nicht
                kommerziellen Zwecken.
                <br /> Aufgrund dessen verzichten wir auf die Angabe eines
                Impressums.
              </p>

              <p className="font-inter max-w-2xl">
                Ihr könnt uns jedoch über folgende Email erreichen:
                <a href="mailto:" className="underline ml-1">
                  rohmlich-kaufen@gmail.com
                </a>
              </p>
              <h2 className="font-inter-bold mt-8 mb-5">Haftungsausschluss:</h2>
              <p className="font-inter mb-5">
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
              <p className="font-inter">
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
    </>
  );
}

export default Disclaimer;
