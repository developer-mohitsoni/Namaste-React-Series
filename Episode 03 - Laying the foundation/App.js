import React from "react";
import ReactDOM from "react-dom/client";

//! React Element
const heading = (
  <h1 className="head1" tabIndex="1">
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
const name = "Anurag Singh ProCodrr";
const HeadingComponent = () => (
  <div id="container">
    {/* {number} */}
    <h2>Hello {name}</h2>
    <h2>{500 + 600}</h2>
    <h2>{console.log("Hello Mohit Soni")}</h2>
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Render React Element
// root.render(heading);

// Render Functional Component
root.render(<HeadingComponent />);
