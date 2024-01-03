import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  }

  // online or offline check from custom made hook
  const isOnline = useOnline();
  if (!isOnline) return <h1>Oops, checkk your internet</h1>;

  return filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-yellow-50">
        <div className="p-4 pt-8 mb-3">
          <input
            type="text"
            className=" border border-orange-300"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="bg-orange-300 rounded-sm"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap">
          {filteredRestaurants &&
            filteredRestaurants.map((eachRestaurant) => {
              return (
                <Link to={"/restaurant/" + eachRestaurant?.info?.id}>
                  <RestaurantCard
                    {...eachRestaurant}
                    key={eachRestaurant?.info?.id}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Body;
