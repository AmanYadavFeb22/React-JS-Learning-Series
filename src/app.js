import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Rescard from "./components/RestaurentCard";
import reslist from "./components/utils/mockdata";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./components/utils/userContaxt";
import { Provider } from "react-redux";
import appstore from "./components/utils/AppStore";





const About=lazy(()=>import("./components/About"))

const AppLayout = () => {
  const[username,setusername]=useState()
  useEffect(()=>{
    const data={
      Name:'Aman Yadav'
    }
    setusername(data.Name)
    
  },[])

  return (
  <Provider store={appstore}>
    <UserContext.Provider value={{loginUser:username,setusername}} >
    <div className="appLayout">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />, 
      },
       {
        path: "/cart",
        element: <Cart />,
      },
       {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
