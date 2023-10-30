import { Form } from "formik";
import Button from "../../../../components/Button";
import TextField from "../../../../components/Input/TextField";
import withForm from "./withForm";

const initialValues = {
  email: "",
};

const ForgotPasswordForm = ({
  handleSubmit,
  handleBlur,
  handleChange,
  values,
  error,
  touched,
}) => {
  return (
    <Form>
      <TextField name="email" placeholder="Email address or phone number" />
      <Button style={{ width: "100%" }} type="submit">
        submit
      </Button>
    </Form>
  );
};

export default withForm(ForgotPasswordForm);
