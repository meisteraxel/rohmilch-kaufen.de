import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/">Go to home page</Link>
    </div>
  );
}

export default Error;
