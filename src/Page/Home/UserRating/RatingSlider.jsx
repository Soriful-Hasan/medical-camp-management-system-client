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
    <div className="max-w-10/12 mx-auto  px-4 py-16 text-center">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {ratings?.map((rating, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  hover:shadow-md cursor-pointer transition-shadow dark:bg-my-secondary  m-2 rounded-md p-6 shadow-sm h-full flex flex-col justify-between">
              <div>
                <span className="text-3xl text-teal-400">“</span>
              </div>
              <p className="text-gray-600 dark:text-white mt-2 text-sm leading-relaxed">
                {rating.feedback}
              </p>
              <div className="border-t  border-dotted my-4"></div>
              <div className="flex items-center justify-between">
                <div className="  pt-4 flex items-center gap-4">
                  <div className="w-10 h-10 ">
                    <img
                      className="bg-teal-900 rounded-full"
                      src={rating.photo}
                      alt=""
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-teal-900 dark:text-white font-bold text-sm">
                      {rating.name}
                    </h4>
                    <p className="text-xs dark:text-gray-400 mt-1 text-gray-500">
                      User
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex ">
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          ref={prevRef}
          className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 hover:bg-my-primary hover:text-white  flex items-center justify-center"
        >
          ←
        </button>
        <div className="custom-pagination  flex  gap-2" />
        <button
          ref={nextRef}
          className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 hover:bg-my-primary hover:text-white flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RatingSlider;
