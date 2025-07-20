import React from "react";
import { Link } from "react-router";
const ForbiddenPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img
          width={400}
          className="p-10 md:p-0"
          src="/forbiddenpage.svg"
          alt=""
        />
        <p className="text-xl mt-4 ">
          Access Denied. You are not authorized to view this page.
        </p>

        <div class="mt-10">
          <Link
            to={"/"}
            class="inline-flex bg-my-primary items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              class="mr-2 -ml-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12h18m-9-9l9 9-9 9"
              />
            </svg>
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;
