import { withFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().required("Email address is required."),
});

const withForm = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema,
  validateOnChange: false,
  handleSubmit: (values, rest) => {
    console.log(rest);
    alert(JSON.stringify(values, null, 2));
    rest.setSubmitting(false);
    rest.setFieldError("search", "hey");
  },
});

export default withForm;
