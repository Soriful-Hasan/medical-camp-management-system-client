import React from "react";

const ManageCampTable = ({ camp, index }) => {
  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{camp.camp_name}</td>
        <td>{camp.created_date}</td>
        <td>{camp.location}</td>
        <td className="text-red-500 cursor-pointer">Delete</td>
        <td className="text-green-500 cursor-pointer">Update</td>
      </tr>
    </tbody>
  );
};

export default ManageCampTable;
