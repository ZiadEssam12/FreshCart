import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/freshcart-logo.svg";
import { userContext } from "../../Context/UserContaxt";
import Cookies from "js-cookie";
export default function Navbar() {
  let { userToken, setUserToken } = useContext(userContext);
  const navigate = useNavigate();
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
          {userToken ? (
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
                <Link className="nav-link" to={"/Wishlist"}>
                  Wishlist
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
          ) : null}
          <ul className="navbar-nav list-unstyled me-4 ms-auto mt-2 mt-lg-0 d-flex flex-column flex-md-row">
            <li className="nav-item">
              <ul className="list-unstyled d-flex">
                <li>
                  <a className="nav-link cursor-pointer me-2" to={"/"}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link cursor-pointer me-2" to={"/"}>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link cursor-pointer me-2" to={"/"}>
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link cursor-pointer me-2" to={"/"}>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link cursor-pointer me-2" to={"/"}>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link cursor-pointer me-2" to={"/"}>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </li>
            {userToken ? (
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  onClick={() => {
                    console.log("signout");
                    Cookies.remove("userToken");
                    setUserToken(null);
                    navigate("/login");
                  }}
                >
                  Signout
                </span>
              </li>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}