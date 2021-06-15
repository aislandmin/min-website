import React from "react";
import styles from "./homepage-achievements.module.scss";

export default function HomepageAchievements(props) {
  return (
    <div className={styles["homepage-achievements"]} id="homepage-achievements">
      <div className={styles["homepage-achievements-content"]}>
        <div className={styles["achievements-headline"]}>
          <p className={styles["p-headline"]}>
            AWARD &amp;
            <br />
            ACHIEVEMENTS
          </p>
        </div>
        <ul className={styles["achievements-list"]}>
          <li className={styles["achievements-list-item"]}>
            <p className={styles["p-year-month"]}>December 2019</p>
            <p className={styles["p-company"]}>Seneca College</p>
            <p className={styles["p-description"]}>President's Honour List</p>
          </li>
          <li className={styles["achievements-list-item"]}>
            <p className={styles["p-year-month"]}>2006 - 2018</p>
            <p className={styles["p-company"]}>ZTE Corporation</p>
            <p className={styles["p-description"]}>Innovation pioneer</p>
            <p className={styles["p-description"]}>Excellent Employee</p>
            <p className={styles["p-description"]}>
              Excellent work in mobile phone creativity competition
            </p>
            <p className={styles["p-description"]}>
              First prize for peer reviewed excellent judges
            </p>
          </li>
          <li className={styles["achievements-list-item"]}>
            <p className={styles["p-year-month"]}>2005 - 2006</p>
            <p className={styles["p-company"]}>HUAWEI Technologies</p>
            <p className={styles["p-description"]}>Excellent Employee</p>
          </li>
        </ul>
        <wavy></wavy>
      </div>
    </div>
  );
}
