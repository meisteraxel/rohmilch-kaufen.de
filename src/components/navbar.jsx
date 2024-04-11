import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-around font-inter-bold">
      <div>
        <ul className="flex">
          <li className="px-8 py-8">
            <Link to="/">Home</Link>
          </li>
          <li className="px-8 py-8">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <button className="border-[3px] px-3 py-4 border-black">
        Station hinzufügen
      </button>
    </nav>
  );
}

export default Navbar;
