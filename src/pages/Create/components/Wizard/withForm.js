import { withFormik } from "formik";
import * as Yup from "yup";

const withForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    firstName: "",
    lastName: "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Is required"),
    firstName: Yup.string().required("Is required"),
    lastName: Yup.string().required("Is required"),
    username: Yup.string().required("Is required"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log("hit");
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 100);
  },
});

export default withForm;
