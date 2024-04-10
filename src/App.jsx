import React, { useState } from "react";
import Form from "./components/Form.jsx";
import GrasIcon from "./assets/images/gras.png";
import BubbleIcon from "./assets/images/gedanken.svg";
import "./index.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <main className="container mx-auto px-10 flex flex-col items-center">
      <h1 className="text-6xl text-center font-inter-extrabold">
        Rohmilch
        <br />
        <span className="font-pacifico mt-2 text-5xl">Übersicht</span>
      </h1>
      <div className="container relative py-5 flex flex-col max-w-[1000px]">
        <img
          src={GrasIcon}
          alt=""
          className="w-24 h-24 absolute -z-10 -left-14 -top-1"
        />
        <img
          src={BubbleIcon}
          alt=""
          className="w-24 h-24 absolute -z-10 -right-[90px] -top-[45px]"
        />
        <button
          className="self-end mb-4 bg-transparent cursor-pointer font-inter-bold text-sm underline hover:opacity-50 transition-opacity"
          onClick={togglePopup}
          id="toggleButton"
        >
          Vorschlag einreichen
        </button>
        <div className="bg-[#fafafa] p-5 rounded-xl">
          <iframe
            src="https://airtable.com/embed/appVQeK2S27Ao22O2/shrxwBedOL86REAZz?backgroundColor=purple&layout=card&viewControls=on"
            className="bg-white w-full h-[60vh] rounded-2xl border"
          ></iframe>
        </div>
      </div>
      {showPopup && <Form toggleForm={togglePopup} />}
    </main>
  );
}

export default App;
