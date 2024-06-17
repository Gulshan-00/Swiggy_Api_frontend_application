import {CDN_URL} from "../utils/constants";


const RestaurantCard=(props)=>{

    const {resData}=props;

    const {name, cuisines, avgRating}=resData?.info;
    const {deliveryTime, slaString}=resData?.info?.sla;
    
return(
        <div className="res-card">
            <img className="res-logo" src={ CDN_URL +  resData.info.cloudinaryImageId} alt="img" />
        
            <h1>{name}</h1>

            <h4>⭐{avgRating}</h4>
           
           <h4>{slaString}</h4>

            <p>
                {cuisines.join(", ")}
            </p>
            
        </div>
    )
}

export default RestaurantCard;