import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const question = [
    {
      question: "How do I register for a medical camp?",
      answer:
        "Click the Sign Up button on the top right corner, create an account, and go to the 'Available Camps' section to register for any active camp.",
    },
    {
      question: "Do I need to pay to join a medical camp?",
      answer:
        "Some camps are free, while others may require a small fee. Payment details will be shown during the registration process if required.",
    },
    {
      question: "Can I cancel my registration after joining a camp?",
      answer:
        "Yes, you can cancel your registration from your dashboard before the camp starts. Refund policies may vary depending on the camp organizer.",
    },
    {
      question: "What kind of medical services are available in the camps?",
      answer:
        "Camps usually include basic health checkups, specialist consultations, diagnostic tests, and free medicine distribution. Details are listed with each camp.",
    },
    {
      question: "How can I become a volunteer at medical camps?",
      answer:
        "Visit our 'Volunteer' section, fill out the application form, and our team will contact you with available opportunities based on your skills and availability.",
    },
    {
      question: "Are the medical camps supervised by qualified doctors?",
      answer:
        "Yes, all our medical camps are supervised by licensed medical professionals and certified doctors to ensure quality healthcare services.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 relative">
        {/* Background decoration */}
        <div className="inline-block mb-6">
          <span className="text-sm font-semibold px-4 py-2 rounded-full text-white tracking-wider uppercase bg-[#01A6E7]">
            FAQ
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Frequently Asked
          <span className="block text-4xl md:text-6xl bg-gradient-to-r from-[#01A6E7] to-[#0291CC] bg-clip-text text-transparent font-extrabold">
            Questions
          </span>
        </h2>

        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
          <div className="w-3 h-3 rounded-full mx-4 bg-[#01A6E7]"></div>
          <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Find answers to the most commonly asked questions about our
          <span className="font-semibold text-[#01A6E7]"> medical camps </span>
          registration process and
          <span className="font-semibold text-[#01A6E7]">
            {" "}
            available services
          </span>
          .
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-10/12 mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-12 items-start">
          {/* Help Section */}
          <div className="flex-1 mb-10 lg:mb-0">
            <div className="">
              <img src="/faq.svg" alt="" />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="flex-1 ">
            <div className="space-y-4 ">
              {question.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white  dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full cursor-pointer px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white text-lg pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 transform transition-transform duration-200 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-[#01A6E7]" />
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#01A6E7]/10 to-[#0291CC]/10 rounded-md border border-[#01A6E7]/20">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Still have questions?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our medical experts and support team are ready to assist you.
                </p>
                <div className=" justify-center">
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={"/contact"}
                    className="px-6 py-2 border border-[#01A6E7] text-[#01A6E7] hover:bg-[#01A6E7] hover:text-white font-medium rounded-lg transition-all duration-200"
                  >
                    Email Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
