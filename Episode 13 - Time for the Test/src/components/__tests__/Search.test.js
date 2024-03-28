import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// it("Should Search Restauarnt List for pizza text input", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );

//   const cardsBeforeSearch = screen.getAllByTestId("restCard");

//   expect(cardsBeforeSearch.length).toBe(9);

//   const searchBtn = screen.getByTestId("search");

//   const searchInput = screen.getByTestId("searchInput");

//   fireEvent.change(searchInput, { target: { value: "pizza" } });

//   fireEvent.click(searchBtn);

//   // screen should load 3 pizza rest cards

//   const cardsAfterSearch = screen.getAllByTestId("restCard");

//   expect(cardsAfterSearch.length).toBe(3);
// });

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("restCard");

  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByTestId("restCard");

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("restCard");

  expect(cardsAfterFilter.length).toBe(6);
});
