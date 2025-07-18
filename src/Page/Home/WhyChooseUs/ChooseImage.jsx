import React from "react";

const ChooseImage = () => {
  return (
    <div>
      <div className="mb-10 mt-10  space-y-2">
        <h1 className=" text-3xl md:text-4xl font-bold">Why choose us ?</h1>
        <p className="text-gray-500  max-w-xl  mb-6">
          Discover our most attended and highly rated health camps across
          Bangladesh.
        </p>
      </div>
      <div className="">
        <img className="rounded-xl w-lg" src="/chooseUs.jpg" alt="" />
      </div>
    </div>
  );
};

export default ChooseImage;
