import TextField from "../../../../components/Input/TextField";
import styles from "./style.module.css";
import Button from "../../../../components/Button";

import withForm from "./withForm";
import { Form } from "formik";
import Row, { Col } from "../../../../components/Row";
import Section from "../../../../components/Section";

const MainSearch = ({
  handleSubmit,
  handleBlur,
  handleChange,
  values,
  error,
  touched,
}) => {
  return (
    <Form>
      <Section>
        <Row>
          <Col>
            <TextField placeholder={"search"} name="search" />
          </Col>
          <Button type={"submit"}>search</Button>
        </Row>
      </Section>
    </Form>
  );
};

export default withForm(MainSearch);
