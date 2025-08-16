import React, { useState } from "react";
import {
  CheckCircle,
  Users,
  Clock,
  Shield,
  Heart,
  Award,
  Zap,
  Headphones,
  TrendingUp,
  Sun,
  Moon,
  Stethoscope,
  Activity,
} from "lucide-react";

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Professional Medical Team",
      description:
        "Our certified medical professionals ensure the highest quality of care at every camp we organize.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description:
        "Track patient flow, medication inventory, and camp performance with live dashboard analytics.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Easy Patient Management",
      description:
        "Streamlined registration, queue management, and medical record keeping for efficient operations.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Security & Privacy",
      description:
        "Enterprise-grade security ensures all patient data is protected with advanced encryption.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support to ensure your medical camps run smoothly without interruption.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics & Reports",
      description:
        "Comprehensive reporting and insights to help you improve camp efficiency and patient outcomes.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    { number: "500+", label: "Medical Camps Organized" },
    { number: "50,000+", label: "Patients Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="transition-all duration-500">
      <section className="min-h-screen   py-20 px-4 relative overflow-hidden">
        <div className="max-w-10/12 mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-16 relative">
            {/* Background decoration */}
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold px-4 py-2 rounded-full text-white tracking-wider uppercase bg-[#01A6E7]">
                Healthcare Services
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-[#01A6E7] to-[#0291CC] bg-clip-text text-transparent font-extrabold">
                Us
              </span>
            </h2>

            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
              <div className="w-3 h-3 rounded-full mx-4 bg-[#01A6E7]"></div>
              <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Experience the future of medical camp management with
              <span className="font-semibold text-[#01A6E7]">
                {" "}
                cutting-edge technology{" "}
              </span>
              providing seamless operations and
              <span className="font-semibold text-[#01A6E7]">
                {" "}
                unmatched reliability
              </span>
              .
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80  rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300"
              >
                <div
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                  style={{ color: "#01A6E7" }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl cursor-pointer ${
                  hoveredCard === index ? "scale-105" : ""
                }`}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 cursor-pointer py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 bg-[#01A6E7] hover:bg-[#0291CC]"
                style={{ backgroundColor: "#01A6E7" }}
              >
                Get Started Today
              </button>
            </div>

            <p className="mt-6 text-gray-500 dark:text-gray-400">
              No setup fees • 30-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
