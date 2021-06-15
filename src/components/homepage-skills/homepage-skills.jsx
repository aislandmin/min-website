import React from "react";
import styles from "./homepage-skills.module.scss";

export default function HomepageAchievements(props) {
  return (
    <div className={styles["homepage-skills"]} id="homepage-skills">
      <div className={styles["homepage-skills-content"]}>
        <div className={styles["skills-headline"]}>
          <p className={styles["p-headline"]}>
            TECHNICAL
            <br />
            SKILLS
          </p>
        </div>
        <ul className={styles["skills-list"]}>
          <li className={styles["skills-list-item"]}>
            <p className={styles["p-category"]}>Web Technologies</p>
            <p className={styles["p-description"]}>
            JavaScript/TypeScript/HTML/CSS/SASS
            </p>
          </li>
          <li className={styles["skills-list-item"]}>
            <p className={styles["p-category"]}>Framework</p>
            <p className={styles["p-description"]}>
            React and related skills such as redux, react-hook, react-native, react-router, etc. 
            </p>
          </li>
          <li className={styles["skills-list-item"]}>
            <p className={styles["p-category"]}>Tools</p>
            <p className={styles["p-description"]}>
              NPM/Git/Webpack/Babel/VS Code/WebStorm etc.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
