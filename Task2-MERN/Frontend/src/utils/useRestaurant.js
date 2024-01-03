import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState([]);
  // create a useEffect hook for api call
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      FETCH_MENU_URL + id + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurant;
