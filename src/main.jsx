import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartContextAPI } from "./components/CartContextAPI.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextAPI>
        <App />
        <Toaster />
      </CartContextAPI>
    </BrowserRouter>
  </React.StrictMode>
);
