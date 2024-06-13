import {CDN_URL} from "../utils/constants";


const RestaurantCard=(props)=>{

    const {resData}=props;

    const {name, cuisines, avgRating, deliveryTime}=resData?.info;
    
return(
        <div className="res-card">
            <img className="res-logo" src={ CDN_URL +  resData.info.cloudinaryImageId} alt="img" />
            <h3>{name}</h3>
            <h4>
                {cuisines.join(", ")}
            </h4>
            <h4>{avgRating}</h4>
            <h4>Delivery Time {deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;