import React from "react";
import "./sidbar.scss";
import { NavLink } from "react-router-dom";

const sidbar = () => {
  return (
    <div className="sidbar">
      <div className="sidbar__menu">
        <div className="sidbar__item">
          <NavLink className="sidbar__link" to="/profile">
            profile
          </NavLink>
        </div>
        <div className="sidbar__item">
          <NavLink className="sidbar__link" to="/photo">
            photo
          </NavLink>
        </div>
        <div className="sidbar__item">
          <NavLink className="sidbar__link" to="/music">
            music
          </NavLink>
        </div>
        <div className="sidbar__item">
          <NavLink className="sidbar__link" to="/contact">
            contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default sidbar;
