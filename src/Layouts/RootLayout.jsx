import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header/Header";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  const { state } = useNavigate();
  return (
    <div className="dark:bg-[#121212] ">
      <section className=" dark:bg-dark-secondary">
        {/* <Navbar /> */}
        <Nav />
      </section>
      <main className="min-h-screen">
        {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
