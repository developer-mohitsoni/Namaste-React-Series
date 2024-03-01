import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => After Rendering into DOM => Becomes HTML Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading); // Print Object

const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render() takes this object and convert to and HTML element and push it io the Browser it will replace everything whatever written inside the <div id="root">......</div>
root.render(heading);
