import { useContext } from "react";
import {CDN_URL} from "../utils/constants";
import UserConstext from "../utils/UserContext";


const RestaurantCard=(props)=>{
    // console.log(props)

    const {resData}=props;
    // console.log(resData)


    const {name, cuisines, avgRating}=resData?.info;
    const {deliveryTime, slaString}=resData?.info?.sla;

    const data=useContext(UserConstext);
    
return(
        <div className="res-card m-4 p-4 hover:bg-black hover:text-white bg-gray-300 w-[250px] rounded-md">
            <img className="res-logo" src={ CDN_URL +  resData.info.cloudinaryImageId} alt="img" />
        
            <h1 className="font-bold my-1">{name}</h1>

            <h4>⭐{avgRating}</h4>
           
           <h4>{slaString}</h4>

            <p>
                {cuisines.join(", ")}
            </p>
            <h5>{data.LogedInUser}</h5>
            
        </div>
    )
}

export default RestaurantCard;