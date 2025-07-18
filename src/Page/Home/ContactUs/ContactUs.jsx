import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
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
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
              Please use the form below to contact us. Thank you!
            </p>
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
                    className="mt-2 block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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
                    className="mt-2 block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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
                    className="mt-2 block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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
