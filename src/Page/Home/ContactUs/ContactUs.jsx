import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit = (data) => {
    emailjs
      .send(`${serviceID}`, `${templateID}`, data, {
        publicKey: `${publicKey}`,
      })
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Message Sent Successfully!",
          text: "Thank you for reaching out. We'll get back to you soon.",
          showConfirmButton: false,
          timer: 2500,
          customClass: {
            popup: "swal-custom",
          },
        });
        reset();
      })
      .catch((error) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Oops! Something went wrong",
          text: "Please try again or contact us directly.",
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-[#1e2939] dark:to-gray-800 pt-10">
      <title>Contact Us</title>

      <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
         
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full opacity-8"
            style={{ backgroundColor: "#01A6E7" }}
          ></div>

          {/* Grid pattern */}
          <svg
            className="absolute left-full translate-x-1/2 transform opacity-30"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="contact-pattern-1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="2"
                  height="2"
                  className="text-[#01A6E7] opacity-20"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#contact-pattern-1)"
            ></rect>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <div
              className="h-1 w-20 mx-auto mb-6 rounded-full"
              style={{ backgroundColor: "#01A6E7" }}
            ></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Have questions or need support? We're here to help you.
            </p>
          </div>

          {/* Contact Form - Full Width */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-[#1e2939] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#01A6E7] focus:border-[#01A6E7] transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#01A6E7] focus:border-[#01A6E7] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message here..."
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#01A6E7] focus:border-[#01A6E7] transition-colors resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: "#01A6E7" }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#0291CC")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#01A6E7")
                    }
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
