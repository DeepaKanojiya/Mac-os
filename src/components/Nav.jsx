import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";

function Nav() {
  return (
    <nav>
      <div className="left">
        <div className="app-icon">
          <img src="navbar-icons/apple.svg" alt="" />
        </div>
        <div className="nav-item">
          <p>Deepak Kanojiya</p>
        </div>
        <div className="nav-item">
          <p>file</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>

      <div className="right">
        <div className="nav-icon">
            <img src="navbar-icons/wifi.svg" alt="" />
        </div>
        <div className="nav-item">
            <DateTime/>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
