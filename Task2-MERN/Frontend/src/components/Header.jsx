import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  const { user } = useContext(UserContext);

  return (
    <h1 id="title" key="title">
      <img
        className="h-16 p-2"
        src="https://e7.pngegg.com/pngimages/938/880/png-clipart-graphics-computer-icons-restaurant-logo-food-before-volleyball-serve-food-orange.png"
      ></img>

      <p>{user.name}</p>
    </h1>
  );
};

const Header = function () {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <>
      <div className="flex justify-between bg-orange-900 text-white">
        <Title />
        <div className="nav-items">
          <ul className="flex py-6">
            <li className="px-3 shadow hover:bg-zinc-50 hover:text-black mr-3">
              <Link>Home</Link>
            </li>
            <li className="px-3 shadow hover:bg-zinc-50 hover:text-black mr-3">
              <Link to="/about">About</Link>
            </li>
            <li className="px-3 shadow hover:bg-zinc-50 hover:text-black mr-3">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-3 shadow hover:bg-zinc-50 hover:text-black mr-3">
              <Link to={"/instamart"}>Instamart</Link>
            </li>
            <Link to={"/cart"}>
              <li>Cart {cartItems.length} </li>
            </Link>
          </ul>
        </div>

        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>login</button>
        )}
      </div>
    </>
  );
};
export default Header;
