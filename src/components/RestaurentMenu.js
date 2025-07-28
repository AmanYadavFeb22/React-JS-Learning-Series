
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurentMenu from "./utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo=useRestaurentMenu(resId)

  if (resInfo === null) return <Shimmer />;

  const { text } = resInfo?.cards[0]?.card?.card;
   const { cuisines,costForTwoMessage  } = resInfo?.cards[2]?.card?.card?.info;


  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    return c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   })
console.log(categories,'yehaiuuji')
    

  return (
    <div className=" flex flex-col items-center">
      <div className="flex justify-center">
        <h1 className="font-bold font-serif mb-3 text-2xl">{text}</h1>
        </div>
      <div className="text-center mb-4 border border-black w-6/12 m-auto shadow-xl bg-gray-200 rounded-xl">
        <h2>{cuisines.join(',')}</h2>
        <h2>{costForTwoMessage}</h2>
      </div>
      
      {categories.map((cat)=>{
         return <RestaurentCategory key={cat?.card?.card?.itemCards[0].card.info.id} itemdata={cat?.card?.card}/>
      })}
    </div>
  );
};
export default RestaurentMenu;
