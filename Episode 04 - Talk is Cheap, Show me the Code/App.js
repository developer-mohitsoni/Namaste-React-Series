import React from "react";
import ReactDOM from "react-dom/client";

import Food from "./assets/food.png";

/**
 * Header
 *    - Logo
 *    - Nav Items
 *  Body
 *    - Search
 *    - Restaurant Container
 *        - Image
 *        - Name of Restaurant, Rating, Cuisines, Delivery Time
 *  Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 */

//! React Element

//! React Components:-

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
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#fff",
};

const RestaurantCard = (props) => {
  // console.log(props);
  props;
  return (
    <div className="rest-card" style={styleCard}>
      <div className="food-img">
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/3/18875863/a7499d72024b4c6f7ef661ecf3cbc8c4_featured_v2.jpg?output-format=webp"
          alt="Shankar Foods"
        />
      </div>
      <div className="food-info">
        <div
          className="nameAndRating"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="name" style={{ margin: "0.5rem 0px 0.37rem" }}>
            <h3 style={{ margin: "unset" }}>{props.restName}</h3>
          </div>
          <div
            className="rating"
            style={{ maxWidth: "16%", display: "flex", alignItems: "center" }}
          >
            <div
              className="rating-box"
              style={{
                backgroundColor: "green",
                display: "flex",
                gap: "1px",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              <div className="rating-number" style={{ color: "#fff" }}>
                {props.rating}
              </div>
              <div className="star">
                <i className="sc-rbbb40-1 iFnyeo" color="#FFFFFF">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    width="0.8rem"
                    height="0.6rem"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    className="sc-rbbb40-0 fauQLv"
                  >
                    <title>star-fill</title>
                    <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cuisinesAndPrice"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="cuisines" style={{ margin: "0.5rem 0px 0.37rem" }}>
            <p
              style={{
                margin: "unset",
                width: "108.64px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textAlign: "left",
              }}
            >
              {props.cuisine}
            </p>
          </div>
          <div className="price" style={{ margin: "7.5px" }}>
            <p
              style={{
                margin: "unset",
                width: "58.2px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textAlign: "left",
              }}
            >
              ₹{props.price} for two
            </p>
          </div>
        </div>
        <div
          className="addressAndDistance"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="address" style={{ margin: "0.5rem 0px 0.37rem" }}>
            <p
              style={{
                margin: "unset",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textAlign: "left",
              }}
            >
              Mathura Locality, Mathura
            </p>
          </div>
          <div className="distance" style={{ margin: "7.5px" }}>
            <p style={{ margin: "unset" }}>
              <b>{props.distance}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div
        className="rest-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "75px" }}
      >
        <RestaurantCard
          restName="Shankar Foods"
          cuisine="Chinese, North Indian"
          rating={4.1}
          price={400}
          distance={1.3 + " km"}
        />
        <RestaurantCard
          restName="Brijwasi Centrum"
          cuisine="Chinese, Continental"
          rating={4.2}
          price={1000}
          distance={48 + " m"}
        />
        <RestaurantCard
          restName="Yogiraj Restaurant"
          cuisine="South Indian, North Indian"
          rating={3.9}
          price={200}
          distance={226 + " m"}
        />
        <RestaurantCard
          restName="Loft Cafe & Restaurant"
          cuisine="Loft Cafe & Restaurant"
          rating={4.1}
          price={400}
          distance={1.9 + " km"}
        />
        <RestaurantCard
          restName="Shankar Mithai Wala"
          cuisine="Mithai, Beverages"
          rating={4.5}
          price={350}
          distance={1.4 + " km"}
        />
      </div>
    </div>
  );
};

//? React Functional Component

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
