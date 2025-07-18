import React from "react";

const AboutUs = () => {
  const aboutData = [
    {
      title: "Our Mission",
      des: "We are committed to transforming the way medical camps are organizedand managed. Our goal is to ensure that healthcare services reach theremotest areas and underserved populations by simplifying the entireprocess of setting up and participating in medical camps. We believe that healthcare is a right, not a privilege — and technology can make it accessible for everyone",
    },
    {
      title: "Why Choose Us – Reliable, Secure, and Easy-to-Use",
      des: "Our platform empowers organizers to create, monitor, and manage medical camps efficiently. From registration to scheduling, payment tracking to reporting — every step is handled digitally. Participants can easily find camps, register in seconds, and get real-time updates. With our user-friendly dashboard and data-driven features, managing camps has never been easier.",
    },
    {
      title: " Community Focus – Health Comes First",
      des: "Our platform is designed with the community in mind. We make it easier to arrange health camps in rural, urban, and disaster-affected areas. By reducing manual work, we help organizers focus more on patient care and less on paperwork. Every feature of our system is built to encourage collaboration, volunteerism, and social impact.",
    },
    {
      title: "Our Vision – A Healthier Tomorrow Through Technology",
      des: "We envision a future where no one is deprived of basic healthcare due to lack of resources or poor management. Through this system, we aim to build a sustainable network of healthcare providers, volunteers, and organizations working together. By bringing transparency, speed, and structure to medical camp management, we are taking one step closer to a healthier, better-connected society.",
    },
  ];
  return (
    <div className="w-10/12 mx-auto mb-10">
      <div className="place-items-center  pt-12 ">
        <h1 className=" text-3xl font-bold">About Us</h1>
        <p className="w-3xl text-center mt-2">
          Bringing communities together with accessible medical care, our
          mission is to simplify medical camp management through modern
          technology.
        </p>
      </div>
      <div className="bg-my-primary/5  p-4 mt-10 rounded-xl">
        {aboutData?.map((about) => (
          <div className="">
            <h1 className="text-xl font-semibold">{about.title}</h1>
            <p className="mt-2 mb-8">{about.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
