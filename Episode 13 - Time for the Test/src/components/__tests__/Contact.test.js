import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//? NOTE:- Whenever you are Testing UI Component inside React, You will have to render that component on JSDOM First.
//* I will use "render" and this "render" is come from @testing-library/react" because we are using React Testing Library.

//! Grouping the Test Cases:-

describe("Contact Us Page Test Cases",()=>{
  test("Should load Contact Us Component", () => {
    // This will be render to the JS DOM
    render(<Contact />);
  
    // There is one more method known as:- "screen" which will come from "@testing-library/react"
  
    const heading = screen.getByRole("heading");
  
    // Assertion:-
    expect(heading).toBeInTheDocument();
  });
  
  //* Writing another test case to check whether my component has Button or not.
  
  test("Should load Button inside my Contact Us Component", () => {
    render(<Contact />);
  
    // There is one more way to check whether my component has placeholdren inside HTML form or not.
    // If my screen has placeholdren inside my render Component then it will be passed the test case
    const button = screen.getByPlaceholderText("name");
  
    expect(button).toBeInTheDocument();
  });
  
  //* Suppose if i want to test whether my Rendered Component has 2 input boxes or not.
  
  test("Should load 2 input boxes on Contact Component", () => {
    render(<Contact />);
  
    //* The Role of input boxes is "textbox"
    //! NOTE:- If there are multiple items which matches the query and you are using getByRole(),getByPlaceholderText() then it will throw an error. You should use getAllByRole() or getAllByPlaceholderText().
  
    //* Querying
    const inputBoxes = screen.getAllByRole("textbox");
  
    console.log(inputBoxes[0]);
  
    //* Assertion
    expect(inputBoxes.length).toBe(2);
  
    //* You can also write like this with the help of "not.toBe()"
    expect(inputBoxes.length).not.toBe(3);
  });
});

