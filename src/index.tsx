import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import data from "./data";
import "./index.css";

ReactDOM.render(
  <App
    width={window.screen.availWidth}
    height={window.screen.availHeight}
    graph={data}
  />,
  document.getElementById("root") as HTMLElement
);
