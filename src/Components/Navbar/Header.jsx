import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2" to="/">
            Freelancing
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5 " to="/clientsignin">
                  Client
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5 " to="/freesignin">
                  Freelancer
                </Link>
              </li>
                         </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
