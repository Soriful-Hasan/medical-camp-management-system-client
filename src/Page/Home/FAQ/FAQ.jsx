import React from "react";
import Question from "./Question";

const FAQ = () => {
  return (
    <div>
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
          Frequently Asked Question (FAQ)
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 text-lg dark:text-gray-300">
          Find answers to the most commonly asked questions about our medical
          camps, registration process, available services, and support. We’re
          here to help you every step of the way.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-4 ">
        <div className="flex-1">
          <img src="/faqImage.svg" alt="" />
        </div>
        <div className="flex-1">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
