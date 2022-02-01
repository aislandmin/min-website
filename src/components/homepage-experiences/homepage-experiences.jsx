import React from "react";
import styles from "./homepage-experiences.module.scss";

export default function HomepageExperiences(props) {
  return (
    <div className={styles["homepage-experiences"]} id="homepage-experiences">
      <div className={styles["homepage-experiences-content"]}>
        <div className={styles["experiences-headline"]}>
          <p className={styles["p-headline"]}>
            WORK <br />
            EXPERIENCES
          </p>
        </div>
        <ul className={styles["experiences-list"]}>
          <li className={styles["experiences-list-item"]}>
            <p className={styles["p-year"]}>April 2020 - Present</p>
            <p className={styles["p-company"]}>Flashcoding</p>
            <p className={styles["p-position"]}>
              Front End Development Engineer
            </p>
          </li>
          <li className={styles["experiences-list-item"]}>
            <p className={styles["p-year"]}>June 2019 - March 2020</p>
            <p className={styles["p-company"]}>
              Redstone Consulting Service Corporation
            </p>
            <p className={styles["p-position"]}>
              Front End Development Engineer
            </p>
          </li>
          <li className={styles["experiences-list-item"]}>
            <p className={styles["p-year"]}>July 2006 - September 2018</p>
            <p className={styles["p-company"]}>ZTE Corporation</p>
            <p className={styles["p-position"]}>
              Front End Development Engineer, Senior Software Development
              Engineer, Business Analyst
            </p>
          </li>

          <li className={styles["experiences-list-item"]}>
            <p className={styles["p-year"]}>April 2005 - June 2006</p>
            <p className={styles["p-company"]}>HUAWEI Technologies</p>
            <p className={styles["p-position"]}>
              Software Development Engineer
            </p>
          </li>
        </ul>
        <wavy></wavy>
      </div>
    </div>
  );
}
