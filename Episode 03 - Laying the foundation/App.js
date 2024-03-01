import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => After Rendering into DOM => Becomes HTML Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);



// JSX:- JSX is a JavaScript Syntax which is easier to create React Element.
// JSX - is not HTML or XML but it looks like HTML or XML syntax
const jsxHeading = <h1 id="heading">Namaste React using JSX ✅</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(jsxHeading);
