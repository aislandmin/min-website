import React from "react";
import "../scss/homepage-experience.scss";

export default function HomepageExperience(props) {
  return (
    <div className="homepage-experience">
      <div className="homepage-experience-content">
        <div className="experience-headline">
          <p className="p-headline">
            WORK <br />
            EXPERIENCE
          </p>
        </div>
        <ul className="experience-list">
          <li className="experience-list-item">
            <p className="p-year">2014-2015</p>
            <p className="p-company">PT Traveloka Indonesia</p>
            <p className="p-position">Web Designer</p>
          </li>
          <li className="experience-list-item">
            <p className="p-year">2013-2014</p>
            <p className="p-company">Wego</p>
            <p className="p-position">UI/UX Designer</p>
          </li>
          <li className="experience-list-item">
            <p className="p-year">2014-2015</p>
            <p className="p-company">Garuda Indonesia</p>
            <p className="p-position">System Designer Designer</p>
          </li>
        </ul>
        <wavy></wavy>
      </div>
    </div>
  );
}
