import React, { Component } from "react";
import styles from "./homepage-header.module.scss";

export default class HomepageHeader extends Component {
  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  render() {
    return (
      <div className={styles["homepage-header"]}>
        <ul className={styles["header-navigation"]}>
          <li className={styles["navigation-item"]}>
            <button onClick={() => this.scrollToAnchor("homepage-about", true)}>
              About
            </button>
          </li>
          <li className={styles["navigation-item"]}>
            <button
              inline
              onClick={() => this.scrollToAnchor("homepage-experiences", true)}
            >
              Experiences
            </button>
          </li>
          <li className={styles["navigation-item"]}>
            <button
              inline
              onClick={() => this.scrollToAnchor("homepage-achievements", true)}
            >
              Achievements
            </button>
          </li>
          <li className={styles["navigation-item"]}>
            <button
              inline
              onClick={() => this.scrollToAnchor("homepage-skills", true)}
            >
              Skills
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
