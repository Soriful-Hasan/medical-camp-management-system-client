import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import CampsCard from "../Home/PopularMedicalCamps/CampsCard";
import SearchBar from "../../Utility/SearchBar/SearchBar";
import DropDown from "./DropDown";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";

const AllCamps = () => {
  const axiosSecure = useAxiosSecure();
  const [selectOption, setSelectOption] = useState("");
  const [searchText, setSearchText] = useState("");
  const [layout, setLayout] = useState(true);
  const {
    data: allCamps,
    isPending,
    error,
  } = useQuery({
    queryKey: ["AllCamps", selectOption, searchText],
    queryFn: async () => {
      const popularCamps = await axiosSecure.get(
        `/all-camps?sort=${selectOption}&search=${searchText}`
      );
      return popularCamps.data;
    },
  });
  if (isPending) {
    return <Loader />;
  }

  const handleApplyFilter = (value) => {
    setSelectOption(value);
  };

  return (
    <div className="w-10/12 mx-auto pt-10">
      <title>Camps</title>
      <div className="">
        <div className="text-center max-w-3xl mx-auto mb-16 mt-16">
          <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
            All Medical Camps
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <div className="lg:block hidden">
            <div className="flex gap-4  justify-center ">
              <div
                onClick={() => setLayout(true)}
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full cursor-pointer"
              >
                <TfiLayoutGrid2Alt />
              </div>
              <div
                onClick={() => setLayout(false)}
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full cursor-pointer"
              >
                <TfiLayoutColumn2Alt />
              </div>
            </div>
          </div>
        </div>

        <div className="my-4  place-items-center flex flex-col lg:flex-row lg:gap-4 space-y-4 justify-between">
          <SearchBar
            onSearch={setSearchText}
            placeholder="Search by camp name"
          />
          <DropDown onApply={handleApplyFilter} />
        </div>
        {allCamps?.length === 0 && (
          <div className=" flex justify-center mt-20 items-center">
            <img src="not_found.svg" width={400} alt="" />
          </div>
        )}
        {layout ? (
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {allCamps?.map((camp, index) => (
              <CampsCard key={index} camp={camp} />
            ))}
          </div>
        ) : (
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            {allCamps?.map((camp, index) => (
              <CampsCard key={index} camp={camp} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCamps;
