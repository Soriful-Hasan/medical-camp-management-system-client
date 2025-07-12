import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = ({ onRate }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleClick = (rate) => {
    setRating(rate);
    onRate(rate);
  };
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <FaStar
              size={24}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              className="cursor-pointer transition"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
