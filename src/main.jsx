import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home.jsx";
import Faq from "./pages/faq.jsx";
import Disclaimer from "./pages/disclaimer.jsx";
import Error from "./pages/error.jsx";
import "./index.css";
import Snowfall from "react-snowfall";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/disclaimer",
    element: <Disclaimer />,
  },
]);

const month = new Date().getMonth();
const showSnowfall = month === 10 || month === 11 || month === 0 || month === 1;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {showSnowfall && (
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
    )}
  </React.StrictMode>
);
