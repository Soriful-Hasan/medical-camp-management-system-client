import React, { useState } from "react";

const DropDown = ({ onApply }) => {
  const [localSelect, setLocalSelect] = useState("");
  const handleChange = (e) => {
    setLocalSelect(e.target.value);
  };
  const handleClick = () => {
    if (localSelect) {
      onApply(localSelect);
    }
  };
  return (
    <div>
      <div className=" flex gap-4  items-center ">
        <div className="ml-4 lg:ml-0">
          <select
            value={localSelect}
            onChange={handleChange}
            className=" cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a option</option>
            <option value="Most Registered">Most Registered</option>
            <option value="Recent Camp">Recent Camp</option>
            <option value="Camp Fees">Camp Fees</option>
            <option value="Alphabetical Order">Alphabetical Order</option>
          </select>
        </div>

        <button
          onClick={handleClick}
          type="button w-full"
          className="text-white bg-my-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default DropDown;
