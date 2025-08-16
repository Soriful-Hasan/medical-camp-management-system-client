import React from "react";
import { Star, User } from "lucide-react";

const Rating = () => {
  const ratings = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      role: "Camp Coordinator",
      rating: 5,
      comment:
        "This management system has revolutionized how we organize our medical camps. The scheduling and patient tracking features are outstanding.",
      avatar: "SA",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Mohammad Rahman",
      role: "Healthcare Administrator",
      rating: 4,
      comment:
        "Excellent platform for managing large-scale medical camps. The reporting features help us track our impact effectively.",
      avatar: "MR",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Dr. Fatima Khan",
      role: "General Physician",
      rating: 5,
      comment:
        "User-friendly interface and comprehensive features. It's made patient registration and data management so much easier.",
      avatar: "FK",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "Aslam Hossain",
      role: "Volunteer Coordinator",
      rating: 4,
      comment:
        "Great tool for coordinating volunteers and resources. The notification system keeps everyone informed and organized.",
      avatar: "AH",
      date: "2 months ago",
    },
    {
      id: 5,
      name: "Dr. Rashida Begum",
      role: "Pediatrician",
      rating: 5,
      comment:
        "The system handles patient flow efficiently, reducing wait times and improving overall camp experience for families.",
      avatar: "RB",
      date: "1 week ago",
    },
    {
      id: 6,
      name: "Karim Ahmed",
      role: "NGO Director",
      rating: 4,
      comment:
        "Comprehensive solution that has improved our camp operations significantly. The analytics dashboard provides valuable insights.",
      avatar: "KA",
      date: "5 days ago",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getAverageRating = () => {
    const total = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return (total / ratings.length).toFixed(1);
  };

  return (
    <div className="from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-[#1e2939] dark:to-gray-800 py-16 px-4">
      <div className="max-w-10/12 mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          {/* Small Tag */}
          <div className="inline-block mb-6">
            <span className="text-sm bg-my-primary font-semibold px-4 py-2 rounded-full text-white tracking-wider uppercase ">
              User Feedback
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            What Our Users
            <span className="block text-4xl text-my-primary md:text-6xl font-extrabold  dark:text-white">
              Say
            </span>
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-my-primary dark:bg-gray-200"></div>
            <div className="w-3 h-3 rounded-full mx-4 bg-my-primary dark:bg-gray-200"></div>
            <div className="h-1 w-16 rounded-full bg-my-primary dark:bg-gray-200"></div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Trusted by healthcare professionals across Bangladesh with
            <span className="font-semibold text-my-primary dark:text-white">
               authentic feedback
            </span>
            from our valued users to ensure better
            <span className="font-semibold text-my-primary dark:text-white">
              healthcare services
            </span>
            .
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white ml-2">
              {getAverageRating()}
            </span>
            <span className="text-gray-600 dark:text-gray-400 ml-1">
              ({ratings.length} reviews)
            </span>
          </div>
        </div>

        {/* Rating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ratings.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-dark-primary rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
            >
              {/* User Info Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white text-gray-900 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-xs dark:text-gray-200 text-gray-500">
                      {review.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs dark:text-gray-200 text-gray-400">
                  {review.date}
                </span>
              </div>

              {/* Rating Stars */}
              <div className="flex mb-3">{renderStars(review.rating)}</div>

              {/* Review Comment */}
              <p className="text-gray-700 dark:text-gray-100 text-sm leading-relaxed">
                "{review.comment}"
              </p>

              {/* Bottom Border */}
              <div className="mt-4 pt-3 border-t dark:border-gray-600 border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-my-primary font-medium">
                    Verified User
                  </span>
                  <div className="flex items-center text-xs text-gray-400">
                    <User className="w-3 h-3 mr-1" />
                    Healthcare Professional
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-8 cursor-pointer py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 bg-[#01A6E7] hover:bg-[#0291CC]">
            Join Thousands of Satisfied Users
          </button>
          <p className="text-sm text-gray-600 mt-3">
            Start managing your medical camps more efficiently today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
