import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home.jsx";
import Faq from "./pages/faq.jsx";
import Disclaimer from "./pages/disclaimer.jsx";
import Error from "./pages/error.jsx";
import "./index.css";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
