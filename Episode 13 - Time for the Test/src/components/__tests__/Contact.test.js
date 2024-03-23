import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//? NOTE:- Whenever you are Testing UI Component inside React, You will have to render that component on JSDOM First.
//* I will use "render" and this "render" is come from @testing-library/react" because we are using React Testing Library.

test("Should load Contact Us Component", () => {
  // This will be render to the JS DOM
  render(<Contact />);

  // There is one more method known as:- "screen" which will come from "@testing-library/react"

  const heading = screen.getByRole("heading");

  // Assertion:-
  expect(heading).toBeInTheDocument();
});
