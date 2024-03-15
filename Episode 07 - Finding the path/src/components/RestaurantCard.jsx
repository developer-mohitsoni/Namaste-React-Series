import { CDN_URL, styleCard } from "../utils/constants";
import "../../index.css";

const RestaurantCard = (props) => {
  // console.log(props);
  // Object Destructuring
  const { restData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    cuisines,
    costForTwo,
    locality,
  } = restData?.info;

  const { lastMileTravelString } = restData?.info?.sla;
  return (
    <div className="rest-card" style={styleCard} data-aos="zoom-in">
      <div className="food-img">
        <img src={CDN_URL + cloudinaryImageId} alt="Shankar Foods" />
      </div>
      <div className="food-info">
        <div
          className="nameAndRating"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="name" style={{ margin: "0.5rem 0px 0.37rem" }}>
            <h3 style={{ margin: "unset" }}>{name}</h3>
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
                {avgRatingString}
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
              {cuisines.join(", ")}
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
              {costForTwo}
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
              {locality}
            </p>
          </div>
          <div className="distance" style={{ margin: "7.5px" }}>
            <p style={{ margin: "unset" }}>
              <b>{lastMileTravelString}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
