import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ResMenuList from './ResMenuList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItem= useSelector((store)=> store.cart.items);

     const dispatch=useDispatch();
     const handleClearItem=()=>{
       dispatch(clearCart());
     }

  return (
    <div className='text-center m-2 p-2'>
        <h1 className='font-bold shadow-sm'>cart</h1>
        <button className='hover:bg-black hover:text-white rounded-md m-2 p-1 bg-slate-400' onClick={handleClearItem}>Clear Cart</button>
        <div className='w-6/12 m-auto'>
        {cartItem.length==0 && <h1>Your cart is empty please add items</h1>}
            <ResMenuList items={cartItem}/>
        </div>
    </div>
  )
}

export default Cart;