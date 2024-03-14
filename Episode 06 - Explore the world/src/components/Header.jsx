import Food from "../../assets/food.png";
import { useState } from "react";
import "../../index.css";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //* But How this const value is updated when we click on button?

  //* when we re-render the component by click on the button, this btnNameReact will be a new variable and it will be re-rendered with new value

  //! useState will re-render whole componenet when state changes
  console.log("Header Render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Food} alt="Food Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
