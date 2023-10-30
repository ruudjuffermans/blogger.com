import styles from "./style.module.css";

import placeholder from "../../assets/images/portrait-placeholder.jpg";

const Portrait = ({ image, size = "100px" }) => {
  return (
    <div
      className={styles.portrait__box}
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={image ? image : placeholder}
        alt="portrait"
        className={styles.portrait}
      />
    </div>
  );
};

export default Portrait;
