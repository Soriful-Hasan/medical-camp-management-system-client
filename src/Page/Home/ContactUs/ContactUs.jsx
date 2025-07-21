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
          title: "Send Email Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((error) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Something was wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="pt-10">
      <title>Contact</title>
      <div
        id="contact-us"
        className="overflow-hidden  py-16 px-4  sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="relative mx-auto max-w-xl">
          <svg
            className="absolute left-full translate-x-1/2 transform"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200 dark:text-slate-600"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            ></rect>
          </svg>
          <svg
            className="absolute right-full bottom-0 -translate-x-1/2 transform"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200 dark:text-slate-800"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            ></rect>
          </svg>
          <div className="text-center max-w-3xl mx-auto mb-16 mt-16">
            <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
              Contact Us
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>
          <div className="mt-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-400"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Name"
                    autocomplete="organization"
                    required=""
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-400"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    id="email"
                    required=""
                    type="email"
                    placeholder="Email"
                    autocomplete="email"
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-400"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    required=""
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Write your query details...."
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-end sm:col-span-2">
                <button
                  type="submit"
                  className="w-full cursor-pointer sm:w-auto bg-my-primary hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
