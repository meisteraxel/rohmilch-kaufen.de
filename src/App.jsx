import React, { useState } from "react";
import Form from "./components/Form.jsx";
import BgImage from "./assets/images/background-wave.svg";
import "./index.css";

function App() {
  const iframeListStyle = {
    background: "transparent",
    border: "1px solid #ccc",
    width: "100%",
    height: "700px",
  };

  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <>
      <img src={BgImage} alt="" className="bg-image" />
      <main className="h-dvh container mx-auto px-5 flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl font-pacifico">Übersicht</h1>
        <iframe
          src="https://airtable.com/embed/appVQeK2S27Ao22O2/shrxwBedOL86REAZz?backgroundColor=purple&layout=card&viewControls=on"
          style={iframeListStyle}
        ></iframe>
        <button
          className="bg-slate-200 rounded p-2 cursor-pointer"
          onClick={togglePopup}
          id="toggleButton"
        >
          Station hinzufügen
        </button>
        {showPopup && <Form toggleForm={togglePopup} />}
      </main>
    </>
  );
}

export default App;
