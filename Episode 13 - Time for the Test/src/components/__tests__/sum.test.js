//! Our First Testing File

import { sum } from "../sum";

//* This first argumnets gives the "Description of the Test".
//* The second argumnet a callback function in this we have to write the implication of test case
test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //* This is the assertion :- expect(received).toBe(expected)
  expect(result).toBe(7);
});

//? NOTE:- Assertion is not a mandatory thing to write testCases because if we don't write any assertion which means we are not expect anything. But it is a good practice to write assertion in test cases.
