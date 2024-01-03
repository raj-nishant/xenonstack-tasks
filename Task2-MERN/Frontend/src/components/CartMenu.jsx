import { IMG_CDN_URL } from "../config";

const CartMenu = (props) => {
  console.log(props);
  // Check if card is defined before attempting to iterate over its values
  if (!props) {
    return null;
  }

  return (
    <>
      <div className="w-72 h-72 ml-3 mb-3 mt-3 border-black border rounded-md text-center shadow-md bg-zinc-50">
        <img src={IMG_CDN_URL + props?.card?.info?.imageId} />
        <h1 className="font-bold text-lg">{props?.card?.info?.name}</h1>
        <h1 className="font-semibold">{props?.card?.info?.category}</h1>
        <p>₹{props?.card?.info?.price}</p>
      </div>
    </>
  );
};

export default CartMenu;
