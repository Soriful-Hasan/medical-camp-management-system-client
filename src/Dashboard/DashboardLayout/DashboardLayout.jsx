import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import Logo from "../../Components/Logo/Logo";
import useUserRole from "../../hooks/useUserRole";
import {
  Home,
  Shield,
  Clipboard,
  CreditCard,
  Plus,
  User,
  Settings,
  Menu,
  X,
  Bell,
  Search,
  LogOut,
  LayoutDashboard,
  UserCheck,
  Calendar,
} from "lucide-react";
import Loader from "../../components/Loader/Loader";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { role, isLoading } = useUserRole();
  const { user } = useAuth();
  const { state } = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  const navigationItems = [
    {
      path: "/dashboard",
      icon: <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Dashboard",
      end: true,
      roles: ["participant", "admin"],
    },
    // Participant specific routes
    {
      path: "/dashboard/registered-camps",
      icon: <Clipboard className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Registered Camps",
      roles: ["participant"],
    },
    {
      path: "/dashboard/payment-history",
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Payment History",
      roles: ["participant"],
    },
    // Admin specific routes
    {
      path: "/dashboard/add-camp",
      icon: <Plus className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Add Camp",
      roles: ["admin"],
    },
    {
      path: "/dashboard/manage-camp",
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Manage Camps",
      roles: ["admin"],
    },
    {
      path: "/dashboard/manage-registered-camp",
      icon: <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Manage Registered Camp",
      roles: ["admin"],
    },
    // Common routes
    {
      path: "profile",
      icon: <User className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Profile",
      roles: ["participant", "admin"],
    },
  ];

  const filteredNavItems = navigationItems.filter((item) =>
    item.roles.includes(role)
  );

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "participant":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <title>Dashboard</title>

      {/* Mobile Header - Always visible on mobile */}
      <div className="sticky top-0 z-40 lg:hidden bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between px-3 sm:px-4 py-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Role Badge - Mobile */}
            <div
              className={`hidden xs:inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(
                role
              )}`}
            >
              <Shield className="w-3 h-3 mr-1" />
              <span className="hidden sm:inline">
                {role?.charAt(0).toUpperCase() + role?.slice(1)}
              </span>
              <span className="sm:hidden">{role?.charAt(0).toUpperCase()}</span>
            </div>

            <button className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
            </button>

            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#01A6E7] to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-white/80 bg-opacity-50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
          fixed inset-y-0 min-h-screen left-0 z-50 bg-white dark:bg-gray-800 shadow-xl
          transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:inset-0 lg:shadow-none
          ${sidebarCollapsed ? "lg:w-16 xl:w-20" : "lg:w-64 xl:w-72"}
          w-64 sm:w-72 border-r border-gray-200 dark:border-gray-700
          flex flex-col
        `}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div
              className={`transition-all duration-300 ${
                sidebarCollapsed ? "lg:hidden" : ""
              }`}
            >
              <Logo />
            </div>

            {/* Desktop collapse button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:flex p-1.5 xl:p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-3 h-3 xl:w-4 xl:h-4" />
            </button>

            {/* Mobile close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Role Badge - Desktop */}
          <div className="p-4 lg:p-6 flex-shrink-0">
            <div
              className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium ${getRoleBadgeColor(
                role
              )} ${sidebarCollapsed ? "lg:hidden xl:inline-flex" : ""}`}
            >
              <Shield className="w-3 h-3 mr-1" />
              <span className={sidebarCollapsed ? "xl:inline hidden" : ""}>
                {role?.charAt(0).toUpperCase() + role?.slice(1)}
              </span>
            </div>
          </div>

          {/* Navigation - Scrollable */}
          <nav className="flex-1 px-3 lg:px-4 pb-4 overflow-y-auto">
            <ul className="space-y-1.5 lg:space-y-2">
              {filteredNavItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    end={item.end}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `group relative flex items-center px-2.5 lg:px-3 py-2.5 lg:py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#01A6E7] to-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                      } ${
                        sidebarCollapsed
                          ? "lg:justify-center xl:justify-start"
                          : ""
                      }`
                    }
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span
                      className={`ml-2.5 lg:ml-3 transition-all duration-300 truncate ${
                        sidebarCollapsed ? "lg:hidden xl:inline" : ""
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Tooltip for collapsed state */}
                    {sidebarCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 xl:hidden">
                        {item.label}
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-3 lg:p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div className="space-y-1.5 lg:space-y-2">
              <button
                className={`cursor-pointer w-full flex items-center px-2.5 lg:px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors ${
                  sidebarCollapsed ? "lg:justify-center xl:justify-start" : ""
                }`}
              >
                <LogOut className="w-4 h-4 flex-shrink-0" />
                <Link
                  to={"/"}
                  className={`ml-2.5 lg:ml-3 truncate ${
                    sidebarCollapsed ? "lg:hidden xl:inline" : ""
                  }`}
                >
                  Logout
                </Link>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col">
          {/* Desktop Header */}
          <header className="hidden lg:block bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="px-4 xl:px-6 py-4 xl:py-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <h1 className="text-xl xl:text-2xl font-bold text-gray-900 dark:text-white truncate">
                    Dashboard
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
                    Welcome back! Here's what's happening with your account.
                  </p>
                </div>

                <div className="flex items-center space-x-2 xl:space-x-4 ml-4">
                  {/* Mobile Search Button */}
                  <button className="xl:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Search className="w-4 h-4" />
                  </button>

                  {/* Notifications */}
                  <button className="relative p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Bell className="w-4 h-4 xl:w-5 xl:h-5" />
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 xl:w-3 xl:h-3 bg-red-500 rounded-full"></span>
                  </button>

                  {/* User Profile */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8  h-8 xl:w-10 xl:h-10 bg-gradient-to-r from-[#01A6E7] to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <img
                        className="rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                    <div className="hidden 2xl:block min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 capitalize truncate">
                        {role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content - Scrollable */}
          <div className="flex-1 overflow-auto">
            <div className="p-4 sm:p-6">
              {state === "loading" ? (
                <div className="flex items-center justify-center min-h-64 sm:min-h-96">
                  <Loader />
                </div>
              ) : (
                <div className="max-w-full">
                  <Outlet />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
