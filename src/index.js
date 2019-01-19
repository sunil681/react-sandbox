import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./my-component.js";

document.getElementById("app").innerHTML = `
<div></div>
`;

ReactDOM.render(<MyComponent />, document.getElementById("my"));
