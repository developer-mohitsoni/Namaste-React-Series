import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import "../../index.css";

const Body = () => {
  //* Local State Varibale - Super Powerful Variable
  //! Array Destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch will return a promise
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4976751&lng=77.657273&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);

    //! Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Showing a spinner is not a good practice

  //* Shimmer UI: A Better Way to Show Loading States

  //* Conditional Rendering - If list of restaurants is empty, show shimmer UI
  if (listOfRestaurants.length === 0) {
    return <ShimmerUI />;
  }

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
