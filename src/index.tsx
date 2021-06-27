import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter
import { Provider } from "react-redux";
import { App } from "./app/App";
import { store } from "./redux/store";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
