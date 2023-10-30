import styles from "./style.module.css";

const Page = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

export default Page;
