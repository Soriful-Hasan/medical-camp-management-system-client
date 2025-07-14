import React from "react";
import PopularMedicalCamps from "./PopularMedicalCamps/PopularMedicalCamps";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <div className=" dark:bg-dark-secondary">
        <Header></Header>
      </div>
      <PopularMedicalCamps />
    </div>
  );
};

export default Home;
