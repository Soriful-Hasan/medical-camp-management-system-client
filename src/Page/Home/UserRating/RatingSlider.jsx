import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { rating } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxios from "../../../hooks/useAxios";
import { IoMdStar } from "react-icons/io";

const RatingSlider = () => {
  const axios = useAxios();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const {
    data: ratings,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["userRatings"],
    queryFn: async () => {
      const res = await axios.get("/ratings");
      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-col-2   lg:grid-cols-3 gap-4 max-w-10/12 mx-auto">
      {ratings?.map((rating) => (
        <div className="border rounded-sm p-4 hover:shadow   dark:bg-dark-primary  bg-white dark:border-gray-600 border-gray-100">
          <div className=" p-4 line-clamp-6">
            <p className="text-gray-600 text-sm dark:text-white">
              {rating.feedback}
            </p>
          </div>

          <div className="flex items-center gap-4 ">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={rating.photo} alt="" />
              </div>
            </div>
            <div className="flex justify-between  w-full">
              <div className="">
                <h1 className="text-xl ">{rating.name}</h1>
                <p className="text-gray-600 text-sm dark:text-white">User</p>
              </div>
              <div className="flex">
                <IoMdStar color="#FE6F61" />
                <IoMdStar color="#FE6F61" />
                <IoMdStar color="#FE6F61" />
                <IoMdStar color="#FE6F61" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingSlider;

