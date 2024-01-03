let myArr = new Array(10).fill("");

const Shimmer = () => {
  return (
    <>
      <div className=" flex flex-wrap mt-14">
        {myArr.map((each, index) => (
          <div
            key={index}
            className="w-72 h-72 ml-3 mb-3 border-black border rounded-md shadow-md bg-zinc-100"
          ></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
