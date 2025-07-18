import React from "react";

const ChooseImage = () => {
  return (
    <div>
      <div className="text-center place-items-center max-w-3xl mx-auto mb-16 mt-10">
        <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
          Why choose us ?
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 md:w-md  text-lg dark:text-gray-300">
          Discover our most attended and highly rated health camps across
          Bangladesh.
        </p>
      </div>
      <div className="">
        <img
          className="rounded-xl w-2xl"
          src="https://images.pexels.com/photos/5214950/pexels-photo-5214950.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ChooseImage;
