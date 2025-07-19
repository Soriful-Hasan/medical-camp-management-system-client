import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";
const ForbiddenPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* <DotLottieReact
          src="https://lottie.host/60fb5f08-cf17-4853-8da9-11e1b45f9cab/C4hz5aNq0G.lottie"
          loop
          autoplay
        /> */}
        <p className="text-xl mt-4">
          Access Denied. You are not authorized to view this page.
        </p>

        <div class="mt-20">
          <Link
            to={"/"}
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
