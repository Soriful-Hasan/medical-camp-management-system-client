import { QueryClient, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import PaymentHistoryTable from "./PaymentHistoryTable";
import useCampCount from "../../../hooks/useGetCount/useGetCount";
import SearchBar from "../../../Utility/SearchBar/SearchBar";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const email = user?.email;
  const { data: paymentHistory = [], isPending } = useQuery({
    queryKey: ["paymentHistory", email, currentPage, itemPerPage, searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `payment/history?email=${email}&page=${currentPage}&size=${itemPerPage}&search=${searchText}`
      );
      return res.data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const { count: paymentCount, isPending: paymentPending } = useCampCount(
    "payment/participant-payment-count",
    email
  );

  let numberOfPages = 0;
  let pages = [];
  if (paymentCount) {
    numberOfPages = Math.ceil(paymentCount / itemPerPage);
    pages = [...Array(numberOfPages).keys()];
  }

  const handleItemPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(0);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  if (paymentPending) {
    return <Loader />;
  }
  return (
    <div className="mt-4">
      <SearchBar onSearch={setSearchText} placeholder="Search by camp name" />
      <div className="overflow-x-auto mt-4 m-4">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th>Serial</th>
              <th>Camp Name</th>
              <th>Amount</th>
              <th>Transaction Id</th>
              <th>Payment Status</th>
              <th>Confirmation Status</th>
              <th>Payment method</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {isPending ? (
              <tr>
                <td colSpan="100%" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : paymentHistory?.length > 0 ? (
              paymentHistory?.map((history, index) => (
                <PaymentHistoryTable
                  history={history}
                  index={index}
                  key={index}
                />
              ))
            ) : searchText ? (
              <td colSpan="100%" className="text-center text-red-500 py-4">
                No matching search results found.
              </td>
            ) : (
              <td colSpan="100%" className="text-center text-red-500 py-4">
                No available payment story
              </td>
            )}
          </tbody>
        </table>
      </div>

      {/* pagination  */}
      <div className="flex justify-center mt-10 m-4">
        <a
          onClick={handlePrev}
          class="flex mr-4  items-center cursor-pointer justify-center px-4 h-10 text-base font-medium   border border-gray-300 rounded-lg hover:bg-my-primary hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </a>

        <div className="flex gap-4">
          {pages?.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={`${
                currentPage === page && `btn  bg-my-primary text-white`
              } btn`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name=""
                value={itemPerPage}
                onChange={handleItemPerPage}
                id=""
              >
                <option value="1">1</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select> */}

        <a
          onClick={handleNext}
          class="flex ml-4  items-center cursor-pointer justify-center px-4 h-10 text-base font-medium   border border-gray-300 rounded-lg hover:bg-my-primary hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PaymentHistory;
