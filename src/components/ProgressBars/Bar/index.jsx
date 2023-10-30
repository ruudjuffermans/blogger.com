import styles from "./style.module.css";

const ProgressBar = ({ width = 10, size = 150, percentage = 50 }) => {
  return (
    <div
      className={styles.bar}
      style={{ height: width, width: size, borderRadius: width / 2 }}
    >
      <div
        className={styles.progress}
        style={{
          height: width,
          width: `${percentage}%`,
          borderRadius: width / 2,
          opacity: 1,
        }}
      >
        {/* {percentage}% */}
      </div>
      {/* <div className={styles.percentage}>{percentage}%</div> */}
    </div>
  );
};

export default ProgressBar;
