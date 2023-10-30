import { ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { WizardStep } from "../Wizard";

const Step2 = () => {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <Field
        autoComplete="email"
        component="input"
        id="email"
        name="email"
        placeholder="Email"
        type="text"
      />
      <ErrorMessage className="error" component="div" name="email" />
    </div>
  );
};

export default Step2;
