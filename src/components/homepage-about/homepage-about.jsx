import React from "react";
import styles from "./homepage-about.module.scss";

export default function HomepageAbout(props) {
  return (
    <div className={styles["homepage-about"]} id="homepage-about">
      <div className={styles["background-name"]}>
        <span>Xiaomin</span>
      </div>
      <div className={styles["homepage-about-content"]}>
        <p className={styles["greeting"]}>Hi, I'm Xiaomin Guo</p>
        <div className={styles["portrait-and-introduction"]}>
          <div className={styles["head-portrait"]}>
            <img alt="head portrait" src="/min_portrait.jpg" />
          </div>
          <div className={styles["introduction"]}>
            <p className={styles["p-first-line"]}>I LIVE IN</p>
            <p className={styles["p-second-line"]}>MARKHAM, TORONTO</p>
          </div>
        </div>
        <p className={styles["profile"]}>
          Xiaomin is an enthusiastic and highly motivated developer with passion
          and experience in efficiently coding websites and applications using
          modern HTML, CSS, JavaScript, React.js, Node.js. Translate UI/UX
          designs to front-end code. Eager to embrace challenges and learn more.
          Excited to bring skills to a new environment as a frontend developer.
        </p>
        <wavy></wavy>
      </div>
    </div>
  );
}
