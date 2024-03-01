import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement => Object => After Rendering into DOM => Becomes HTML Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

// It is not a valid Pure JS
// JSX (transpiled before it reaches the JS Engine) By- Parcel and this responsibility handle by - Babel

// This JSX Code => React.createElement => ReactElement => Object => After rendering into DOM => HTML Element

// Now, This JSX Code is transpiled into Babel to easily understand by JS Engine
const jsxHeading = <h1 id="heading">Namaste React using JSX ✅</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(jsxHeading);
