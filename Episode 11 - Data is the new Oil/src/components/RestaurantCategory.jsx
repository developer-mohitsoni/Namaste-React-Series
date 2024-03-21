import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);

  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    // console.log("clicked");
    setShowItem(!showItem);
  };
  return (
    <div>
      {/*Header */}
      <div className="accordion-Title w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 select-none">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItem && <ItemsList items={data.itemCards} />}
      </div>
      {/*Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
