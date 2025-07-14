import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import RegisteredCampTable from "./RegisteredCampTable";
import useCampCount from "../../../hooks/useGetCount/useGetCount";

const ManageRegisteredCamp = () => {
  const axiosSecure = useAxiosSecure();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const { user } = useAuth();

  // get registered camp data
  const {
    data: registeredCampsData = [],
    isPending,
    error,
  } = useQuery({
    queryKey: [
      "manageRegisteredCampData",
      user?.email,
      currentPage,
      itemPerPage,
    ],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/admin/get-registered-camps?email${user?.email}&page=${currentPage}&size=${itemPerPage}`
      );
      return res.data;
    },
  });

  const { count: totalRegisterCampCount, isPending: registerCampCountPending } =
    useCampCount("admin/registeredCamp/count", user?.email);


  let numberOfPages = 0;
  let pages = 0;
  if (totalRegisterCampCount) {
    numberOfPages = Math.ceil(totalRegisterCampCount / itemPerPage);
    pages = [...Array(numberOfPages).keys()];
  }

  console.log(numberOfPages, pages);

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
  if (isPending || registerCampCountPending) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Camp Name</th>
              <th>Payment Status</th>
              <th>Confirm Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {registeredCampsData?.map((regData, index) => (
            <RegisteredCampTable key={index} regData={regData} index={index} />
          ))}
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

export default ManageRegisteredCamp;
