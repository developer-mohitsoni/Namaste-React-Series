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

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// How to render Title Component inside this HeadingComponent?
//! Component Comosition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Render React Element
// root.render(heading);

// Render Functional Component
root.render(<HeadingComponent />);
