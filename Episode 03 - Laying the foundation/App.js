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
// Everything is a Component in a React.

// What is Component:- A component is a reusable piece of code that is responsible for rendering a part of the UI.

// 1. Class Based Component:- Old Way of writing code

// 2. Function Component:- New Way of writing code. Just a normal JS Function which return some piece of JSX or something that can return React Element.

  //? React Functional Component
  const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>;
  };

  //* Same:-

  const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;

  //* Same:-

  const HeadingComponent3 = () => (
    <h1 className="heading">Namaste React Functional Component</h1>
  );


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);
