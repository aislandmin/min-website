import React from "react";
import "../scss/homepage-achievements.scss";

export default function HomepageAchievements(props) {
  return (
    <div className="homepage-achievements">
      <div className="homepage-achievements-content">
        <div className="achievements-headline">
          <p className="p-headline">AWARD &amp;</p>
          <p className="p-headline">ACHIEVEMENTS</p>
        </div>
        <ul className="achievements-list">
          <li className="achievements-list-item">
            <p className="p-year-month">January 2014</p>
            <p className="p-description">Attainted PHP5 certification</p>
            <p className="p-description">Hold world/Olympic record</p>
          </li>
          <li className="achievements-list-item">
            <p className="p-year-month">December 2014</p>
            <p className="p-description">
              Audited X number of clients in only Y amount of time
            </p>
            <p className="p-description">Held a perfect attendance record</p>
            <p className="p-description">
              Were promoted after only 6 months in the role
            </p>
          </li>
          <li className="achievements-list-item">
            <p className="p-year-month">March 2014</p>
            <p className="p-description">Placed employees at X company</p>
            <p className="p-description">United multiple teams post-merger</p>
          </li>
        </ul>
        <wavy></wavy>
      </div>
    </div>
  );
}
