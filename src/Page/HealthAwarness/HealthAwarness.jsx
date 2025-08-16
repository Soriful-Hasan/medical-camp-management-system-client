import React, { useState } from "react";
import {
  Heart,
  Shield,
  Activity,
  Users,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  Calendar,
} from "lucide-react";

const HealthAwareness = () => {
  const [activeTab, setActiveTab] = useState("tips");

  const healthTips = [
    {
      id: 1,
      title: "Diabetes Control",
      icon: <Activity className="w-8 h-8" />,
      tips: [
        "Monitor blood sugar levels regularly",
        "Follow a balanced, low-glycemic diet",
        "Exercise for at least 30 minutes daily",
        "Take medications as prescribed",
        "Stay hydrated with water",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Blood Pressure Management",
      icon: <Heart className="w-8 h-8" />,
      tips: [
        "Reduce sodium intake to less than 2,300mg daily",
        "Maintain a healthy weight",
        "Limit alcohol consumption",
        "Practice stress management techniques",
        "Get adequate sleep (7-9 hours)",
      ],
      color: "from-red-500 to-pink-500",
    },
    {
      id: 3,
      title: "Nutrition Guidelines",
      icon: <TrendingUp className="w-8 h-8" />,
      tips: [
        "Eat 5-9 servings of fruits and vegetables daily",
        "Choose whole grains over refined grains",
        "Include lean proteins in every meal",
        "Limit processed and sugary foods",
        "Practice portion control",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const preventiveCare = [
    {
      title: "Regular Health Checkups",
      description:
        "Annual checkups can detect health issues early when they're most treatable",
      benefits: [
        "Early disease detection",
        "Preventive screenings",
        "Health risk assessment",
        "Vaccination updates",
      ],
      icon: <Shield className="w-12 h-12" />,
      frequency: "Annually",
    },
    {
      title: "Vaccination Importance",
      description:
        "Vaccines protect you and your community from preventable diseases",
      benefits: [
        "Disease prevention",
        "Community immunity",
        "Reduced healthcare costs",
        "Long-term protection",
      ],
      icon: <Users className="w-12 h-12" />,
      frequency: "As recommended",
    },
  ];

  const healthStats = [
    {
      label: "Heart Disease Prevention",
      value: "80%",
      description: "Can be prevented with lifestyle changes",
    },
    {
      label: "Early Detection Success",
      value: "90%",
      description: "Cancer survival rate when caught early",
    },
    {
      label: "Vaccine Effectiveness",
      value: "95%",
      description: "Average effectiveness of common vaccines",
    },
    {
      label: "Exercise Benefits",
      value: "30min",
      description: "Daily exercise reduces disease risk by 40%",
    },
  ];

  return (
    <div className=" py-30 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS for brand colors */}
      <style jsx>{`
        .brand-primary {
          color: #01a6e7;
        }
        .brand-dark {
          color: #1e2939;
        }
        .bg-brand-primary {
          background-color: #01a6e7;
        }
        .bg-brand-dark {
          background-color: #1e2939;
        }
        .border-brand-primary {
          border-color: #01a6e7;
        }
        .text-brand-primary {
          color: #01a6e7;
        }
        .text-brand-dark {
          color: #1e2939;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Health Awareness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering you with knowledge and tools for better health.
            Prevention is the best medicine.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setActiveTab("tips")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "tips"
                  ? "bg-brand-primary text-white shadow-md"
                  : "text-gray-600 hover:text-brand-primary"
              }`}
            >
              Health Tips
            </button>
            <button
              onClick={() => setActiveTab("preventive")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "preventive"
                  ? "bg-brand-primary text-white shadow-md"
                  : "text-gray-600 hover:text-brand-primary"
              }`}
            >
              Preventive Care
            </button>
            <button
              onClick={() => setActiveTab("stats")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "stats"
                  ? "bg-brand-primary text-white shadow-md"
                  : "text-gray-600 hover:text-brand-primary"
              }`}
            >
              Health Statistics
            </button>
          </div>
        </div>

        {/* Health Tips Tab */}
        {activeTab === "tips" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {healthTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${tip.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    {tip.icon}
                    <h3 className="ml-3 text-xl font-bold">{tip.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tip.tips.map((tipItem, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tipItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Preventive Care Tab */}
        {activeTab === "preventive" && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {preventiveCare.map((care, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-brand-primary bg-opacity-10 rounded-full text-brand-primary">
                    {care.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-brand-dark">
                      {care.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      <Calendar className="w-4 h-4 text-brand-primary mr-2" />
                      <span className="text-brand-primary font-medium">
                        {care.frequency}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{care.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {care.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Health Statistics Tab */}
        {activeTab === "stats" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {healthStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  {stat.value}
                </div>
                <h4 className="text-lg font-semibold text-brand-dark mb-2">
                  {stat.label}
                </h4>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-my-primary to-blue-400 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Take Charge of Your Health Today
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Small steps today lead to big improvements tomorrow. Start your
            health journey now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          </div>
        </div>

        {/* Health Alert Banner */}
        <div className="mt-12 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-500 mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">
                Health Disclaimer
              </h4>
              <p className="text-amber-700">
                This information is for educational purposes only and should not
                replace professional medical advice. Always consult with
                healthcare professionals for personalized medical guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAwareness;
