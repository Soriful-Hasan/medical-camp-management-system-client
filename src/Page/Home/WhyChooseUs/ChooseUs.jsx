import React from "react";
import ChooseCard from "./ChooseCard";
import ChooseImage from "./ChooseImage";

const ChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row  max-w-10/12 mx-auto  justify-between  gap-16">
      <div className="flex-1 ">
        <ChooseImage />
      </div>
      <div className="flex-1 ">
        <ChooseCard />
      </div>
    </div>
  );
};

export default ChooseUs;
