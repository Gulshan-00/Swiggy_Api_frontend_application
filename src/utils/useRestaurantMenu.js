import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu=(resid)=>{

    const [resMenuInfo, setResMenuInfo] = useState([]);


    useEffect(() => {
        fetchMenu();
        },[]);
    
        const fetchMenu= async ()=>{
            
            // const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4717867&lng=78.5316557&restaurantId=794693&catalog_qa=undefined&submitAction=ENTER");
            // const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=634318&catalog_qa=undefined&submitAction=ENTER");
            const data= await fetch(MENU_API+resid+"&catalog_qa=undefined&submitAction=ENTER");
    
            const json= await data.json();
    
       
    
            setResMenuInfo(json.data)
        };

    return  resMenuInfo;
}

export default useRestaurantMenu;