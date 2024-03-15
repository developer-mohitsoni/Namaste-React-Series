import Food from "../../assets/food.png";
import { useState, useEffect } from "react";
import "../../index.css";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //* But How this const value is updated when we click on button?

  //* when we re-render the component by click on the button, this btnNameReact will be a new variable and it will be re-rendered with new value

  //! useState will re-render whole componenet when state changes
  console.log("Header Render");

  //* useEffect() will be called every time my Header Component renders my useEffect is called.

  //* If no dependency array => useEffect is called on every render

  //* If dependency arraay is empty = [] => useEffect is called on only initial render (just once)
  
  useEffect(() => {
    console.log("useEffect called");
  }, []); //* Here we put the dependency array over here. So, this dependency array changes the behaviour ofnit's render
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
