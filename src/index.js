import "./styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./components/my-component.js";

document.getElementById("app").innerHTML = `
<div></div>
`;

ReactDOM.render(<MyComponent />, document.getElementById("my"));
