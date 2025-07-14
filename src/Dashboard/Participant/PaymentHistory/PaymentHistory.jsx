import { QueryClient, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import PaymentHistoryTable from "./PaymentHistoryTable";
import useCampCount from "../../../hooks/useGetCount/useGetCount";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const email = user?.email;
  const { data: paymentHistory = [], isPending } = useQuery({
    queryKey: ["paymentHistory", email, currentPage, itemPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `payment/history?email=${email}&page=${currentPage}&size=${itemPerPage}`
      );
      return res.data;
    },
  });

  const { count: paymentCount, isPending: paymentPending } = useCampCount(
    "payment/participant-payment-count",
    email
  );

  console.log(paymentCount);
  let numberOfPages = 0;
  let pages = 0;
  if (paymentCount) {
    numberOfPages = Math.ceil(paymentCount / itemPerPage);
    pages = [...Array(numberOfPages).keys()];
  }

  const handleItemPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
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
  if (isPending || paymentPending) {
    return <Loader />;
  }
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Amount</th>
              <th>Transaction Id</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          {paymentHistory?.map((history, index) => (
            <PaymentHistoryTable history={history} index={index} key={index} />
          ))}
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePrev} className="btn">
          Prev
        </button>
        {pages?.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`${currentPage === page && `btn bg-amber-300`} btn`}
          >
            {page}
          </button>
        ))}
        <select name="" value={itemPerPage} onChange={handleItemPerPage} id="">
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <button onClick={handleNext} className="btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentHistory;
