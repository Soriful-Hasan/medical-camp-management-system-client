import React from "react";
import { Link, NavLink } from "react-router";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="space-y-6 flex flex-col">
        <img width={400} className="p-10 md:p-0" src="page_error.svg" alt="" />
        <div class="max-w-md w-full space-y-8 text-center">
          <div class="mt-2">
            <Link
              to="/"
              class="bg-my-primary inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

        <div class="mt-2 w-full max-w-2xl">
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="px-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
                If you think this is a mistake, please contact support
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
