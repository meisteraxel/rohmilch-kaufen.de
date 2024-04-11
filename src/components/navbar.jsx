import React, { useState } from "react";
import "../index.css";
import CowLogo from "../assets/images/nav-cow-logo.png";
import { Link, useLocation } from "react-router-dom";
import Form from "./form";

function Navbar() {
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <>
      <nav className="flex items-center justify-around font-inter-bold mt-3">
        <div>
          <ul className="flex gap-20">
            <li
              className={
                location.pathname === "/"
                  ? "border-b-4 border-black py-1 relative"
                  : "py-1 relative nav-link"
              }
            >
              <Link to="/" className="custom-cursor">
                Übersicht
              </Link>
            </li>
            <li
              className={
                location.pathname === "/faq"
                  ? "border-b-4 border-black py-1 relative"
                  : "py-1 relative nav-link"
              }
            >
              <Link to="/faq" className="custom-cursor">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <img src={CowLogo} alt="" className="h-28" />
        <button onClick={togglePopup} className="cta-button">
          Station hinzufügen
        </button>
      </nav>
      {showPopup && <Form toggleForm={togglePopup} />}
    </>
  );
}

export default Navbar;
