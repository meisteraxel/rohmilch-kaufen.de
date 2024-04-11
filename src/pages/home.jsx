import React, { useState } from "react";
import Form from "../components/form.jsx";
import Pageload from "../components/pageload.jsx";
import Footer from "../components/footer.jsx";
import GrasIcon from "../assets/images/gras.png";
import BubbleIcon from "../assets/images/gedanken.svg";
import "../index.css";
import Navbar from "../components/navbar.jsx";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <>
      <Navbar toggleForm={togglePopup} />
      <Pageload />
      <main className="container mx-auto px-10 py-20 flex flex-col items-center">
        <h1 className="text-6xl text-center font-inter-extrabold">
          Rohmilch
          <br />
          <span className="font-pacifico mt-2 text-5xl">Übersicht</span>
        </h1>
        <div className="container relative py-5 flex flex-col max-w-[1000px]">
          <img
            src={GrasIcon}
            alt=""
            className="w-24 h-24 absolute -z-10 -left-14 -top-10"
          />
          <img
            src={BubbleIcon}
            alt=""
            className="w-24 h-24 absolute -z-10 -right-[90px] -top-[75px]"
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
