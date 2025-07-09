import React from "react";
import useAxios from "../hooks/useAxios";

const SaveUserInfo = () => {
  const axios = useAxios();

  const saveUserInfo = async (userInfo) => {
    console.log(userInfo);
    try {
      const res = await axios.post("/userInfo", userInfo);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return saveUserInfo;
};

export default SaveUserInfo;
