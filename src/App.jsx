import React, { useState } from "react";
import Form from "./components/Form.jsx";
import GrasIcon from "./assets/images/gras.png";
import "./index.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <main className="mx-auto px-10 flex flex-col items-center gap-3">
      <h1 className="text-6xl font-inter-extrabold mt-24">
        Rohmilch
        <br />
        <span className="font-pacifico mt-2 relative left-24 text-5xl">
          Übersicht
        </span>
      </h1>
      <div className="container relative py-5 flex flex-col">
        <img
          src={GrasIcon}
          alt=""
          className="w-24 h-24 absolute -z-10 -left-14 -top-1"
        />
        <button
          className="self-end mb-4 bg-transparent cursor-pointer font-inter-bold text-sm underline hover:opacity-50 transition-opacity"
          onClick={togglePopup}
          id="toggleButton"
        >
          Vorschlag einreichen
        </button>
        <iframe
          src="https://airtable.com/embed/appVQeK2S27Ao22O2/shrxwBedOL86REAZz?backgroundColor=purple&layout=card&viewControls=on"
          className="bg-white w-full h-[80vh] shadow-[0_28px_40px_0px_rgba(0,0,0,0.5)]"
        ></iframe>
      </div>
      {showPopup && <Form toggleForm={togglePopup} />}
    </main>
  );
}

export default App;
