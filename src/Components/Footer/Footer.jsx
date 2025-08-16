import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "../Logo/Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900  border-gray-200 dark:border-gray-700">
      <div className="max-w-10/12 mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="">
                <Logo />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white"></h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Providing quality healthcare services through organized medical
              camps. Your health is our priority.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="https://x.com/hasan_soriful"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#01A6E7] hover:bg-[#0291CC] flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://github.com/Soriful-Hasan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#01A6E7] hover:bg-[#0291CC] flex items-center justify-center transition-colors duration-200"
              >
                <Github className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://www.youtube.com/@codingwithhasan300"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#01A6E7] hover:bg-[#0291CC] flex items-center justify-center transition-colors duration-200"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/items"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-gray-600 dark:text-gray-400 hover:text-[#01A6E7] dark:hover:text-[#01A6E7] transition-colors duration-200"
                >
                  All Camps
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-gray-600 dark:text-gray-400 hover:text-[#01A6E7] dark:hover:text-[#01A6E7] transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-gray-600 dark:text-gray-400 hover:text-[#01A6E7] dark:hover:text-[#01A6E7] transition-colors duration-200"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-gray-600 dark:text-gray-400 hover:text-[#01A6E7] dark:hover:text-[#01A6E7] transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Services (Upcoming)
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-600 dark:text-gray-400 opacity-70 cursor-not-allowed">
                  Health Checkups
                </span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400 opacity-70 cursor-not-allowed">
                  Medical Consultations
                </span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400 opacity-70 cursor-not-allowed">
                  Diagnostic Tests
                </span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400 opacity-70 cursor-not-allowed">
                  Emergency Care
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#01A6E7] mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  support@mediease.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#01A6E7] mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  +880 1700-000000
                </span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-[#01A6E7] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © 2025
              <span className="font-semibold text-[#01A6E7]">MediEase™</span>.
              All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#01A6E7] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#01A6E7] transition-colors duration-200"
              >
                Terms of Service
              </a>
              <Link
                to={"/contact"}
                className="text-gray-500 dark:text-gray-400 hover:text-[#01A6E7] transition-colors duration-200"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
