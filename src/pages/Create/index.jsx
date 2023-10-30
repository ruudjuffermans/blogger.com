import { ErrorMessage, Field } from "formik";
import Button from "../../components/Button";
import Card from "../../components/Card";
import TextField from "../../components/Input/TextField";
import * as Yup from "yup";
import Section from "../../components/Section";
import Wizard, { WizardStep } from "./components/Wizard";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import "./style.css";
import ProgressSteps from "../../components/ProgressBars/Step";
import Container from "../../components/Container";

const Create = () => {
  return (
    <Wizard
      initialValues={{
        title: "",
        introduction: "",
        lastName: "",
      }}
      onSubmit={async (values) => () => console.log("Wizard submit", values)}
    >
      <WizardStep
        title={"Step 1. - Title & Introduction"}
        stepDescription={"Title & Introduction"}
        onSubmit={() => console.log("Step1 onSubmit")}
        validationSchema={Yup.object({
          title: Yup.string().required("required"),
          introduction: Yup.string().required("required"),
        })}
      >
        <Step1 />
      </WizardStep>
      <WizardStep
        title={"Step 2 - Story Image"}
        stepDescription={"Story Image"}
        onSubmit={() => console.log("Step2 onSubmit")}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("required"),
        })}
      >
        <Step2 />
      </WizardStep>
      <WizardStep
        title={"Step 3 - Story Tags"}
        stepDescription={"Story Tags"}
        onSubmit={() => console.log("Step2 onSubmit")}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("required"),
        })}
      >
        <Step2 />
      </WizardStep>
      <WizardStep
        title={"Step 4 - Story Content"}
        stepDescription={"Story Content"}
        onSubmit={() => console.log("Step2 onSubmit")}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("required"),
        })}
      >
        <Step2 />
      </WizardStep>
      <WizardStep
        title={"Step 5. Story Category"}
        stepDescription={"Story Category"}
        onSubmit={() => console.log("Step2 onSubmit")}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("required"),
        })}
      >
        <Step2 />
      </WizardStep>

      {/* <Card style={{ margin: "auto", maxWidth: "700px" }}>
          <Card.Header>
          <div>
          <h1>Title & Subtitle</h1>
          <small>step 1 of 4</small>
          </div>
          </Card.Header>
          <Card.Body>
          
          </Card.Body>
          <Card.Footer>
          <div>
          <Button>Prev</Button>
          <Button>Next</Button>
          </div>
          </Card.Footer>
        </Card> */}
    </Wizard>
  );
};

export default Create;
