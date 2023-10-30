import { ErrorMessage as FormikErrorMessage } from "formik";
import styles from "./style.module.css";

const ErrorMessage = ({ className, name, ...props }) => {
  const classes = [];

  console.log(props);
  classes.push(styles.error__text);
  if (className) {
    classes.push(className);
  }
  return (
    <FormikErrorMessage
      name={name}
      render={(error) => <div className={styles.error__text}>{error}</div>}
    />
  );
};

export default ErrorMessage;
