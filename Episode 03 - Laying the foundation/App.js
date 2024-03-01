import React from "react";
import ReactDOM from "react-dom/client";

// This JSX Code => Babel transpiles it to => React.createElement => ReactElement => Object => After rendering into DOM => HTML Element

// Now, This JSX Code is transpiled into Babel to easily understand by JS Engine

// If you JSX is in single line this is Perfectly valid JSX
// If you write this JSX into multiple lines than you have to wrap it inside a parenthesis ()
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX ✅
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(jsxHeading);
