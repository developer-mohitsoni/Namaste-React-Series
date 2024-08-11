import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import "../../index.css";

const Body = () => {
  //* Local State Varibale - Super Powerful Variable
  //! Array Destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  //*  Whenever state variables updtaes, react triggers a reconciliation cycle(Re-rendering of the component).
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("Body Render"); //* Whenever my Search input filed is updated, my body component is re-rendered 🚀

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=27.5009243&lng=77.6598626"
      );

      const json = await data.json();
      const restaurants =
        json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setListOfRestaurants([]); // Ensure it's an empty array if there's an error
      setFilteredRestaurant([]); // Ensure it's an empty array if there's an error
    }
  };

  // Showing a spinner is not a good practice

  //* Shimmer UI: A Better Way to Show Loading States

  //* Conditional Rendering - If list of restaurants is empty, show shimmer UI
  // if (listOfRestaurants.length === 0) {
  //   return <ShimmerUI />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  //* We can aslo use Ternary Operator as well to render Shimmer UI according to conditional rendering
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for Restaurants"
            value={searchText} // here empty value is tightly coupled with searchText, Now wwhen we want to change the value of input, we have to change the value of searchText. So, in that case we use onChange event to change the value of searchText with new updated value
            onChange={(e) => {
              setSearchText(e.target.value);

              // Implement this feature only when we want to filter the restaurant cards when the input field is empty
              if (e.target.value === "") {
                setFilteredRestaurant(listOfRestaurants);
              }
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              console.log(searchText);

              const filteredSearchRestraua = listOfRestaurants.filter((res) => {
                //* includes will check if the searchText is present in the name of the restaurant
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(filteredSearchRestraua);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn "
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRatingString >= 4
            );
            // console.log(listOfRestaurants);
            // Updating State from Local State Variable
            setFilteredRestaurant(filteredList);
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
        {filteredRestaurant.map((restaurant) => (
          //! You have to always mention unique key over here

          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restData={restaurant} />
          </Link>

          //* not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<< unique id (best practice)
        ))}
      </div>
    </div>
  );
};
export default Body;
