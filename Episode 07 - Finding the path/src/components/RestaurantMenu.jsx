import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams(); // This will provide you to fetch resId from API link, Here "paramas" is a object containing resId

  // console.log(resId); // display resId in console

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId); // Here we are fetching the data from API link

    const json = await data.json();

    console.log(json);

    setResInfo(json.data); // Now resInfo is set to the json.data
  };

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  // Yahan par mujhe dikkat aayi thi tabhi ye OR operator use kiya hai
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

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
