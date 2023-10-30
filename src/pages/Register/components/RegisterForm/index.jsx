import React from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import TextField from "../../../../components/Input/TextField";
import Row, { Col } from "../../../../components/Row";
import withForm from "./withForm";

const RegisterForm = ({ handleSubmit }) => {
  return (
    <Form>
      <Row>
        <Col>
          <TextField type="username" name="username" placeholder="username" />
        </Col>
        <Col>
          <TextField type="password" name="password" placeholder="Password" />
        </Col>
      </Row>
      <TextField name="email" placeholder="Email address or phone number" />
      <Row>
        <Col>
          <TextField
            type="firstname"
            name="firstname"
            placeholder="firstname"
          />
        </Col>
        <Col>
          <TextField type="lastname" name="lastname" placeholder="lastname" />
        </Col>
      </Row>
      <Button style={{ width: "100%" }} type="submit">
        register
      </Button>
    </Form>
  );
};

export default withForm(RegisterForm);
