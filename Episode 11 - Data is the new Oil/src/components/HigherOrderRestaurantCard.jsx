//! Higer Order Component

//input - RestaurantCard => RestaurantCardCategory

export const withFoodType = (RestaurantCard) => {
  // Now this return function will return some pieces of JSX
  // We will receive props here:-
  return (props) => {
    // Enhance Component
    return (
      <div>
        <label className="absolute z-10 m-2 p-2 rounded-xl bg-black text-white">
          Veg
        </label>
        {/* Now we pass props to our enhanced component */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
