import React from "react";
import ReactDOM from "react-dom/client";

//! React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX ✅
  </h1>
);

console.log(heading); // Object

//! React Components:-

//? React Functional Component

const HeadingComponent3 = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);
