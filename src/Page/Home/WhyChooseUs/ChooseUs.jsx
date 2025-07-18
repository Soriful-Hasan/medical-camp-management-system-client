import React from "react";
import ChooseCard from "./ChooseCard";
import ChooseImage from "./ChooseImage";

const ChooseUs = () => {
  return (
    <div className="flex max-w-10/12 mx-auto flex-row-reverse justify-between  gap-16">
      <div className="flex-1 ">
        <ChooseCard />
      </div>
      <div className="flex-1 ">
        <ChooseImage />
      </div>
    </div>
  );
};

export default ChooseUs;
