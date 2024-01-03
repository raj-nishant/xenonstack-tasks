import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      console.log(json);

      setAllRestaurants(json);
      setFilteredRestaurants(json);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="bg-yellow-50">
      <div className="p-4 pt-8 mb-3">
        <input
          type="text"
          className="border border-orange-300"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
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
        {filteredRestaurants.map((eachRestaurant) => (
          <RestaurantCard {...eachRestaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
