import React from "react";
import "../index.css";

function Navbar() {
  return (
    <nav className="flex items-center justify-between font-inter-bold px-5">
      <div>
        <ul className="flex gap-4">
          <li>
            <p>Übersicht</p>
          </li>
          <li>
            <p>FAQ</p>
          </li>
        </ul>
      </div>
      <button>Station hinzufügen</button>
    </nav>
  );
}

export default Navbar;
