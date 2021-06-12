import React from "react";
import "../scss/homepage-header.scss";

export default function HomepageHeader(props) {
  return (
    <div className="homepage-header">
      <ul className="header-navigation">
        <li className="navigation-item">About</li>
        <li className="navigation-item">Experiences</li>
        <li className="navigation-item"> Achievements</li>
        <li className="navigation-item">Skills</li>
      </ul>
    </div>
  );
}
