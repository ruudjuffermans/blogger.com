import Row, { Col } from "../../Row";
import styles from "./style.module.css";

function splitArray(array) {
  const midpoint = Math.floor(array.length / 2);

  return [array.slice(0, midpoint), array.slice(midpoint)];
}

const ProgressSteps = ({ broken, steps, currentStep }) => {
  const [steps1, steps2] = splitArray(steps);
  if (broken) {
    return (
      <div>
        <Row style={{ gap: 0 }}>
          {steps1.map((x, i) => (
            <Col key={i}>
              <button
                disabled
                className={[
                  i === 0 ? styles.init__btn : styles.step__btn,
                  currentStep === i && styles.step__active,
                  currentStep >= i && styles.step__done,
                ].join(" ")}
              >
                <p className={styles.step__desc}>{x}</p>
              </button>
            </Col>
          ))}
        </Row>
        <Row style={{ gap: 0, marginTop: "30px" }}>
          {steps2.map((x, i) => (
            <Col key={i}>
              <button
                disabled
                className={[
                  i === 0 ? styles.init__btn : styles.step__btn,
                  currentStep === i + steps1.length && styles.step__active,
                  currentStep >= i + steps1.length && styles.step__done,
                ].join(" ")}
              >
                <p className={styles.step__desc}>{x}</p>
              </button>
            </Col>
          ))}
        </Row>
      </div>
    );
  } else {
    return (
      <div>
        <Row style={{ gap: 0 }}>
          {steps.map((x, i) => (
            <Col key={i}>
              <button
                disabled
                className={[
                  i === 0 ? styles.init__btn : styles.step__btn,
                  currentStep === i && styles.step__active,
                  currentStep >= i && styles.step__done,
                ].join(" ")}
              >
                <p className={styles.step__desc}>{x}</p>
              </button>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
};

export default ProgressSteps;
