import React from "react";
import PopularMedicalCamps from "./PopularMedicalCamps/PopularMedicalCamps";
import Header from "../../components/Header/Header";
import FAQ from "./FAQ/FAQ";
import MeetOurDoctor from "./MeetOurDoctor/MeetOurDoctor";
import Rating from "./UserRating/Rating";
import WhyChooseUs from "./WhyChooseUs/WhyChoseUs";
import CoreValuesSection from "../../components/CoreValuesSection/CoreValuesSection";

const Home = () => {
  return (
    <main>
      <section className=" dark:bg-dark-secondary">
        <Header></Header>
      </section>
      <section>
        <CoreValuesSection />
      </section>
      <section className="max-w-10/12 mx-auto">
        <PopularMedicalCamps />
      </section>

      <section className="">
        <MeetOurDoctor></MeetOurDoctor>
      </section>

      <section className=" my-10 ">
        <WhyChooseUs />
      </section>

      <section className="py-4 mb-10">
        <Rating />
      </section>

      <section className=" mx-auto mb-10">
        <FAQ />
      </section>
    </main>
  );
};

export default Home;
