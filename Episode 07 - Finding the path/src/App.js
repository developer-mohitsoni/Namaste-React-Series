import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter} from "react-router-dom";

//! React Components:-

//? React Functional Component

const AppLayout = () => {
  //* console.log(<Body />); // This is a React Virtal DOM it prints an Object
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Load AppLayout Component when the route matches /
  },
  {
    path: "/about",
  }
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
