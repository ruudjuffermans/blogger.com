import Container from "../../../../components/Container";
import Section from "../../../../components/Section";
import PostSlider from "../../../../components/Slider";
import styles from "./style.module.css";

const HomeCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <Section>
        <PostSlider
          items={Array(6).fill(<div className={styles.slide}>123</div>)}
        />
      </Section>
    </div>
  );
};

export default HomeCarousel;
