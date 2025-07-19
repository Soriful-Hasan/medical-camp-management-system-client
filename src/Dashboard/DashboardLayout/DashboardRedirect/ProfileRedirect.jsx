import React from "react";
import useUserRole from "../../../hooks/useUserRole";
import ParticipantProfile from "../../Participant/ParticipantProfile/ParticipantProfile";
import AdminProfile from "../../Admin/AdminProfile/AdminProfile";
import ForbiddenPage from "../../../components/ForbiddenPage/ForbiddenPage";

const ProfileRedirect = () => {
  const { role, roleLoading } = useUserRole();
  if (roleLoading) {
    return <Loader></Loader>;
  }
  if (role === "participant") {
    return <ParticipantProfile></ParticipantProfile>;
  } else if (role === "admin") {
    return <AdminProfile></AdminProfile>;
  } else {
    return <ForbiddenPage></ForbiddenPage>;
  }
};

export default ProfileRedirect;
