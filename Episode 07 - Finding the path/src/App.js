import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//! React Components:-

//? React Functional Component

const AppLayout = () => {
  //* console.log(<Body />); // This is a React Virtal DOM it prints an Object
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Load AppLayout Component when the route matches /
    children: [
      {
        path: "/",
        element: <Body />, // Load Body Component when the route matches /
      },
      {
        path: "/about",
        element: <About />, // Load About Component when the route matches /about
      },
      {
        path: "/contact",
        element: <Contact />, // Load Contact Component when the route matches /contact
      },
    ],
    errorElement: <Error />, // Load Error Component when the route does not match any route above it
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
