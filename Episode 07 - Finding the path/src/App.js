import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    errorElement: <Error />, // Load Error Component when the route does not match any route above it
  },
  {
    path: "/about",
    element: <About />, // Load About Component when the route matches /about
  },
  {
    path: "/contact",
    element: <Contact />, // Load Contact Component when the route matches /contact
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
