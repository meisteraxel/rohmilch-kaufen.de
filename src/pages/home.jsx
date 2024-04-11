import React, { useState } from "react";
import Pageload from "../components/pageload.jsx";
import Footer from "../components/footer.jsx";
import GrasIcon from "../assets/images/gras-icon.svg";
import BubbleIcon from "../assets/images/gedanken.svg";
import "../index.css";
import Navbar from "../components/navbar.jsx";
import Form from "../components/form.jsx";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <>
      <Navbar toggleForm={togglePopup} />
      <Pageload />
      <main className="container mx-auto px-10 py-5 flex flex-col items-center">
        <h1 className="text-6xl text-center font-inter-extrabold mb-10 mt-20">
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
            src={BubbleIcon}
            alt=""
            className="w-24 h-24 absolute -z-10 -right-[95px] -top-[95px]"
          />
          <div className="bg-[#fafafa] p-5 rounded-xl">
            <iframe
              src="https://airtable.com/embed/appVQeK2S27Ao22O2/shrxwBedOL86REAZz?backgroundColor=purple&layout=card&viewControls=on"
              className="bg-white w-full h-[60vh] rounded-2xl border"
            ></iframe>
          </div>
        </div>
        {showPopup && <Form toggleForm={togglePopup} />}
      </main>
      <Footer />
    </>
  );
}

export default Home;
