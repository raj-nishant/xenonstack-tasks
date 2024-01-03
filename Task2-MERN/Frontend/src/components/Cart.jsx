import { useSelector } from "react-redux";
import CartMenu from "./CartMenu";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <>
      <div className="font-bold">cart Items</div>

      <div className="flex flex-wrap">
        {cartItems.map((eachItem) => {
          return <CartMenu {...eachItem} />;
        })}
      </div>
    </>
  );
};

export default Cart;
