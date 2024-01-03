const CartMenu = (props) => {
  const { id, title, price, description, category, image, rating } = props;

  if (!props) {
    return null;
  }

  return (
    <>
      <div className="w-72 h-72 ml-3 mb-3 border-black border rounded-md text-center shadow-md bg-zinc-100 hover:transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
        <img className="h-1/2 w-3/4 m-auto" src={image} alt={title} />
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-gray-600 mb-2">Price: ₹{price}</p>
        <p className="text-blue-500 font-bold">Category: {category}</p>
        <p className="text-yellow-500">
          Rating: {rating.rate} ({rating.count} ratings)
        </p>
      </div>
    </>
  );
};

export default CartMenu;
