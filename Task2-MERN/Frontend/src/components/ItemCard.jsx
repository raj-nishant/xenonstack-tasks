import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();

  const addFood = (eachItem) => {
    dispatch(addItem(eachItem));
  };

  return (
    <>
      <div className="w-72 h-96 ml-3 mb-3 border-black border rounded-md text-center shadow-md bg-zinc-100 hover:transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
        <img className="h-1/2 w-3/4 m-auto" src={image} alt={title} />
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-gray-600 mb-2">Price: ₹{price}</p>
        <p className="text-blue-500 font-bold">Category: {category}</p>
        <p className="text-yellow-500">
          Rating: {rating.rate} ({rating.count} ratings)
        </p>

        <button
          className="block w-1/2 m-auto py-2 px-4 bg-green-400 text-white font-semibold rounded-md transition duration-300 hover:bg-green-500 focus:outline-none"
          onClick={() =>
            addFood({ id, title, price, description, category, image, rating })
          }
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ItemCard;
