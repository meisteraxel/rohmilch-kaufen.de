import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/" className="underline">
        Go to home page
      </Link>
    </div>
  );
}

export default Error;
