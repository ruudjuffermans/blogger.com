import styles from "./style.module.css";

const ProgressCircle = ({
  width = 10,
  size = 150,
  percentage = 70,
  children,
}) => {
  const radius = size / 2 - width / 2;
  const pathDescription = `
      M ${size / 2},${size / 2} m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        height: size,
        width: size,
      }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <path d={pathDescription} className={styles.bar} strokeWidth={width} />

        <path
          d={pathDescription}
          strokeWidth={width}
          className={styles.progress}
          style={progressStyle}
        />
      </svg>
      <div className={styles.percentage}>{percentage}</div>
    </div>
  );
};

export default ProgressCircle;
