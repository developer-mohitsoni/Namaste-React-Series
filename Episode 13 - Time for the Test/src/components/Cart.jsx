import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import ItemsList from "./ItemsList";

const Cart = () => {
  // read the cart drom the store using "Selector" (Subscribing to the Cart)
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-bold text-xl">
            Cart is Empty, Add items to the Cart
          </h1>
        )}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
