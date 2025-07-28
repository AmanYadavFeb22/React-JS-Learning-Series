import { CDN_URL } from "./utils/constant"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addItems } from "./utils/cartSlice"
const CategoryMenuItems=({items})=>{

const dispatch=useDispatch()

    const handlecart=(item)=>{
        dispatch(addItems(item))
      
        console.log("add clicked")
    }
    return(
        <div className="m-1 p-2">
            {items.map((item)=>{ 
                return <div  key={item.card.info.id} className="cont border border-black flex ">
            <div className="w-9/12 bg-blue-200 p-2 ">
                <h1>{item.card.info.name}</h1>
                <p className="mb-4">${item.card.info.price/100}</p>
                <p className="overflow-auto">{item.card.info.description}
                </p>
                 </div>
                <div className="w-3/12 flex">
                        <img className="w-52" src={CDN_URL+ item.card.info.imageId}></img>
                        <button className="bg-white rounded-sm border border-black text-black absolute" onClick={()=>handlecart(item)} >Add</button>
                </div>
        </div>
            })}
        
        </div>
       
    )
}
export default CategoryMenuItems