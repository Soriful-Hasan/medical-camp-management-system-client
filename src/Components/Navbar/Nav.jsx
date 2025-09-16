import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";
import toast from "react-hot-toast";
import DropDown from "../DropDown/DropDown";

const Nav = () => {
  const { user, userSignOut, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    userSignOut()
      .then((result) => {
        localStorage.removeItem("route");
        toast.success("Sign out successfully");
      })
      .catch((error) => {
        toast.error("Something was wrong");
      });
  };

  return (
    <nav
      className={`
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-white/95 dark:bg-dark-primary/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
        : "bg-white/90 dark:bg-dark-primary/90 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30"
    }
  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo - Desktop */}
          <div className="hidden lg:flex flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-1">
              {[
                { to: "/", label: "Home" },
                { to: "/items", label: "Camps" },
                { to: "/health-awareness", label: "Health Awareness" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to={to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-white bg-my-primary shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:text-my-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"
                    }`
                  }
                >
                  {label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-my-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile: Left side - Menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-my-primary/50"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-5 h-5">
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-2" : "top-0"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 top-2 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-2" : "top-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile: Center - Brand name */}
          <div className="flex lg:hidden flex-1 justify-center">
            <Link
              to="/"
              className="text-lg font-bold text-gray-800 dark:text-white hover:text-my-primary dark:hover:text-my-primary transition-colors duration-200"
            >
              MediCamp
            </Link>
          </div>

          {/* Right Section - Theme Toggle & Auth */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle */}
            <div className="flex items-center">
              <ToggleDarkMode />
            </div>

            {/* Auth Section - Desktop */}
            <div className="hidden lg:block">
              {loading ? (
                <div className="flex items-center justify-center w-10 h-10">
                  <div className="w-6 h-6 border-2 border-my-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : user ? (
                <DropDown handleSignOut={handleSignOut} />
              ) : (
                <Link
                  to="/auth/login"
                  className="px-6 py-2 bg-my-primary text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Log in
                </Link>
              )}
            </div>

            {/* User Avatar/Login - Mobile only */}
            <div className="flex lg:hidden">
              {loading ? (
                <div className="flex items-center justify-center w-8 h-8">
                  <div className="w-5 h-5 border-2 border-my-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : user ? (
                <div className="w-8 h-8 rounded-full bg-my-primary/20 flex items-center justify-center">
                  <span className="text-my-primary font-bold text-sm">
                    {user?.displayName?.charAt(0) ||
                      user?.email?.charAt(0) ||
                      "U"}
                  </span>
                </div>
              ) : (
                <Link
                  to="/auth/login"
                  className="px-3 py-1.5 bg-my-primary text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-blue-600"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-dark-primary/95 backdrop-blur-md rounded-b-2xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <NavLink
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-my-primary to-blue-600 shadow-lg transform scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:text-my-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:transform hover:translate-x-2"
                  }`
                }
              >
                <span className="text-xl mr-3">🏠</span>
                <span>Home</span>
              </NavLink>

              <NavLink
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                to="/items"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-my-primary to-blue-600 shadow-lg transform scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:text-my-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:transform hover:translate-x-2"
                  }`
                }
              >
                <span className="text-xl mr-3">🏕️</span>
                <span>Camps</span>
              </NavLink>

              <NavLink
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                to="/health-awareness"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-my-primary to-blue-600 shadow-lg transform scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:text-my-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:transform hover:translate-x-2"
                  }`
                }
              >
                <span className="text-xl mr-3">❤️</span>
                <span>Health Awareness</span>
              </NavLink>

              <NavLink
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                to="/about"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-my-primary to-blue-600 shadow-lg transform scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:text-my-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:transform hover:translate-x-2"
                  }`
                }
              >
                <span className="text-xl mr-3">ℹ️</span>
                <span>About Us</span>
              </NavLink>

              <NavLink
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-my-primary to-blue-600 shadow-lg transform scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:text-my-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:transform hover:translate-x-2"
                  }`
                }
              >
                <span className="text-xl mr-3">📞</span>
                <span>Contact</span>
              </NavLink>
            </div>

            {/* Mobile Auth Section */}
            {user && (
              <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="px-4 py-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Welcome, {user?.displayName || user?.email}
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                >
                  <span className="text-xl mr-3">🚪</span>
                  Sign Out
                </button>
              </div>
            )}

            {/* Mobile Menu Footer */}
            <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="px-4 py-2 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  MediCamp © 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
