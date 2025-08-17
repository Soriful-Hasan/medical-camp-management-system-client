import React, { useState } from "react";
import {
  Heart,
  Users,
  Shield,
  Megaphone,
  Stethoscope,
  Calendar,
  CheckCircle,
  ArrowRight,
  Target,
  HandHeart,
  Activity,
  Globe,
} from "lucide-react";

const CoreValuesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const coreServices = [
    {
      id: 1,
      title: "Free Health Checkups",
      icon: <Stethoscope className="w-8 h-8" />,
      description:
        "Comprehensive health screenings and diagnostic services available to everyone in our community at no cost.",
      features: [
        "Complete physical examinations",
        "Blood pressure and diabetes screening",
        "Basic lab tests and analysis",
        "Health consultations with professionals",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      stats: "500+ Checkups Monthly",
    },
    {
      id: 2,
      title: "Awareness Campaigns",
      icon: <Megaphone className="w-8 h-8" />,
      description:
        "Educational initiatives designed to promote health awareness and prevent diseases through community engagement.",
      features: [
        "Health education workshops",
        "Disease prevention seminars",
        "Nutritional guidance programs",
        "Mental health awareness events",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      stats: "50+ Campaigns Annually",
    },
    {
      id: 3,
      title: "Preventive Healthcare",
      icon: <Shield className="w-8 h-8" />,
      description:
        "Proactive healthcare measures focused on preventing illness and maintaining optimal health for all community members.",
      features: [
        "Vaccination programs",
        "Regular health monitoring",
        "Early disease detection",
        "Lifestyle modification guidance",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      stats: "1000+ Lives Protected",
    },
    {
      id: 4,
      title: "Community Support",
      icon: <Users className="w-8 h-8" />,
      description:
        "Building stronger, healthier communities through collaborative support systems and accessible healthcare resources.",
      features: [
        "Local health partnerships",
        "Support group facilitation",
        "Emergency medical assistance",
        "Health resource coordination",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      stats: "5000+ Community Members",
    },
  ];

  const coreValues = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassionate Care",
      description:
        "Every individual deserves quality healthcare delivered with empathy and understanding.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence in Service",
      description:
        "We strive for the highest standards in all our healthcare services and programs.",
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Community First",
      description:
        "Our community's health and wellbeing is at the center of everything we do.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Accessible Healthcare",
      description:
        "Healthcare should be available and affordable for everyone, regardless of background.",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-[#1e2939] dark:to-gray-800">
      <div className="relative max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#01A6E7] to-blue-500 rounded-full mb-6">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What We <span className="text-[#01A6E7]">Do</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
            <div className="w-3 h-3 rounded-full mx-4 bg-[#01A6E7]"></div>
            <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dedicated to improving community health through comprehensive care,
            education, and support programs that make healthcare accessible to
            everyone.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="bg-white dark:bg-[#1e2939] rounded-3xl p-8 md:p-12 shadow-md border border-gray-100 dark:border-gray-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#01A6E7] to-blue-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Statistics Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-[#01A6E7] mb-2">2,500+</div>
            <div className="text-gray-600 dark:text-gray-300">
              People Served
            </div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#01A6E7] mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">
              Health Programs
            </div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#01A6E7] mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">
              Community Partners
            </div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#01A6E7] mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">
              Support Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
