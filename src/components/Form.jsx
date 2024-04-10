import React from "react";
import "../index.css";

function Form(props) {
  return (
    <div
      id="popup"
      className="flex fixed inset-0 items-center justify-center z-50"
    >
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="container flex flex-col items-center bg-white p-8 rounded shadow-sm z-10">
        <iframe
          src="https://airtable.com/embed/appVQeK2S27Ao22O2/pagzRDnO0wE9H3csR/form"
          className="bg-white w-full border rounded h-[80vh]"
        ></iframe>
        <button
          onClick={props.toggleForm}
          className="bg-[rgb(65,67,71)] rounded-md h-8 text-white font-semibold w-32 mt-6 hover:opacity-50 transition-opacity"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Form;
