import React, { useEffect, useState } from "react";
import "../index.css";

function Form(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsVisible(false);
        setTimeout(() => {
          props.toggleForm();
        }, 500);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [props]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      props.toggleForm();
    }, 500);
  };

  return (
    <div
      id="popup"
      className={`fixed inset-0 flex items-center justify-center z-50 px-2 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div
        className={`container relative max-w-5xl flex flex-col items-center bg-white p-6 rounded shadow-sm z-10 transition-all duration-500 ${
          isVisible ? "bottom-0" : "-bottom-[1000px]"
        }`}
      >
        <iframe
          src="https://airtable.com/embed/appVQeK2S27Ao22O2/pagzRDnO0wE9H3csR/form"
          className="bg-white w-full border rounded h-[70vh]"
          title="Formular zum Einreichen neuer Stationen"
        ></iframe>
        <button
          onClick={handleClose}
          className="border-[3px] px-4 py-3 mt-6 border-black font-inter-bold w-40 cta-button"
        >
          Schliessen
        </button>
      </div>
    </div>
  );
}

export default Form;
