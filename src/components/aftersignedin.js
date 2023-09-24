import React from "react";
import "../styles/aftersignedin.css";
import { NavLink } from "react-router-dom";


function AfterSignedIn() {
  return (
    <NavLink to="/userInfo" className="signedIn">
      <div className="buttonContainer">
        <button className="signButton">{localStorage.getItem("email")} </button>
      </div>
    </NavLink>
  );
}

export default AfterSignedIn;
