import Button from "../../../../components/Button";
import Container from "../../../../components/Container";
import Row, { Col } from "../../../../components/Row";
import styles from "./style.module.css";

const HeroSection = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Row>
          <Col>
            <span className={styles.hero__title}>HEALTH</span>
          </Col>
          <Col>
            <div>
              <h3 className={styles.hero__subtitle}>
                Unlocking the Secrets to Lifelong Wellness
              </h3>
              <Button>read more</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HeroSection;
