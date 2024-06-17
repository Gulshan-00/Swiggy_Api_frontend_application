import RestaurantCard from "./RestauranCard";
import ResObjs from "../utils/mockData";
import ResObjs from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmerui";

const Body = () => {

const [TopRatedRestaurant, setTopRatedRestaurant] = useState([]);

const [filteredList,setFiltereedList]=useState([]);

const [searchText,setSearchText]=useState(" ");

console.log("rerendering")

useEffect( async ()=>{
    Fetchdata();
    
},[]);


const Fetchdata= async ()=>{


    try{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4717867&lng=78.5316557&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

    const json=await data.json();
    console.log(json);

    setTopRatedRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFiltereedList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }catch(error)
    {
        console.error("error fetching data",error);
    }

}


if(TopRatedRestaurant==0)
    {
        return  <Shimmer/> ;
    }



    return(
        <div className="body">
             <div className="filter">


               <input className="input-search" type="text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
               }}/>


               <button className="btn-search" 
               onClick={()=>{
                
                const filteredList=TopRatedRestaurant.filter((res)=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                )

                console.log(filteredList)

                setFiltereedList(filteredList);

               }}>Search</button>



                <button className="filter-btn" onClick={()=>{
                    
                    const FilterTopRes= TopRatedRestaurant.filter((res)=> res.info.avgRating > 4 );

                    setFiltereedList(FilterTopRes);

                }}>Top Rated Restaurants</button>
             </div>


             <div className="res-container">
                 
                 {
                    filteredList.map(restaurants=> <RestaurantCard key={restaurants.info.id} resData={restaurants}/>)
                 }
                 
             </div>

        </div>
    )
}

export default Body;