import styles from "./style.module.css";

const Logo = ({ size, color }) => {
  return (
    <span style={{ fontSize: size, color }} className={styles.logo}>
      blogger
    </span>
  );
};

export default Logo;
