import React, { useState } from "react";
import Shimmer from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  // const [resMenuInfo, setResMenuInfo] = useState([]);

  const { resid } = useParams();

  const resMenuInfo = useRestaurantMenu(resid);

  const [showIndex, setShowIndex]=useState(null);

  // useEffect(() => {
  // fetchMenu();
  // },[]);

  // const fetchMenu= async ()=>{

  //     // const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4717867&lng=78.5316557&restaurantId=794693&catalog_qa=undefined&submitAction=ENTER");
  //     // const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=634318&catalog_qa=undefined&submitAction=ENTER");
  //     const data= await fetch(MENU_API+resid+"&catalog_qa=undefined&submitAction=ENTER");

  //     const json= await data.json();

  //     console.log(json);

  //     setResMenuInfo(json.data)
  // };

  if (resMenuInfo == 0) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    areaName,
    sla,
  } = resMenuInfo?.cards[2]?.card?.card?.info;
  const deliveryTime = sla?.deliveryTime;
  const lastMileTravelString = sla?.lastMileTravelString;
  const slaString = sla?.slaString;

//   const { itemCards } =
//     resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card;

  const categories =
    resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  // console.log("oo",resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  return (
    <div className="Menu text-center">
      <div className="menu-card border-[15px] w-6/12 my-5  shadow-lg rounded-xl m-auto text-left pl-3">
        <h1 className="font-extrabold">{name}</h1>
        <div className="first-card">
          <h4 className="card-rating">
            ⭐{avgRating} ({totalRatingsString}) - {costForTwoMessage}
          </h4>

          <h5 className="cuisines-color text-orange-400 font-bold">
            <u>{cuisines.join(", ")}</u>
          </h5>
          <h5 className="text-sm">{areaName}</h5>
          <h5 className="text-sm">{deliveryTime}</h5>

          <h5 className="text-sm">{slaString}</h5>
          <h5 className="text-sm">{lastMileTravelString}</h5>
        </div>
      </div>
      <div>
        {categories.map((category, index) => (
        
          <RestaurantCategories
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={ index==showIndex ? true : false}
            // showItems={true}
            setShowIndex={()=>{
                setShowIndex(index);
            }}
        
        
          />
        
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
