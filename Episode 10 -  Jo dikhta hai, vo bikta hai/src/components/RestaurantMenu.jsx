import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import "../../index.css";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  // Yahan par mujhe dikkat aayi thi tabhi ye OR operator use kiya hai
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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
              {item.card.info.name} - ₹
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
