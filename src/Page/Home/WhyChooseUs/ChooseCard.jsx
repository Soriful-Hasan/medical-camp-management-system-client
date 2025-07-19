import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";
const ChooseCard = () => {
  const cardInfo = [
    {
      icon: <FaUserDoctor size={30} />,
      title: "Expert Medical Team",
      des: "Our camps are operated by certified doctors and healthcare professionals who provide top-notch medical services with care and accuracy.",
    },
    {
      icon: <FaHandHoldingMedical size={30} />,
      title: "Affordable & Accessible",
      des: "We organize camps in remote and rural areas to ensure affordable healthcare services reach everyone in need, regardless of location.",
    },
    {
      icon: <MdDashboard size={30} />,
      title: "Easy Online Management",
      des: "Register, track, and manage your medical camp participation easily through our user-friendly online platform and dashboard.",
    },
  ];
  return (
    <div className="flex flex-col  gap-6 mb-10 mt-10  space-y-2">
      {cardInfo?.map((info) => (
        <div
          className="w-full p-6 hover:shadow-md transition-shadow bg-white border cursor-pointer
         border-gray-200 rounded-sm shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="">{info.icon}</div>

          <a>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {info.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {info.des}
          </p>
          <Link
            onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"/about"}
            className="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            See our guideline
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ChooseCard;
