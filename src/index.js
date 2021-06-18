import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import Firebase, { FirebaseContext } from "./firebase/index";
import CookieProvider from "./session/index";

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase}>
    <CookieProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CookieProvider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
