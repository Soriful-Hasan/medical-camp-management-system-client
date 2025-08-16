import React from "react";

const MeetOurDoctor = () => {
  const teamData = [
    {
      name: "Dr. Ayesha Rahman",
      title: "MBBS, FCPS (Medicine)",
      position: "Senior Consultant - Internal Medicine",
      experience: "12+ years",
      image:
        "https://images.pexels.com/photos/5722157/pexels-photo-5722157.jpeg",
    },
    {
      name: "Dr. Mahmudul Hasan",
      title: "MBBS, MS (Orthopedics)",
      position: "Orthopedic Surgeon",
      experience: "10+ years",
      image:
        "https://images.pexels.com/photos/5867737/pexels-photo-5867737.jpeg",
    },
    {
      name: "Dr. Nusrat Jahan",
      title: "MBBS, DGO, FCPS (Gynecology)",
      position: "Consultant - Obstetrics & Gynecology",
      experience: "9+ years",
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    },
    {
      name: "Dr. Kamrul Islam",
      title: "MBBS, MD (Cardiology)",
      position: "Cardiologist",
      experience: "15+ years",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr. Fahmida Chowdhury",
      title: "MBBS, FCPS (Pediatrics)",
      position: "Child Specialist",
      experience: "8+ years",
      image:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    },
    {
      name: "Dr. Shahinur Rahman",
      title: "MBBS, MD (Dermatology)",
      position: "Dermatologist",
      experience: "11+ years",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr. Tanvir Ahmed",
      title: "MBBS, MS (ENT)",
      position: "ENT Specialist & Surgeon",
      experience: "13+ years",
      image:
        "https://images.pexels.com/photos/14438785/pexels-photo-14438785.jpeg",
    },
    {
      name: "Dr. Laila Sultana",
      title: "MBBS, MD (Psychiatry)",
      position: "Consultant Psychiatrist",
      experience: "10+ years",
      image:
        "https://images.pexels.com/photos/5726691/pexels-photo-5726691.jpeg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-[#1e2939] dark:to-gray-800 relative overflow-hidden">
      

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full text-white tracking-wider uppercase"
              style={{ backgroundColor: "#01A6E7" }}
            >
              Expert Medical Team
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Meet Our
            <span className="block text-4xl md:text-6xl bg-gradient-to-r from-[#01A6E7] to-[#0291CC] bg-clip-text text-transparent font-extrabold">
              Expert Doctors
            </span>
          </h2>

          <div className="flex items-center justify-center mb-8">
            <div
              className="h-1 w-16 rounded-full"
              style={{ backgroundColor: "#01A6E7" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full mx-4"
              style={{ backgroundColor: "#01A6E7" }}
            ></div>
            <div
              className="h-1 w-16 rounded-full"
              style={{ backgroundColor: "#01A6E7" }}
            ></div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our dedicated team of
            <span className="font-semibold text-[#01A6E7]">
              {" "}
              experienced healthcare professionals{" "}
            </span>
            is committed to providing exceptional medical care with
            <span className="font-semibold text-[#01A6E7]">
              {" "}
              compassion and expertise
            </span>
            .
          </p>
        </div>

        {/* Enhanced Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData?.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#1e2939] rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-[#01A6E7]/30 relative overflow-hidden"
            >
              {/* Card Decorative Elements */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-5 rounded-bl-full"
                style={{ backgroundColor: "#01A6E7" }}
              ></div>

              {/* Doctor Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay with social icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#01A6E7" }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#01A6E7" }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#01A6E7" }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-3 py-1 text-xs font-bold text-white rounded-full"
                    style={{ backgroundColor: "#01A6E7" }}
                  >
                    {doctor.experience}
                  </span>
                </div>
              </div>

              {/* Doctor Information */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#01A6E7] transition-colors duration-300">
                  {doctor.name}
                </h3>

                <div
                  className="w-12 h-1 rounded-full mx-auto transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: "#01A6E7" }}
                ></div>

                <p className="font-semibold text-[#01A6E7] text-sm">
                  {doctor.title}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {doctor.position}
                </p>

                {/* Specialization Badge */}
                <div className="pt-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#01A6E7]/10 text-[#01A6E7] rounded-full">
                    Specialist
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: "#01A6E7" }}
              ></div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: "#01A6E7" }}
            >
              150+
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Happy Patients
            </p>
          </div>
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: "#01A6E7" }}
            >
              8+
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Expert Doctors
            </p>
          </div>
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: "#01A6E7" }}
            >
              50+
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Medical Camps
            </p>
          </div>
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: "#01A6E7" }}
            >
              10+
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurDoctor;
