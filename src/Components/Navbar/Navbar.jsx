import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/freshcart-logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} alt="fresh cart logo" />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"} aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/cart"}>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Products"}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Categories"}>
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Brands"}>
                Brands
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <i className="fa-brands fa-tiktok"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Register"}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Signout"}>
                Signout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
