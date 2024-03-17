import Food from "../../assets/food.png";
import { useEffect } from "react";
import useLoginState from "../utils/useLoginState";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "../../index.css";

const Header = () => {
  const { isLoggedIn, toggleLogin } = useLoginState();

  //* But How this const value is updated when we click on button?

  //* when we re-render the component by click on the button, this btnNameReact will be a new variable and it will be re-rendered with new value

  //! useState will re-render whole componenet when state changes
  console.log("Header Render");

  //* useEffect() will be called every time my Header Component renders my useEffect is called.

  //* If no dependency array => useEffect is called on every render

  //* If dependency arraay is empty = [] => useEffect is called on only initial render (just once)

  //* If dependency array is [btnNameReact] => useEffect is called every time btnNameReact is updated or changes.
  useEffect(() => {
    console.log("useEffect called");
  }, []); //* Here we put the dependency array over here. So, this dependency array changes the behaviour ofnit's render

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Food} alt="Food Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            {/*! When i click on "Home" page it will not refresh the whole page, it will just fetches  data from server */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button className="login" onClick={toggleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
