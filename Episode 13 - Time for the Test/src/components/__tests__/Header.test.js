import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // suppose there are multiple button but i need to add only a button whose "name: "Login" "
  const loginButton = screen.getByRole("button", { name: "Login" });

  // Another way to get the login button
  //   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});
it("Should load Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartItems = screen.getByText("Cart - (0 items)");

  //? We also use "regex" to match the text it doesn't need to match exact string
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});
it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
