import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer.jsx";

export default function Layout() {
  return (
    <>
        <Navbar />
        <div className="mt-5 pt-2 container">
          <Outlet />
        </div>
        <Footer />
    </>
  );
}
