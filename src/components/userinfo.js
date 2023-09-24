import React from "react";
import "../styles/userinfo.css";
import { signOut } from "./firebase.js";
import { NavLink } from "react-router-dom";

function UserInfo() {
  return (
    <div className="section">
      <div className="userInfo">
        <div id="userData">
          <div id="userDetails">
            <h4 id="userEmail">Email : {localStorage.getItem("email")}</h4>
          </div>
        </div>
      </div>
      <div className="signoutButton">
        <NavLink to="/">
          <button className="signOut" onClick={signOut}>Sign Out</button>
        </NavLink>
      </div>
        
    </div>
  );
}

export default UserInfo;
