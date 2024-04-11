import React from "react";
import "../index.css";

function Form(props) {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      props.toggleForm();
    }
  });

  return (
    <div
      id="popup"
      className="flex fixed inset-0 items-center justify-center z-50"
    >
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="container flex flex-col items-center bg-white p-6 rounded shadow-sm z-10">
        <iframe
          src="https://airtable.com/embed/appVQeK2S27Ao22O2/pagzRDnO0wE9H3csR/form"
          className="bg-white w-full border rounded h-[80vh]"
        ></iframe>
        <button
          onClick={props.toggleForm}
          className="border-[3px] px-3 py-2 mt-6 border-black font-inter-bold w-40 cta-button"
        >
          Schliessen
        </button>
      </div>
    </div>
  );
}

export default Form;
