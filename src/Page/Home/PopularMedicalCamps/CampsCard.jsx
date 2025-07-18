import React from "react";
import { Link, NavLink } from "react-router";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserMd,
  FaUsers,
  FaUserCheck,
} from "react-icons/fa";

const CampsCard = ({ camp }) => {
  const {
    _id,
    camp_name,
    camp_img,
    camp_fee,
    camp_description,
    createdAt,
    created_date,
    location,
    participant_count,
    professional_name,
  } = camp;
  return (
    <a href="#" className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
      <div className="relative">
        <img
          alt=""
          src={camp_img}
          className="h-56 w-full rounded-md object-cover"
        />
        <div className="sm:absolute mt-2 sm:mt-0 top-2 left-2 px-3 py-1 rounded-full flex items-center gap-2 text-sm text-white bg-my-primary/70">
          <p class="flex items-center gap-2">
            <FaUserCheck />
            {participant_count} People Joined In
          </p>
        </div>
      </div>

      <div className="mt-2">
        <dl>
          <div className="">
            <span className="text-sm text-gray-500">৳{camp_fee}</span>
          </div>

          <div>
            <dd className="font-medium">{camp_name}</dd>
          </div>
          <div className="">
            <p className="text-sm text-my-secondary dark:text-gray-300 line-clamp-1">
              {camp_description}
            </p>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaCalendarAlt size={12} className="text-my-primary" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Created Date</p>
              <p className="font-medium">{created_date}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaMapMarkerAlt className="text-my-primary" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Location</p>

              <p className="font-medium">{location}</p>
            </div>
          </div>

          <div className="sm:inline-flex  sm:shrink-0 sm:items-center sm:gap-2">
            <FaUserMd className="text-my-primary" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Professional Name</p>
              <p className="font-medium">{professional_name}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <Link
          to={`/camp-details/${_id}`}
          class="inline-flex items-center mt-4 font-semibold text-my-primary lg:mb-0 hover:text-neutral-600"
          title="read more"
        >
          See Camp »
        </Link>
      </div> */}
      <div class="mt-5">
        <Link
          to={`/camp-details/${_id}`}
          class="inline-flex items-center cursor-pointer rounded-md border border-transparent bg-my-primary px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-600"
        >
          See Camp
        </Link>
      </div>
    </a>
  );
};

export default CampsCard;

{
  /* <div>
      <div className="max-w-sm h-122 hover:shadow-md transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-my-secondary dark:border-gray-700">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={camp_img}
          alt={camp_name}
        />
        <div className="p-5 space-y-3">
          <h5 className="text-2xl line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
            {camp_name}
          </h5>

          <p className="text-gray-700 line-clamp-2 dark:text-gray-400 text-sm">
            {camp_description}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" /> {created_date}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaMapMarkerAlt className="" /> {location}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaUserMd className="" /> {professional_name}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaUsers className="" /> {participant_count} participants
          </p>

          {/* Button */
}
//       <NavLink
//         to={`/camp-details/${_id}`}
//         className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-my-primary rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
//       >
//         Details
//         <svg
//           className="w-4 h-4 ml-2 rtl:rotate-180"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 8l4 4m0 0l-4 4m4-4H3"
//           />
//         </svg>
//       </NavLink>
//     </div>
//   </div>
// </div> */}
