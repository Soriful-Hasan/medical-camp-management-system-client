import React from "react";
import Question from "./Question";

const FAQ = () => {
  return (
    <div>
      <div className="mb-10 mt-10 w-full  place-items-center  space-y-2 text-center">
        <h1 className=" text-3xl md:text-4xl font-bold">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-gray-500 w-xl ">
          Find answers to the most commonly asked questions about our medical
          camps, registration process, available services, and support. We’re
          here to help you every step of the way.
        </p>
      </div>
      <Question />
    </div>
  );
};

export default FAQ;
