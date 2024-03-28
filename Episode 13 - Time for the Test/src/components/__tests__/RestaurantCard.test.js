import { render, screen } from "@testing-library/react";
import RestaurantCard, { withFoodType } from "../RestaurantCard";
import MOCK_DATA from "../mocks/restCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with Data", () => {
  render(<RestaurantCard restData={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});
