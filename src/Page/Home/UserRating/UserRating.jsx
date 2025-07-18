import React from "react";
import RatingSlider from "./RatingSlider";

const UserRating = () => {
  return (
    <div>
      <div className="mb-10 mt-10 text-center space-y-2">
        <h1 className=" text-3xl md:text-4xl font-bold">Top User Rating</h1>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-6">
          Discover our most attended and highly rated health camps across
          Bangladesh.
        </p>
      </div>
      <RatingSlider />
    </div>
  );
};

export default UserRating;
