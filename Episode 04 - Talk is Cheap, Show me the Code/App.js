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
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="Shankar Foods"
        />
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

const restList = [
  {
    info: {
      id: "112782",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Dampier Nagar",
      areaName: "Shankar Vihar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4e65ab36-ba29-4bab-8cc6-2108794b8b7a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-dampier-nagar-shankar-vihar-mathura-112782",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "713073",
      name: "Chicago Pizza",
      cloudinaryImageId: "847bf081531b0738eeabfa8eb8ef77e0",
      locality: "Lalit grace plaza",
      areaName: "bhuteswar road",
      costForTwo: "₹500 for two",
      cuisines: ["Fast Food", "Pizzas"],
      avgRating: 4.1,
      veg: true,
      parentId: "60277",
      avgRatingString: "4.1",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4e65ab36-ba29-4bab-8cc6-2108794b8b7a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chicago-pizza-lalit-grace-plaza-bhuteswar-road-mathura-713073",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "446389",
      name: "Mittal Foods",
      cloudinaryImageId: "09293a7d13978ad5f1217ac709324401",
      locality: "Saraswatikund",
      areaName: "Shankar_Vihar",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 4.3,
      veg: true,
      parentId: "268846",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-10 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4e65ab36-ba29-4bab-8cc6-2108794b8b7a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mittal-foods-saraswatikund-shankar-vihar-mathura-446389",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "580164",
      name: "Vadilal Ice Creams",
      cloudinaryImageId: "edf6aa61ed4cdfcda130897c5b3e5255",
      locality: "Krishna Nagar ",
      areaName: "Shankar Vihar",
      costForTwo: "₹250 for two",
      cuisines: ["Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.7,
      veg: true,
      parentId: "11745",
      avgRatingString: "4.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-10 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4e65ab36-ba29-4bab-8cc6-2108794b8b7a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/vadilal-ice-creams-krishna-nagar-shankar-vihar-mathura-580164",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "816297",
      name: "Kullad Cafe",
      cloudinaryImageId: "8e6e2f527e35baeb23d8afae38417c4e",
      locality: "Shankar_Vihar",
      areaName: "Shankar_Vihar",
      costForTwo: "₹250 for two",
      cuisines: ["Beverages", "Fast Food", "Snacks"],
      parentId: "21550",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-10 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4e65ab36-ba29-4bab-8cc6-2108794b8b7a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kullad-cafe-shankar-vihar-mathura-816297",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "631701",
      name: "Burger Buddy",
      cloudinaryImageId: "kl6bxuddumlkordb8rt9",
      locality: "Geeta Enclave",
      areaName: "Krishna Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Burgers", "Fast Food", "Beverages"],
      avgRating: 4.1,
      veg: true,
      parentId: "51230",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-10 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4e65ab36-ba29-4bab-8cc6-2108794b8b7a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-buddy-geeta-enclave-krishna-nagar-mathura-631701",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "606344",
      name: "Winni Cakes & More",
      cloudinaryImageId: "w71vu4mnxqaye3mggtfr",
      locality: "Govardhan Road ",
      areaName: "Shankar Vihar",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Pizzas", "Burgers", "Pastas"],
      avgRating: 4.4,
      veg: true,
      parentId: "226144",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-10 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4e65ab36-ba29-4bab-8cc6-2108794b8b7a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/winni-cakes-and-more-govardhan-road-shankar-vihar-mathura-606344",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "685125",
      name: "Taj Hotel",
      cloudinaryImageId: "85e6e427481332842d4413983ef45bdd",
      locality: "Azad Nagar",
      areaName: "Shankar_Vihar",
      costForTwo: "₹300 for two",
      cuisines: ["Mughlai", "North Indian"],
      avgRating: 3.8,
      parentId: "21656",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-10 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4e65ab36-ba29-4bab-8cc6-2108794b8b7a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/taj-hotel-azad-nagar-shankar-vihar-mathura-685125",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "676805",
      name: "Hotel Taj",
      cloudinaryImageId: "697f82a44ce19e4ef51c9c93dd38bdf3",
      locality: "Sonkh Road",
      areaName: "Shankar_Vihar",
      costForTwo: "₹200 for two",
      cuisines: ["Mughlai", "Afghani"],
      avgRating: 3.9,
      parentId: "20795",
      avgRatingString: "3.9",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4e65ab36-ba29-4bab-8cc6-2108794b8b7a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-taj-sonkh-road-shankar-vihar-mathura-676805",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div
        className="rest-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "75px" }}
      >
        {/* Looping restList using map */}
        {restList.map((restaurant) => (
          //! You have to always mention unique key over here
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />

          //* not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<< unique id (best practice)
        ))}
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
