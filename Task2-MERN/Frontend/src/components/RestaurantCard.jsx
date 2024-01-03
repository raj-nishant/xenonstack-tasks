import { IMG_CDN_URL } from "../config";

export const RestaurantCard = (props) => {
  return (
    <div className="w-72 h-72 ml-3 mb-3 border-black border rounded-md text-center shadow-md bg-zinc-100 hover:transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
      <img
        className="h-2/3"
        src={IMG_CDN_URL + props.info.cloudinaryImageId}
        alt={props.info.name}
      />
      <h3 className="font-bold">{props.info.name}</h3>
      <h3>{props.info.areaName}</h3>
      <h3>{props.info.avgRating} stars</h3>
    </div>
  );
};
