import Container from "../../components/Container";
import Section from "../../components/Section";
import styles from "./style.module.css";
import Row from "../../components/Row";
import imagePlaceholder from "../../assets/images/image-placeholder.jpg";
import Col from "../../components/Col";
import { Form, Formik } from "formik";
import TextArea from "../../components/Inputs/TextArea";
import TextInput from "../../components/Inputs/TextInput";
import ImageUpload from "../../components/ImageUploader";

const initialValues = {
  image: "",
  subject: "",
  tags: "",
  title: "",
  introduction: "",
  content: "",
};

const Create = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      // validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Container>
              <Row>
                <Col md={5}>
                  <Section>
                    <div>Story image</div>
                    <ImageUpload size={"180px"} />
                    <img src={imagePlaceholder} alt="" />
                  </Section>
                  <Section>
                    <TextInput
                      type="text"
                      name="tags"
                      label="tags"
                      placeholder="tags."
                    />
                  </Section>
                </Col>
                <Col md={7}>
                  <Section>
                    <TextInput
                      type="text"
                      name="title"
                      label="title"
                      placeholder="title."
                    />
                  </Section>
                  <Section>
                    <div>
                      <TextArea
                        type="text"
                        name="introduction"
                        label="introduction"
                        placeholder="introduction."
                      />
                      <p>
                        Characters remaining:
                        {100 - initialValues.introduction.length} / {100}
                      </p>
                    </div>
                  </Section>
                  <Section>
                    <TextArea
                      type="text"
                      name="content"
                      label="content"
                      placeholder="content."
                    />
                  </Section>
                </Col>
              </Row>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Create;
