import { useSelector } from "react-redux";
import CartMenu from "./CartMenu";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="h-[80vh]">
      <div className="text-5xl text-center font-bold">cart Items</div>

      <div className="flex flex-wrap mt-16">
        {cartItems.map((eachItem) => {
          return <CartMenu {...eachItem} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
