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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
            Meet Our Doctor Team
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg dark:text-gray-300">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData?.map((doctor) => (
            <>
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={doctor.image}
                    alt="Team member"
                    className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold dark:text-white text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    {doctor.position}
                  </p>
                  <p className="text-gray-600 mt-2 dark:text-gray-300">
                    {doctor.experience}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurDoctor;
