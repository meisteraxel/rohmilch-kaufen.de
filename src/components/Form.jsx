import React from "react";
import "../index.css";

function Form(props) {
  return (
    <div
      id="popup"
      className="flex fixed inset-0 items-center justify-center z-50"
    >
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <button
        onClick={props.toggleForm}
        className="absolute top-2 left-2 bg-black rounded-full w-10 h-10 text-white flex items-center justify-center cursor-pointer"
      >
        X
      </button>
      <div className="container bg-white p-8 rounded shadow-sm z-10">
        <iframe
          src="https://airtable.com/embed/appVQeK2S27Ao22O2/pagzRDnO0wE9H3csR/form"
          className="bg-white w-full border h-[80vh]"
        ></iframe>
      </div>
    </div>
  );
}

export default Form;
