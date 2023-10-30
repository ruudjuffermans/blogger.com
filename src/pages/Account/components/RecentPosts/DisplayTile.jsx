import { useState } from "react";
import Button from "../../../../components/Button";
import Col from "../../../../components/Col";
import Link from "../../../../components/Link";
import Row from "../../../../components/Row";
import styles from "./style.module.css";
import Card from "../../../../components/Card";
import Modal from "../../../../components/Modal";
import Icon from "../../../../components/Icon/Icon";
import { Formik, Form } from "formik";
import TextInput from "../../../../components/Inputs/TextInput";

const generateValuesDisplay = (data) => {
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <Row key={key}>
          <Col>
            <span>{key}:</span>
          </Col>
          <Col>
            <span>{value}</span>
          </Col>
        </Row>
      ))}
    </div>
  );
};

const DisplayTile = ({
  title,
  card = false,
  children,
  initialValues,
  validationSchema = {},
  values,
  editName = "edit",
  actionName = "Complete your Profile",
  handleAction = () => {},
}) => {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <Modal show={showModal} setShow={setShowModal}>
        <Card className={styles.modalcard}>
          <Card.Header>
            <span>{title}</span>
            <button onClick={() => setShowModal(false)}>
              <Icon
                name={"close-fill"}
                size={"32px"}
                color="var(--color-text)"
              />
            </button>
          </Card.Header>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <Card.Body>
                    <TextInput
                      type="text"
                      name="firstname"
                      label="firstname"
                      placeholder="firstname."
                    />
                    <TextInput
                      type="text"
                      name="lastname"
                      label="lastname"
                      placeholder="lastname."
                    />
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      underline
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(false);
                      }}
                    >
                      cancel
                    </Link>
                    <Button type="submit" round>
                      Confirm
                    </Button>
                  </Card.Footer>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Modal>
      <Card className={card ? styles.card : styles.nocard}>
        <Card.Body>
          <div className={styles.card__top}>
            <h5 className={styles.title}>{title}</h5>
            {card && (
              <small>
                <Link
                  className={styles.editbutton}
                  button
                  onClick={() => setShowModal(true)}
                  underline
                >
                  {editName}
                </Link>
              </small>
            )}
          </div>
          <div className={styles.content}>
            {card ? (
              children ? (
                children
              ) : (
                generateValuesDisplay(values)
              )
            ) : (
              <Button
                className={styles.actionbutton}
                round
                onClick={() => setShowModal(true)}
                secondary
              >
                {actionName}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default DisplayTile;
