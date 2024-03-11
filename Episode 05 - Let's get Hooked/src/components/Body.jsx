import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";
import "../../index.css";

const Body = () => {
  //* Local State Varibale - Super Powerful Variable
  //! Array Destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);

  //* Normal JS Variable
  // let listOfRestaurants;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn "
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRatingString >= 4
            );
            // console.log(listOfRestaurants);
            // Updating State from Local State Variable
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div
        className="rest-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "75px" }}
      >
        {/* Looping restList using map */}
        {listOfRestaurants.map((restaurant) => (
          //! You have to always mention unique key over here
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />

          //* not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<< unique id (best practice)
        ))}
      </div>
    </div>
  );
};
export default Body;
