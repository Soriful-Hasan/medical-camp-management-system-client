import React from "react";
import useUserRole from "../../../hooks/useUserRole";
import Loader from "../../../Components/Loader/Loader";
import ParticipantDashBoard from "../../Participant/ParticipantDashBoard/ParticipentDashBoard";
import AdminDashBoard from "../../Admin/AdmindashBoard/AdmindashBoard";
import ForbiddenPage from "../../../components/ForbiddenPage/ForbiddenPage";

const DashboardRedirect = () => {
  const { role, roleLoading } = useUserRole();
  if (roleLoading) {
    return <Loader></Loader>;
  }
  if (role === "participant") {
    return <ParticipantDashBoard></ParticipantDashBoard>;
  } else if (role === "admin") {
    return <AdminDashBoard></AdminDashBoard>; 
  } else {
    return <ForbiddenPage></ForbiddenPage>;
  }
};

export default DashboardRedirect;
