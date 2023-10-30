import { Form, Formik } from "formik";
import { useState } from "react";
import Button from "../../../../components/Button";
import TextField from "../../../../components/Input/TextField";
import withForm from "./withForm";

const initialValues = {
  email: "",
  password: "",
  remember: true,
};

const LoginForm = ({}) => {
  return (
    <Form>
      <TextField name="email" label="email" placeholder="Email" />
      <TextField
        type="password"
        label="password"
        name="password"
        placeholder="Password"
      />
      <Button style={{ width: "100%" }} type="submit">
        login
      </Button>
    </Form>
  );
};

export default withForm(LoginForm);
