import { useState } from "react";
import styles from "./style.module.css";
import { Form, Formik } from "formik";
import Icon from "../../../../components/Icon/Icon";
import TextField from "../../../../components/Input/TextField";

const initialValues = {
  msg: "",
};

const MessengerFooter = () => {
  return (
    <div className={styles.footer}>
      <Formik
        // initialValues={initialValues}
        onSubmit={() => console.log("hey")}
      >
        <Form>
          <div className={styles.input__wrapper}>
            <TextField type="text" name="chat" placeholder="Comment" />
            <div className={styles.input__submit}>
              <button>
                <Icon color={"var(--color-text)"} size={"26px"} />
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MessengerFooter;
