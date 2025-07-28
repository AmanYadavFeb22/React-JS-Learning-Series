import { CDN_URL } from "./utils/constant";
import reslist from "./utils/mockdata";
const Rescard = (props) => {
  const { resdata } = props;
  const {
    name,
    cuisines,
    locality,
    areaName,
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = resdata.info;
  const { deliveryTime } = resdata.info.sla;
  return (
    <div className="m-4 p- res-card border bg-gray-100 rounded-xl  w-64 " >
      <img
        className="imgfood w-64 h-44 p-1 shadow-lg rounded-xl"
        src={CDN_URL +
          cloudinaryImageId
        }
      ></img>
      <h3 className="pl-4 font-bold p-1 text-lg">{name}</h3>
      <p className=" px-2 font-serif overflow-auto">{cuisines.join(",")}</p>
      <p className="pl-2 font-serif">{areaName}</p>
      <p className="pl-2 font-sans">{costForTwo}</p>
      <p className="pl-2 font-sans">{avgRating} Stars</p>
      <p className="pl-2 font-sans">Delivery Time:{deliveryTime}minutes</p>
    </div>
  );
};


export default Rescard