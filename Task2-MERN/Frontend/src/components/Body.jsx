import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      console.log(json);

      setAllItems(json);
      setFilteredItems(json);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  function filterData(searchText, allItems) {
    const filterData = allItems.filter((each) => {
      return each?.title?.toLowerCase()?.includes(searchText.toLowerCase());
    });
    console.log(filterData);
    return filterData;
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
            const data = filterData(searchText, allItems);
            setFilteredItems(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredItems.map((eachItem) => (
          <ItemCard {...eachItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
