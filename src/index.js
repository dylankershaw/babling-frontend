import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import semantic from "semantic-ui-react";

ReactDOM.render(
  <App location={window.location.href} />,
  document.getElementById("root")
);
registerServiceWorker();
