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
    <section className="py-20  px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-[#1e2939] dark:to-gray-800 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold px-4 py-2 rounded-full text-white tracking-wider uppercase bg-[#01A6E7]">
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
            <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
            <div className="w-3 h-3 rounded-full mx-4 bg-[#01A6E7]"></div>
            <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our dedicated team of
            <span className="font-semibold text-[#01A6E7]">
              experienced healthcare professionals
            </span>
            is committed to providing exceptional medical care with
            <span className="font-semibold text-[#01A6E7]">
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
              className="group bg-white dark:bg-[#1e2939] rounded-xl p-6 shadow-sm hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-[#01A6E7]/30 relative overflow-hidden"
            >
              {/* Card Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 rounded-bl-full bg-[#01A6E7]"></div>

              {/* Doctor Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Experience Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-[#01A6E7]">
                    {doctor.experience}
                  </span>
                </div>
              </div>

              {/* Doctor Information */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#01A6E7] transition-colors duration-300">
                  {doctor.name}
                </h3>

                <div className="w-12 h-1 rounded-full mx-auto transition-all duration-300 group-hover:w-16 bg-[#01A6E7]"></div>

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
              <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-[#01A6E7]"></div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-[#01A6E7]">
              150+
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Happy Patients
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-[#01A6E7]">
              8+
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Expert Doctors
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-[#01A6E7]">
              50+
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Medical Camps
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-[#01A6E7]">
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
