import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("./applogo.jpg")} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Offers</li>
          <li>About me</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="star-rating-container">
        <span className="star-logo">★</span> {avgRating}
      </h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "100237",
      name: "Ahuja Sweets",
      uuid: "a708e688-6deb-432f-8c25-4b5e70af4ce8",
      city: "97",
      area: "Model Town",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "2a82a8fab59d21750bad47426c50188a",
      cuisines: [
        "South Indian",
        "North Indian",
        "Desserts",
        "Beverages",
        "Chinese",
        "Chaat",
      ],
      tags: [],
      costForTwo: 19900,
      costForTwoString: "₹199 FOR TWO",
      deliveryTime: 15,
      minDeliveryTime: 15,
      maxDeliveryTime: 15,
      slaString: "15 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "ahuja-sweets-model-town-model-town",
        city: "panipat",
      },
      cityState: "97",
      address: "L-164, Model Town, Panipat",
      locality: "Dayal Chowk",
      parentId: 28067,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7198567~p=1~eid=00000189-62cb-81e5-14c9-2c5e00bc0103~srvts=1689579651557",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "100237",
        deliveryTime: 15,
        minDeliveryTime: 15,
        maxDeliveryTime: 15,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "511394",
      name: "Bakingo",
      uuid: "485f8712-53ed-4b60-8f97-260e7a9ccc14",
      city: "97",
      area: "Model Town",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "idmorittss9iugnf7heg",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      tags: [],
      costForTwo: 29900,
      costForTwoString: "₹299 FOR TWO",
      deliveryTime: 11,
      minDeliveryTime: 11,
      maxDeliveryTime: 11,
      slaString: "11 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "bakingo-panipat-model-town",
        city: "panipat",
      },
      cityState: "97",
      address: "14 Gole Market Model Town, Panipat, Haryana ,132103",
      locality: "Gole Market",
      parentId: 3818,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "511394",
        deliveryTime: 11,
        minDeliveryTime: 11,
        maxDeliveryTime: 11,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "668456",
      name: "NIC Ice Creams",
      uuid: "b0e9b746-e9de-4b1e-8f52-92cf324ce6f6",
      city: "97",
      area: "MODEL TOWN",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 12000,
      costForTwoString: "₹120 FOR TWO",
      deliveryTime: 11,
      minDeliveryTime: 11,
      maxDeliveryTime: 11,
      slaString: "11 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "nic-ice-creams-gurudwara-rd-captain-nagar",
        city: "panipat",
      },
      cityState: "97",
      address: "SHOP NO 3, 74-L, MODEL TOWN, PANIPAT, HARYANA-132103",
      locality: "Gurudwara Rd",
      parentId: 6249,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "668456",
        deliveryTime: 11,
        minDeliveryTime: 11,
        maxDeliveryTime: 11,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "101329",
      name: "Hot & Spicy",
      uuid: "b9491792-4799-41d6-9d9c-f5b3547ae7e4",
      city: "97",
      area: "Tehsil Camp",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "zxgwxbstbf8czcz97hix",
      cuisines: ["North Indian", "South Indian", "Chinese"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 3.9000000953674316,
      slugs: {
        restaurant: "hot-spicy-tehsil-town-captain-nagar",
        city: "panipat",
      },
      cityState: "97",
      address: "181 ram nagar fatehpuri chowk tehsil town panipat",
      locality: "Fatehpuri Chowk",
      parentId: 97088,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7196706~p=4~eid=00000189-62cb-81e5-14c9-2c5f00bc040f~srvts=1689579651557",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.9 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "101329",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 3.9000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "666870",
      name: "Cheesecake & co.",
      uuid: "1bb85832-a0cc-4c4c-bb64-8349d12da00e",
      city: "97",
      area: "Model Town",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "40b0a201eadbec469c2f9a06d5e7c722",
      cuisines: ["Desserts"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 11,
      minDeliveryTime: 11,
      maxDeliveryTime: 11,
      slaString: "11 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "cheesecake-&-co.-captain-nagar-captain-nagar",
        city: "panipat",
      },
      cityState: "97",
      address:
        "SHOP NO 294-R MODEL TOWN PANIPAT HARYANA , Panipat, Panipat, Haryana-132103",
      locality: "Shivaji Market",
      parentId: 387417,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "666870",
        deliveryTime: 11,
        minDeliveryTime: 11,
        maxDeliveryTime: 11,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "100105",
      name: "Lucky's Bakery & Patisserie",
      uuid: "4e1d49c5-9ae8-4927-a394-010fa4d1a43e",
      city: "97",
      area: "Model Town",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "a5wcz9mwqlgshrfqz7fx",
      cuisines: ["Desserts", "Snacks"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 13,
      minDeliveryTime: 13,
      maxDeliveryTime: 13,
      slaString: "13 MINS",
      lastMileTravel: 0.5,
      slugs: {
        restaurant: "luckys-bakery-patisserie-model-town-model-town",
        city: "panipat",
      },
      cityState: "97",
      address: "#722 near bal vikash school model town panipat haryana 132103",
      locality: "Shivaji Stadium",
      parentId: 126750,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "100105",
        deliveryTime: 13,
        minDeliveryTime: 13,
        maxDeliveryTime: 13,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "139883",
      name: "The Dhaba",
      uuid: "205c64cf-e847-4e0a-b66e-ac05dbf70e62",
      city: "97",
      area: "Huda",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "ig3vhlczswrrxqhvpbzz",
      cuisines: ["Chinese", "North Indian", "Tandoor"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "the-dhaba-huda-sec-1112-captain-nagar",
        city: "panipat",
      },
      cityState: "97",
      address: "shop no. 77, sector 11, Huda,opp angel prime mall, Panipat",
      locality: "Sector 11",
      parentId: 207676,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7196701~p=7~eid=00000189-62cb-81e5-14c9-2c6000bc0708~srvts=1689579651557",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "139883",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "114052",
      name: "Dawat - The Treat (model town)",
      uuid: "37f89b58-0030-4164-afda-35696ba8acc0",
      city: "97",
      area: "Model Town",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "gwogmijmnexphxj0oj9d",
      cuisines: ["Desserts"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 13,
      minDeliveryTime: 13,
      maxDeliveryTime: 13,
      slaString: "13 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "daawat-the-treat-ramlal-chowk-model-town",
        city: "panipat",
      },
      cityState: "97",
      address: "145- R, Ramlal chowk, Model town, Panipat",
      locality: "Ramlal Chowk",
      parentId: 68862,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "114052",
        deliveryTime: 13,
        minDeliveryTime: 13,
        maxDeliveryTime: 13,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "668457",
      name: "Grameen Kulfi",
      uuid: "2f994c1e-3fb3-4366-af5e-91afaacc0ab5",
      city: "97",
      area: "MODEL TOWN",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "9222019938518b7ebe87fa1c2ae382e4",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 12000,
      costForTwoString: "₹120 FOR TWO",
      deliveryTime: 13,
      minDeliveryTime: 13,
      maxDeliveryTime: 13,
      slaString: "13 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "grameen-kulfi-gurudwara-rd-captain-nagar",
        city: "panipat",
      },
      cityState: "97",
      address: "SHOP NO 3, 74-L, MODEL TOWN, PANIPAT, HARYANA-132103",
      locality: "Gurudwara Rd",
      parentId: 12175,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "668457",
        deliveryTime: 13,
        minDeliveryTime: 13,
        maxDeliveryTime: 13,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.6",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "384016",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      uuid: "fc064434-d51f-4ca4-9aaa-46023e15354c",
      city: "97",
      area: "Old HB Colony",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "wjmzs9968d85ofxqpuum",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      slaString: "17 MINS",
      lastMileTravel: 2.799999952316284,
      slugs: {
        restaurant:
          "kwality-walls-frozen-dessert-and-ice-cream-shop-captain-nagar-captain-nagar",
        city: "panipat",
      },
      cityState: "97",
      address:
        "KWALITY SALES: 1, LUDHIANA SHAWL MARKET, G T ROAD, Panipat, Haryana-132103",
      locality: "Ludhiana Shawl Market",
      parentId: 582,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7505888~p=10~eid=00000189-62cb-81e5-14c9-2c6100bc0a0c~srvts=1689579651557",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "384016",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        lastMileTravel: 2.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "101327",
      name: "Mitthan sweets and snacks (Shiva ji Stadium)",
      uuid: "2f4b2868-d65e-4dd1-b98e-97d7697941b0",
      city: "97",
      area: "Model Town",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "ix1mtro3z2zo2w5odvky",
      cuisines: ["Sweets", "Chinese", "Chaat"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 13,
      minDeliveryTime: 13,
      maxDeliveryTime: 13,
      slaString: "13 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "mitthan-sweets-model-town-model-town",
        city: "panipat",
      },
      cityState: "97",
      address: "Shivaji stadium, Model Town, Panipat",
      locality: "Shivaji Stadium",
      parentId: 137232,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "101327",
        deliveryTime: 13,
        minDeliveryTime: 13,
        maxDeliveryTime: 13,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "481351",
      name: "Batra Sweets (Model Town)",
      uuid: "c257e987-70a4-46d1-acb6-dffe17a6ad5f",
      city: "97",
      area: "Model Town",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "xijzcqsxaei3bu0j4dto",
      cuisines: ["Sweets", "Snacks"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 13,
      minDeliveryTime: 13,
      maxDeliveryTime: 13,
      slaString: "13 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "batra-sweets-&-caterers-model-town-model-town",
        city: "panipat",
      },
      cityState: "97",
      address: "SHOP NO. 158 100 NO CHOWK MODEL TOWN,  Panipat, Haryana-132103",
      locality: "Railway Station",
      parentId: 289144,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "481351",
        deliveryTime: 13,
        minDeliveryTime: 13,
        maxDeliveryTime: 13,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "110758",
      name: "Pyramid Panipat",
      uuid: "7eccdd1a-a185-4eaa-ad64-ebeca14ab6c6",
      city: "97",
      area: "Model Town",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "qb2mhtfivoalxucmlpy0",
      cuisines: [
        "Chinese",
        "Continental",
        "Mexican",
        "Pizzas",
        "Italian",
        "Thalis",
        "North Indian",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: "pyramid-panipat-asandh-road-model-town",
        city: "panipat",
      },
      cityState: "97",
      address: "267-L, Model Town, Assandh Road, Panipat, Haryana",
      locality: "Assandh Road",
      parentId: 163128,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7196705~p=13~eid=00000189-62cb-81e5-14c9-2c6200bc0d32~srvts=1689579651557",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "110758",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "144403",
      name: "Paan Hub",
      uuid: "0c1d7108-1763-49b2-b1da-80126abc6b4c",
      city: "97",
      area: "Captain Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "lsd3elnflmy5gulhgyeg",
      cuisines: ["Continental", "American", "Italian", "Mexican", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 13,
      minDeliveryTime: 13,
      maxDeliveryTime: 13,
      slaString: "13 MINS",
      lastMileTravel: 0.10000000149011612,
      slugs: {
        restaurant: "health-cafe-model-town-model-town",
        city: "panipat",
      },
      cityState: "97",
      address: "near tarun coriander leaf, Model Town Panipat",
      locality: "Tarun Coriander Leaf",
      parentId: 153451,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "144403",
        deliveryTime: 13,
        minDeliveryTime: 13,
        maxDeliveryTime: 13,
        lastMileTravel: 0.10000000149011612,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.7",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "438837",
      name: "Baskin Robbins - Ice Cream Desserts",
      uuid: "aaafd0b0-434e-4006-815d-4f7d45cfec9b",
      city: "97",
      area: "Model Town",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      cuisines: ["Desserts", "Ice Cream"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 13,
      minDeliveryTime: 13,
      maxDeliveryTime: 13,
      slaString: "13 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "baskin-robbins-model-town-model-town",
        city: "panipat",
      },
      cityState: "97",
      address:
        "Baskin Robbins ,Shop No-101, Near 100 Number Chowk, Model Town, Panipat, Haryana, 132103",
      locality: "100 Number Chowk",
      parentId: 5588,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "438837",
        deliveryTime: 13,
        minDeliveryTime: 13,
        maxDeliveryTime: 13,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
