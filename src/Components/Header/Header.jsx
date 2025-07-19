import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Header = () => {
  const banners = [
    {
      id: 1,
      title: "Empowering Healthcare Camps",
      description:
        "Join our medical camps for free checkups and expert consultations.",
      image: "/medical-camp1.jpg",
    },
    {
      id: 2,
      title: "Community Wellness Events",
      description: "Promoting better health and wellness in your neighborhood.",
      image: "/medical-camp2.jpg",
    },
    {
      id: 3,
      title: "Accessible Healthcare for All",
      description:
        "Bringing quality healthcare to your doorstep through free camps.",
      image: "/medical-camp3.jpg",
    },
  ];
  return (
    <section className="h-[80vh] w-full pt-10 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="h-full  pt-10 pb-10 md:pt-0 md:pb-10  flex  flex-col-reverse md:flex-row max-w-10/12 mx-auto px-6 gap-10 md:px-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex-1"
              >
                <h2 className="text-4xl lg:text-5xl font-bold dark:text-white mb-4">
                  {banner.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  {banner.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-my-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md"
                >
                  Learn More
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
                className="flex-1"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Header;
