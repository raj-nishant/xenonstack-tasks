import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // const params = useParams();
  // const { id } = params;
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  const [resMenu, setResMenu] = useState(null);

  async function getMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.2893144&lng=80.4604643&restaurantId=${id}&catalog_qa=undefined`
    );
    const json = await data.json();
    setResMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }

  useEffect(() => {
    getMenu();
  }, []);

  const dispatch = useDispatch();

  const addFood = (eachItem) => {
    dispatch(addItem(eachItem));
  };

  if (restaurant.length === 0) return <Shimmer />;
  return (
    <div className="flex">
      <div className="w-72 h-72 ml-3 mb-3 mt-3 border-black border rounded-md text-center shadow-md bg-zinc-50">
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
      </div>

      <div className="ml-60">
        {resMenu.map((eachItem) => {
          return (
            <div className="flex">
              <p className="w-52">{eachItem?.card?.info?.name}</p>
              <button
                className="border p-2 bg-green-400 ml-10"
                onClick={() => addFood(eachItem)}
              >
                add
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
