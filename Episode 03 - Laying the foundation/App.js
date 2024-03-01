import React from "react";
import ReactDOM from "react-dom/client";

//! React Element

//? Understand how to put ReactElement inside ReactElement
const elem = <span>React Element</span>;

const heading = (
  <h1 className="head1" tabIndex="1">
    {elem}
    <br />
    Namaste React By Akshay Saini ✅
  </h1>
);

console.log(heading); // Object

//! React Components:-

//? React Functional Component

const Title = function () {
  return (
    <h1 className="head2" tabIndex="5">
      Namaste React using JSX 🚀
    </h1>
  );
};

// How to render Title Component inside this HeadingComponent?
//! Component Comosition

//? We can write any JavaScript expression inside the {} in JSX

//? Understand how to put ReactElement inside the JSX Functional Component
const HeadingComponent = () => (
  <div id="container">
    {/* Adding ReactElement inside Functional Component */}
    {heading}

    {/* // These below three things are same way to render Functional Component */}
    <Title />
    <Title></Title>
    
    {/* You can also call Title function inside it in Curly braces {} */}

    {Title()}

    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Render React Element
// root.render(heading);

// Render Functional Component
root.render(<HeadingComponent />);
