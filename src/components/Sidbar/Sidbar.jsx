import React from "react";
import "./sidbar.scss";

const sidbar = () => {
  return (
    <div className="sidbar">
      <div className="sidbar__menu">
        <div className="sidbar__item">
          <a className="sidbar__link" href="/#">
            profile
          </a>
        </div>
        <div className="sidbar__item">
          <a className="sidbar__link" href="/#">
            photo
          </a>
        </div>
        <div className="sidbar__item">
          <a className="sidbar__link" href="/#">
            music
          </a>
        </div>
        <div className="sidbar__item">
          <a className="sidbar__link" href="/#">
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default sidbar;
