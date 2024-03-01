import React from "react";
import ReactDOM from "react-dom/client";

// This Complexity of Code is Easily handle by JSX in React.js
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),

  // If you give two elements as a child, then you have to wrap them in an array
]);

console.log(parent); // print object

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
