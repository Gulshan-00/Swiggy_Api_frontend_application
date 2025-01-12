import React, { lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserConstext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery= lazy(()=>import("./components/Grocery"));







const AppLayout = () => {
  const [userName, setUserName]=useState();

  useEffect(()=>{
    const data={
   name:"Gullu"
  
    };
    setUserName(data.name);
  
  },[]);


  return (
    <div>
      <Provider store={appStore}>
      <UserConstext.Provider value={{LogedInUser:"Gulshan Kumar"}}>
      <Header/>
      <UserConstext.Provider value={{LogedInUser:userName, setUserName}}>
      <Outlet/>
      </UserConstext.Provider>
      </UserConstext.Provider>
      </Provider>
     </div>
  );
};
// 
const appRouter= createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    

    children: [
      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <About/>,
       
      },
      {
        path:"/contact",
        element: <Contact/>,
       
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1> Grocery Rendering is taking time </h1>}> <Grocery/> </Suspense>
      },
      {
        path:"/restaurants/:resid",
        element: <RestaurantMenu/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      
      
    ],
    errorElement: <Error/>,
    
  },

  
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
