import React, { useState } from "react";
import Form from "./components/Form.jsx";
import BgImage from "./assets/images/background-wave.svg";
import Gras from "./assets/images/gras.png";
import "./index.css";

function App() {
  const iframeListStyle = {
    background: "transparent",
    border: "1px solid #ccc",
    width: "100%",
    height: "700px",
    "box-shadow": "0px 28px 40px 0px rgba(0,0,0,0.5)",
  };

  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <main className="mx-auto px-5 flex flex-col items-center gap-3">
      <h1 className="text-6xl font-inter-extrabold mt-24">
        Rohmilch
        <span className="font-pacifico block mt-2 relative left-24 text-5xl">
          Übersicht
        </span>
      </h1>
      <div className="container relative py-5 flex flex-col">
        <img
          src={Gras}
          alt=""
          className="w-24 h-24 absolute -z-10 -left-14 -top-1"
        />
        <button
          className="self-end mb-4 bg-transparent cursor-pointer font-inter-bold text-sm underline"
          onClick={togglePopup}
          id="toggleButton"
        >
          Vorschlag einreichen
        </button>
        <iframe
          src="https://airtable.com/embed/appVQeK2S27Ao22O2/shrxwBedOL86REAZz?backgroundColor=purple&layout=card&viewControls=on"
          style={iframeListStyle}
        ></iframe>
      </div>
      {showPopup && <Form toggleForm={togglePopup} />}
    </main>
  );
}

export default App;
