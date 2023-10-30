import Container from "../../../../components/Container";
import Section from "../../../../components/Section";
import styles from "./style.module.css";

const SpotlightDisplays = () => {
  return (
    <Section>
      <div className={styles.spotlight__grid}>
        <div className={styles.pos1}></div>
        <div className={styles.pos2}></div>
        <div className={styles.pos3}></div>
        <div className={styles.pos4}></div>
      </div>
    </Section>
  );
};

export default SpotlightDisplays;
