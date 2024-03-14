import Food from "../../assets/food.png";
import "../../index.css";

const Header = () => {
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
          <button className="login">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
