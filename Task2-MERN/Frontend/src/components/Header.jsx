import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <h1 id="title" key="title">
      <Link to="/">
        <img
          className="h-16 p-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB40nkA2mZWsu_mwD7M4hWuAbkRNKAVhFsG2mwVSXY14Mj65CX3iI4-KpAjEp7YK5wnEM&usqp=CAU"
          alt="Logo"
        />
      </Link>
    </h1>
  );
};

const Header = function () {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <>
      <div className="flex justify-between items-center bg-gradient-to-r from-orange-700 to-orange-500 text-white p-4">
        <Title />
        <div className="nav-items">
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/cart">
                Cart <span className="text-orange-300">{cartItems.length}</span>
              </Link>
            </li>
            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              <Link to="/login">{isLoggedIn ? "Login" : "Logout"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
