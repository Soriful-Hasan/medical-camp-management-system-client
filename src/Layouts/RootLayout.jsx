import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen px-4 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
