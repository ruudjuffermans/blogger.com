import { withFormik } from "formik";
import * as Yup from "yup";

const withForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    lastname: "",
    firstname: "",
    username: "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Is required"),
    firstname: Yup.string().required("Is required"),
    lastname: Yup.string().required("Is required"),
    username: Yup.string().required("Is required"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
});

export default withForm;
