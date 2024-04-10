import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Pageload from "./components/Pageload.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Pageload />
    <App />
    <Footer />
  </React.StrictMode>
);
