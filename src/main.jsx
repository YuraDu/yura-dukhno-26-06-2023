import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import state from "./Redux/store.js";

import { BrowserRouter } from "react-router-dom";

import "./i18next";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={state}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
