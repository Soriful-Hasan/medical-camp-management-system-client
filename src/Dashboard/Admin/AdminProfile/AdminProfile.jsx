import React from "react";
import useAuth from "../../../hooks/useAuth";

const AdminProfile = () => {
  const { user } = useAuth();
  return (
    <div className="flex ">
      <div className="border p-10 place-items-center">
        <div>
          <img src={user.photoURL} alt="" />
        </div>
        <div className="">
          <h1>{user.displayName}</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
