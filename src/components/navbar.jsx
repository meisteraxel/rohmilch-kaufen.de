import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Form from "./form";
import CowLogo from "../assets/images/nav-cow-logo.svg";
import PlusIcon from "../assets/images/plus-icon.svg";
import "../index.css";

function Navbar() {
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <nav className="flex items-center justify-around font-inter-bold mt-3 max-lg:justify-between max-lg:px-5">
        <div className="hidden lg:block">
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
        <img src={CowLogo} alt="" className="h-28 hidden lg:block" />
        <button onClick={togglePopup} className="cta-button hidden lg:block">
          Station hinzufügen
        </button>
        <img src={CowLogo} alt="" className="h-28 lg:hidden" />
        <div className="relative lg:hidden">
          <button onClick={toggleMenu} className="lg:hidden">
            <img
              src={PlusIcon}
              alt=""
              className={
                showMenu ? "rotate-45 transition-all" : "transition-all"
              }
            />
          </button>

          <div
            className={`absolute top-8 right-2 p-4 bg-white flex flex-col items-center gap-4 border-4 border-black rounded-lg transition-all transform ${
              showMenu ? "opacity-100 scale-100" : "opacity-0 scale-0"
            } origin-top-right w-[250px]`}
          >
            <Link to="/">Übersicht</Link>
            <Link to="/faq">FAQ</Link>
            <button onClick={togglePopup} className="cta-button">
              Station hinzufügen
            </button>
          </div>
        </div>
      </nav>
      {showPopup && <Form toggleForm={togglePopup} />}
    </>
  );
}

export default Navbar;
