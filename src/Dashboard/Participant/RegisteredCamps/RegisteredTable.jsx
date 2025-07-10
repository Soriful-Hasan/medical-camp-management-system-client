import React from "react";

const RegisteredTable = ({ camp, index }) => {
  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{camp.camp_name}</td>
        <td>{camp.camp_fee}</td>
        <td>{camp.location}</td>
        <td>
          <button className="btn">Pay</button>
        </td>
      </tr>
    </tbody>
  );
};

export default RegisteredTable;
