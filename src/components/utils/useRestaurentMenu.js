import { useEffect } from "react";
import { MENU_API } from "./constant";
import { useState } from "react";

const useRestaurentMenu=(resId)=>{
    const[resInfo,setresInfo]=useState(null)
useEffect(()=>{
    RestaurentMenu();
},[])

const RestaurentMenu= async()=>{
const data= await fetch(MENU_API + resId)
const json=await data.json()
setresInfo(json.data)
console.log(json)

}

return resInfo;
}
export default useRestaurentMenu;