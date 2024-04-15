import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Form from "./form";
import CowLogo from "../assets/images/nav-cow-logo.svg";
import "../index.css";

function Navbar() {
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showPopup]);

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
                  ? "border-b-4 border-black py-1 relative h-10"
                  : "py-1 relative nav-link h-10"
              }
            >
              <Link to="/" className="custom-cursor">
                Übersicht
              </Link>
            </li>
            <li
              className={
                location.pathname === "/faq"
                  ? "border-b-4 border-black py-1 relative h-10"
                  : "py-1 relative nav-link h-10"
              }
            >
              <Link to="/faq" className="custom-cursor">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <img src={CowLogo} alt="" className="h-28 hidden lg:block" />
        <button
          onClick={togglePopup}
          className="cta-button px-4 py-3 hidden lg:block"
        >
          Station hinzufügen
        </button>
        <Link to="/" className="lg:hidden">
          <img src={CowLogo} alt="" className="h-28 lg:hidden" />
        </Link>

        <div className="relative lg:hidden">
          <button
            onClick={toggleMenu}
            className="lg:hidden px-4 py-3 cta-button"
          >
            {showMenu ? "Schliessen" : "Menü"}
          </button>

          <div
            className={`absolute top-12 right-0 p-4 bg-black flex flex-col text-white items-center gap-4 transition-all transform ${
              showMenu ? "opacity-100 scale-100" : "opacity-0 scale-0"
            } origin-top-right w-[250px]`}
          >
            <Link to="/" className="self-start">
              Übersicht
            </Link>
            <Link to="/faq" className="self-start">
              FAQ
            </Link>
            <button
              onClick={togglePopup}
              className="cta-button-inverted w-full"
            >
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
