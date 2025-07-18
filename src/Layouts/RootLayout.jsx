import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Nav from "../components/Navbar/Nav";

const RootLayout = () => {
  return (
    <div className="dark:bg-[#121212]">
      <section className=" dark:bg-dark-secondary">
        {/* <Navbar /> */}
        <Nav />
      </section>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
