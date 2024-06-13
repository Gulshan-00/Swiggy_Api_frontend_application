import RestaurantCard from "./RestauranCard";
import ResObjs from "../utils/mockData";
import ResObjs from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

const [TopRatedRestaurant, setTopRatedRestaurant] = useState([]);

useEffect( async ()=>{
    Fetchdata();
    
},[]);


const Fetchdata= async ()=>{


    try{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

    const json=await data.json();
    console.log(json);

    setTopRatedRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }catch(error)
    {
        console.error("error fetching data",error);
    }

}



    return(
        <div className="body">
             <div className="filter">
               <input type="text" name="" id="" />
                <button className="filter-btn" onClick={()=>{
                    
                    const FilterTopRes= TopRatedRestaurant.filter((res)=> res.info.avgRating > 4 );

                    setTopRatedRestaurant(FilterTopRes);

                }}>Top Rated Restaurants</button>
             </div>
             <div className="res-container">
                 
                 {
                    TopRatedRestaurant.map(restaurants=> <RestaurantCard key={restaurants.info.id} resData={restaurants}/>)
                 }
                 
             </div>

        </div>
    )
}

export default Body;