import React from "react";

const AboutUs = () => {
  const aboutData = [
    {
      title: "Our Mission – Bridging Gaps in Healthcare Access",
      des: "We are committed to transforming the way medical camps are organized and managed. Our goal is to ensure that healthcare services reach the remotest areas and underserved populations by simplifying the entire process of setting up and participating in medical camps. We believe that healthcare is a right, not a privilege — and technology can make it accessible for everyone. Our mission goes beyond just providing tools; it's about empowering communities. By minimizing administrative barriers, we enable organizers to focus on what truly matters: patient care. Every line of code and feature is designed to make healthcare more accessible, affordable, and inclusive. We strive to create a seamless bridge between medical professionals and those in need.",
      image:
        "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg",
    },
    {
      title: "Why Choose Us – Secure, Reliable & User-Friendly",
      des: "Our platform empowers organizers to create, monitor, and manage medical camps efficiently. From registration to scheduling, payment tracking to reporting — every step is handled digitally. Participants can easily find camps, register in seconds, and get real-time updates. With our user-friendly dashboard and data-driven features, managing camps has never been easier. We prioritize data security and privacy, ensuring that all user information is encrypted and safe. Our responsive design ensures smooth experiences across all devices — mobile, tablet, or desktop. The system is built for scale, so whether you're managing one camp or a hundred, performance remains consistent. We’re trusted by health professionals and communities alike for our simplicity and reliability.",
      image:
        "https://images.pexels.com/photos/6285378/pexels-photo-6285378.jpeg",
    },
    {
      title: "Community-Centric Approach – Health Comes First",
      des: "Our platform is designed with the community in mind. We make it easier to arrange health camps in rural, urban, and disaster-affected areas. By reducing manual work, we help organizers focus more on patient care and less on paperwork. Every feature of our system is built to encourage collaboration, volunteerism, and social impact. We understand that strong communities build healthier societies, and we are proud to play a part in that journey. Our tools enable quick mobilization of medical teams during emergencies. We also promote inclusivity by ensuring that services are accessible regardless of gender, age, or background. Together, we can make primary healthcare reach every corner of the nation.",
      image:
        "https://images.pexels.com/photos/5206930/pexels-photo-5206930.jpeg",
    },
    {
      title: "Our Vision – A Healthier Tomorrow Through Innovation",
      des: "We envision a future where no one is deprived of basic healthcare due to lack of resources or poor management. Through this system, we aim to build a sustainable network of healthcare providers, volunteers, and organizations working together. By bringing transparency, speed, and structure to medical camp management, we are taking one step closer to a healthier, better-connected society. Our long-term goal is to digitize and optimize every aspect of healthcare outreach. From pre-camp planning to post-camp feedback, our platform covers it all. We’re committed to continuous improvement based on user feedback and evolving healthcare needs. Innovation is at the heart of what we do — because the future of healthcare starts with smart technology today.",
      image:
        "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg",
    },
  ];

  return (
    <div className="w-10/12 mx-auto mb-10 pt-10">
      <div className="text-center max-w-3xl mx-auto mb-16 mt-16">
        <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
          About Us
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
      </div>
      <div className="  mt-10 rounded-xl">
        {aboutData?.map((about) => (
          <div
            className="bg-white  dark:bg-dark-primary
            flex-col lg:flex-row p-4 mt-4 flex  rounded-md"
          >
            <div className="flex-1">
              <img src={about.image} className="w-xl rounded-2xl" alt="" />
            </div>
            <div className="flex-1 lg:mt-0 lg:ml-4 xl:ml-0 mt-4 xl:mt-4">
              <h1 className="text-xl font-semibold ">{about.title}</h1>
              <p className="mt-2 mb-8 xl:w-xl">{about.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
