import React, { useState } from "react";
import ManageCampTable from "./ManageCampTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQueries, useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader/Loader";
import useAuth from "../../../hooks/useAuth";
import { button } from "@material-tailwind/react";

const ManageCamp = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  // get camp
  const {
    data: campsData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["manageCamps", user?.email, currentPage, itemPerPage],
    queryFn: async () => {
      const camps = await axiosSecure.get(
        `/admin/get-camps?email=${user?.email}&page=${currentPage}&size=${itemPerPage}`
      );
      return camps.data;
    },
  });

  // get all camps count data
  const {
    data: campsCount,
    isPending: campCountPending,
    error: campCountError,
  } = useQuery({
    queryKey: ["campCount", user?.email],
    queryFn: async () => {
      const campsCount = await axiosSecure.get(`/admin/camps/count`);
      return campsCount.data;
    },
  });

  const totalCampCount = campsCount?.totalCamps;

  if (isPending) {
    return <Loader />;
  }

  // pagination for table
  let numberOfPages = 0;
  let pages = 0;
  if (totalCampCount) {
    numberOfPages = Math.ceil(totalCampCount / itemPerPage);
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
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {campsData?.map((camp, index) => (
              <ManageCampTable
                key={index}
                index={index}
                camp={camp}
              ></ManageCampTable>
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

export default ManageCamp;
