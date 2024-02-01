import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <div className="container-fluid fixed-top">
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img
                src="../assets/img/logo.png"
                alt="Logo"
                className="logo-image me-2"
              />
              <h1 className="text-primary display-6 mb-0">
                <span className="fa-solid fa-box-archive text-primary"></span>
                Treasure
              </h1>
            </Link>

            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto">
                {" "}
                {/* Changed from mx-auto to ms-auto */}
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/shop" className="nav-item nav-link">
                  Bridal
                </Link>
                <Link to="/shop" className="nav-item nav-link">
                  Exclusive
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Collection
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/shop" className="dropdown-item">
                      Necklaces
                    </Link>
                    <Link to="/shop" className="dropdown-item">
                      Bracelets
                    </Link>
                    <Link to="/shop" className="dropdown-item">
                      Ear studs
                    </Link>
                    <Link to="/shop" className="dropdown-item">
                      All
                    </Link>
                  </div>
                </div>
                <Link to="#" className="nav-item nav-link">
                  About
                </Link>
                <Link
                  to="/cart"
                  className="position-relative text-primary me-4 my-auto"
                >
                  <i className="fa fa-shopping-bag fa-2x"></i>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
