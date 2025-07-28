// import reslist from "./utils/mockdata";
import Rescard from "./RestaurentCard";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/userContaxt";
import { useContext } from "react";


const Body = () => {
  const{loginUser,setusername}=useContext(UserContext)
  const [copyofRestaurants, setcopyofRestaurants] = useState([]);
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [Searchvalue, setSearchvalue] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6327&lng=77.2198&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListofRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setcopyofRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
 

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
<div className="offline"> 
  <h1>Looks like you're offline </h1>
  <h1>please check your internet connection</h1>
  </div>
);

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col ">
      <div className=" mb-3 flex justify-evenly">
        <input
          className=" p-2 ml-28 w-72 rounded-2xl border-2 border-solid border-green-500 text-sm"
          type="text"
          placeholder="Search Here"
          value={Searchvalue}
          onChange={(e) => {
            setSearchvalue(e.target.value);
            console.log(Searchvalue);
          }}
        ></input>
        <button
          className="bg-green-200 mr-16 p-1 rounded-xl w-24 border border-black"
          onClick={() => {
            let searchrest = listofRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(Searchvalue.toLowerCase());
            });
            setcopyofRestaurants(searchrest);
          }}
        >
          Search
        </button>

        <button
          className="bg-green-200 w-60 mr-44 p-1 rounded-xl  border border-black "
          onClick={() => {
            const updatedRes = listofRestaurants.filter((res) => {
              return res.info.avgRating > 4.4;
            });
            setcopyofRestaurants(updatedRes);
            console.log(updatedRes);
          }}
        >
          Top Rated Restaurent
        </button>
        <label className="mt-1 pt-1">Username:</label>
         <input className="text-sm  w-32 p-2 mr-2 border border-black rounded-sm shadow-lg"
          type="text"
          placeholder="Search Here" value={loginUser} onChange={((e)=>{
                 setusername(e.target.value)
          })}
        ></input>
      </div>
      <div className="cartContainer  border  flex flex-wrap justify-center items-center ">
        {copyofRestaurants.map((resitems) => {
          return (
            <Link key={resitems.info.id} to={"/restaurent/" + resitems.info.id}>
              <Rescard resdata={resitems} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
