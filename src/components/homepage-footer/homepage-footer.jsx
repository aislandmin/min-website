import React from "react";
import styles from "./homepage-footer.module.scss";

export default function HomepageFooter(props) {
  return (
    <div className={styles["homepage-footer"]} id="homepage-footer" style={{ backgroundImage: 'url("/background_peony.jpg")' }}>
      <div className={styles["homepage-footer-mask"]}></div>
      <p className={styles["homepage-footer-text"]}>Done is better than perfect.</p>
    </div>
  );
}
