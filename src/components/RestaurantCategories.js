import { useState } from "react";
import ResMenuList from "./ResMenuList";

const RestaurantCategories =({data, showItems, setShowIndex})=>{

// const [showItems, setShowItems]=useState(false);

// const handleclick=()=>{
//     showItems ? setShowItems(false) : setShowItems(true);
    
// }
const handleclick=()=>{
    setShowIndex();
}
    
    return(
        <div>
            <div className="border-b-8 w-6/12 m-auto">
          <div className="flex justify-center m-auto p-4 justify-between cursor-pointer" onClick={handleclick}>
            <h1 className="font-black ">{data.title}({data.itemCards.length})</h1>
            <h1>▼</h1>
            </div>
           <div>
            { showItems && <ResMenuList items={data?.itemCards}/>}
            </div>
            </div>
        
        </div>
        
    );

};

export default RestaurantCategories;