import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCartPlus, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/authUserActions";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.loginUserReducer);

  const Logout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
       
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars size={25} color="white" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  <FaUser />{" "}
                  {currentUser.user.email.substring(
                    0,
                    currentUser.user.email.length - 10
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
           
            
              <li className="nav-item">
                <Link className="nav-link" onClick={Logout}>
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
