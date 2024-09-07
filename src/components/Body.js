import RestaurantCard from "./RestauranCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import ResMindCard from "./ResMindCard";
import UserConstext from "../utils/UserContext";


const Body = () => {
  const [TopRatedRestaurant, setTopRatedRestaurant] = useState([]);
  const [filteredList, setFiltereedList] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  const [resMind, setResMind] = useState([]);
  const {setUserName, LogedInUser}= useContext(UserConstext);

  useEffect(() => {
    Fetchdata();
  }, []);

  const Fetchdata = async () => {
    try {
      // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4684272&lng=78.53541179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4717867&lng=78.5316557&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      // console.log(json);

      // setTopRatedRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // setFiltereedList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setTopRatedRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFiltereedList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setResMind(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  if (TopRatedRestaurant == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter m-4 p-4 flex justify-center gap-3">
        <input
          className="input-search border border-gray-400 rounded-md"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="btn-search bg-slate-200 p-1 rounded-md"
          onClick={() => {
            const filteredList = TopRatedRestaurant.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );

            console.log(filteredList);

            setFiltereedList(filteredList);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn ml-10 border border-slate-400 p-1 rounded-md"
          onClick={() => {
            const FilterTopRes = TopRatedRestaurant.filter(
              (res) => res.info.avgRating > 4
            );

            setFiltereedList(FilterTopRes);
          }}
        >
          Top Rated Restaurants
        </button>

        <label> UserName : </label>
        <input
          type="text"
          className="border border-gray-400 rounded-md"
          value={LogedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="res-mind flex w-100">
        {resMind.map((res) => (
          <ResMindCard key={res.id} resMindData={res} />
        ))}
      </div>

      <div className="res-container flex flex-wrap justify-center">
        {filteredList.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurants} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
