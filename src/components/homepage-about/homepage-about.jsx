import React from "react";
import "../../scss/homepage-about.scss";
import styles from "./homepage-about.module.scss";
//import portrait from "../imgs/portrait.jpg";

export default function HomepageAbout(props) {
  return (
    <div className="homepage-about">
      <div className={styles["background-name"]}><span>Xiaomin</span></div>
      <div className="homepage-about-content">
        <p className="greeting">Hi, I'm Xiaomin Guo</p>
        <div className="portrait-and-introduction">
          <div className="head-portrait">
            <img alt="head portrait" src="/logo512.png" />
          </div>
          <div className="introduction">
            <p className="p-first-line">I LIVE IN</p>
            <p className="p-second-line">FAR NORTHERN SKY</p>
          </div>
        </div>
        <p className="profile">
          Draco is a constellation in the far northern sky. Its name is Latin
          for dragon. Draco is circumpolar (that is, never setting) for many
          observers in the northern hemisphere. It was one of the 48
          constellations listed by the 2nd century astronomer Ptolemy.
        </p>
        <wavy></wavy>
      </div>
    </div>
  );
}
