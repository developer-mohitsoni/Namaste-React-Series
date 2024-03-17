import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ShimmerUI from "./components/ShimmerUI";
// import Grocery from "./components/Grocery";

//! React Components:-

//? React Functional Component

//* Chunking
//* Code Splitting
//* Dynamic Bundling
//* Lazy Loading
//* On Demand Loading
//* Dynamic Import

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  //* console.log(<Body />); // This is a React Virtal DOM it prints an Object
  return (
    <div className="app">
      <Header />
      <Outlet />
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
        element: <Suspense><About /></Suspense>, // Load About Component when the route matches /about
      },
      {
        path: "/contact",
        element: <Contact />, // Load Contact Component when the route matches /contact
      },
      {
        path: "/cart",
        element: <Cart />, // Load Cart Component when the route matches /cart
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ), // Load Contact Component when the route matches /contact
      },
      {
        path: "/restaurants/:resId", // Load Restaurants Component when the route matches /restaurants with dynamic parameter :resId

        element: <RestaurantMenu />, // Load Restaurants Component when the route matches /restaurants with dynamic parameter :resId
      },
    ],
    errorElement: <Error />, // Load Error Component when the route does not match any route above it
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
