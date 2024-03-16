import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.4924134&lng=77.673673&restaurantId=432507&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);

    setResInfo(json.data); // Now resInfo is set to the json.data
  };

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  // Yahan par mujhe dikkat aayi thi tabhi ye OR operator use kiya hai
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  // const { recommendedItemCards } = recommmended?.card?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name} - ₹{item.card.info.price / 100}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
