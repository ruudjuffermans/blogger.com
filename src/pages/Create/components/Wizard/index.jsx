import { Children, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import AnimateState from "../../../../components/AnimateState";
import styles from "./style.module.css";
import ProgressSteps from "../../../../components/ProgressBars/Step";
import Section from "../../../../components/Section";
import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import Container from "../../../../components/Container";
import DropArea from "../../../../components/DropArea";

const Wizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);
  const [enter, setEnter] = useState(true);
  const [direction, setDirection] = useState("right");

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const handleStepChange = (value) => {
    setEnter(false);
    setTimeout(() => {
      setStepNumber(value);
      setTimeout(() => {
        setEnter(true);
      }, 300);
    }, 300);
  };

  const next = (values) => {
    setSnapshot(values);
    setDirection("right");
    handleStepChange(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setDirection("left");
    handleStepChange(Math.max(stepNumber - 1, 0));
  };

  const submitStep = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={submitStep}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <AnimateState
            setEnter={setEnter}
            enterOnMount
            duration={300}
            enter={enter}
          >
            {({ state }) => (
              <Section>
                <Card full>
                  <Card.Header
                    title={step.props.title}
                    className={[styles.fade, styles[`fade--${state}`]].join(
                      " "
                    )}
                  />
                  <div className={styles.progress__wrap}>
                    <ProgressSteps
                      broken
                      currentStep={stepNumber}
                      steps={steps.map((step) => step.props.stepDescription)}
                    />
                  </div>

                  <Card.Body
                    className={[
                      styles.body,
                      styles.slide,
                      styles[`${direction}--${state}`],
                    ].join(" ")}
                  >
                    {step}
                  </Card.Body>
                  <Card.Footer className={styles.footer}>
                    <div
                      className={[styles.fade, styles[`fade--${state}`]].join(
                        " "
                      )}
                    >
                      <Button
                        className={styles.footer__button}
                        round
                        secondary
                        disabled={stepNumber === 0}
                        onClick={() => previous(formik.values)}
                        type="button"
                      >
                        Back
                      </Button>

                      <Button
                        className={styles.footer__button}
                        round
                        onClick={formik.submitForm}
                        primary={isLastStep}
                        disabled={formik.isSubmitting}
                        type="button"
                      >
                        {isLastStep ? "Submit" : "Next"}
                      </Button>
                    </div>
                    {/* <DropArea /> */}
                  </Card.Footer>
                </Card>
              </Section>
            )}
          </AnimateState>
        </Form>
      )}
    </Formik>
  );
};

export const WizardStep = ({ children }) => children;

export default Wizard;
