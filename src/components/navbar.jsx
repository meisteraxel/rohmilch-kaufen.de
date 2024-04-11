import React from "react";
import "../index.css";
import CowLogo from "../assets/images/nav-cow-logo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-around font-inter-bold mt-3">
      <div>
        <ul className="flex gap-20">
          <li
            className={
              location.pathname === "/"
                ? "border-b-4 border-black py-1"
                : "py-1"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              location.pathname === "/faq"
                ? "border-b-4 border-black py-1"
                : "py-1"
            }
          >
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <img src={CowLogo} alt="" className="h-28" />
      <button
        onClick={props.toggleForm}
        className="border-[3px] px-3 py-4 border-black"
      >
        Station hinzufügen
      </button>
    </nav>
  );
}

export default Navbar;
