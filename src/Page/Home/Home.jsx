import React from "react";
import PopularMedicalCamps from "./PopularMedicalCamps/PopularMedicalCamps";
import Header from "../../components/Header/Header";
import TimeLine from "./TimeLine/TimeLine";
import UserRating from "./UserRating/UserRating";
import ChooseUs from "./WhyChooseUs/ChooseUs";
import FAQ from "./FAQ/FAQ";
import MeetOurDoctor from "./MeetOurDoctor/MeetOurDoctor";

const Home = () => {
  return (
    <main>
      <section className=" dark:bg-dark-secondary">
        <Header></Header>
      </section>
      <section className="max-w-10/12 mx-auto">
        <PopularMedicalCamps />
        {/* <TimeLine /> */}
      </section>
      <section>
        <MeetOurDoctor></MeetOurDoctor>
      </section>
      <section className=" my-10 ">
        <ChooseUs />
      </section>

      <section className="  py-4 mb-10">
        <UserRating />
      </section>
      <section className="max-w-10/12 mx-auto mb-10">
        <FAQ />
      </section>
    </main>
  );
};

export default Home;
