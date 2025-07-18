import React from "react";
import RatingSlider from "./RatingSlider";

const UserRating = () => {
  return (
    <div>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
          Top User Rating
        </h2>
        <div class="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
        <p class="text-gray-600 text-lg dark:text-gray-300">
          Discover our most attended and highly rated health camps across
          Bangladesh.
        </p>
      </div>
      <RatingSlider />
    </div>
  );
};

export default UserRating;
