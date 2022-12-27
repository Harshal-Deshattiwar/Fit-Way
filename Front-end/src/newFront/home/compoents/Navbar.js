import "./style.css";
import React from "react";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();

  const [isUser, setIsUser] = useState("");
  const [isUserRole, setIsUserRole] = useState("");

  useEffect(() => {
    setIsUser(localStorage.getItem("name"));
    setIsUserRole(localStorage.getItem("role"));
  }, []);

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("user");
    history.push("/signin");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light vavProp">
      <div className="container-fluid">
        <NavLink className="btn btn-info " to="/">
          <b class="text-white">FitWay</b>
        </NavLink>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <h4 className="nav-link">Welcome {isUser}</h4>
          </li>
        </ul>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav rightMost ">
            <li className="nav-item ">
              <a className=" nav-link  " href="#div2">
                <b className="text-white">Programs</b>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#aboutFooter">
                <b className="text-white">About US</b>
              </a>
            </li>
            {isUser ? (
              <><>
                {isUserRole === "admin" ? <NavLink
                    className="btn btn-success rightPadding"
                    to="/dashBoard"
                  >
                    DashBoard
                  </NavLink>
                  : <NavLink className="btn btn-success rightPadding" to='/profile'>PROFILE</NavLink>}
              </><>
            
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </></>
            ) : (
              <>
                <NavLink className="btn btn-success rightPadding" to="/Signup">
                  SignUp
                </NavLink>
                <NavLink className="btn btn-primary" to="/Signin">
                  Login
                </NavLink>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
