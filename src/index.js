import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import Firebase, { FirebaseContext } from "./firebase/index";

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
