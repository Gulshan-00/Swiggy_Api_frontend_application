import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice"

const ResMenuList=({items})=>{

    const dispatch=useDispatch();
    const handleAddItem =(item)=>{
   dispatch(addItem(item));
  
    }

    const handleRemoveItem =()=>{
        dispatch(removeItem());
         }
  
    return(
        <div>
            {items.map((item)=>(
                  <div key={item?.card?.info?.id} className="text-left border-b-2 py-5 px-2 flex justify-between">
                           <div className="w-9/12">
                             <span className="font-extrabold">{item?.card?.info?.name}</span>
                          
                           <p className="font-bold mb-2">₹{item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100} </p>
                           <p className="text-xs from-neutral-500">
                           {item?.card?.info?.description}
                           </p>
                           </div>
                           <div className="w-3/12 relative">
                            
                            <div className="absolute top-[110px] left-5">
                            <button  className="font-extrabold text-green-600 border rounded-md py-1 px-6 bg-white shadow-lg">
                                <button className="" onClick={handleRemoveItem}>-</button>  ADD  <button onClick={()=>handleAddItem(item)} className="">+</button>
                                </button>
                            </div>
                            <img className="w-[140px] h-[130px] rounded-lg" src={CDN_URL+item.card.info.imageId} alt="img" />
                           </div>

                  </div>
            ))}
        </div>

    );
};

export default ResMenuList;