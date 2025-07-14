import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";
import RegisteredTable from "./RegisteredTable";
import useCampCount from "../../../hooks/useGetCount/useGetCount";

const RegisteredCamps = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const email = user?.email;
  const {
    data: campsData = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["registeredCamps", user?.email, currentPage, itemPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/user/registeredCamps?email=${email}&page=${currentPage}&size=${itemPerPage}`
      );
      return res.data;
    },
  });

  const { count: campCount, isPending: campCountPending } = useCampCount(
    "user/participant-camp-count",
    user?.email
  );

  // pagination condition
  let numberOfPages = 0;
  let pages = 0;
  if (campCount) {
    numberOfPages = Math.ceil(campCount / itemPerPage);
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

  if (isPending || campCountPending) {
    return <Loader />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Fee</th>
              <th>Location</th>
              <th>Payment Status</th>
              <th>Action</th>
              <th>FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {campsData?.map((camp, index) => (
              <RegisteredTable
                camp={camp}
                key={index}
                index={index}
              ></RegisteredTable>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePrev} className="btn">
          Prev
        </button>
        {pages.map((page) => (
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

export default RegisteredCamps;
