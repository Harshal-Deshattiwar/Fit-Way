import "./style.css";
import React from "react";
import { useEffect, useState } from "react";



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

  const goHome=()=>{
    history.push('/');
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light vavProp">
      <div className="container-fluid">
        <button className="btn btn-info " onClick={goHome}>
          <b className="text-white">FitWay</b>
        </button>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link">Welcome {isUser}</a>
          </li>
        </ul>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav rightMost ">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={logout}
            >
              Logout
            </button>
          </ul>
          
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
