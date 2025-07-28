import { useState } from "react"
import CategoryMenuItems from "./CategoryMenuItems"
const RestaurentCategory=(data)=>{
    const[showitem,setshowitems]=useState(false)
    const handleshow=()=>{
        console.log('clicked')
        setshowitems(!showitem)
    }
    return(
        <div  className= "mb-4 border border-black w-6/12 m-2 shadow-xl bg-gray-200 rounded-xl  p-2 font hover:cursor-pointer">
        <div className= "flex justify-between bg-red-200 w-full " onClick={handleshow}>
            <h1 className="m-1 p-2 font-bold">{data.itemdata.title} ({data.itemdata.itemCards.length})</h1>
            <span className="p-2 m-1 hover:cursor-pointer">⬇️</span>
        </div>
        <div>
           {showitem? <CategoryMenuItems items={data.itemdata.itemCards}/>:""}
        </div>


        </div>
    )
}
export default RestaurentCategory