import { useField } from "formik";
import styles from "./style.module.css";
import FormControl from "../FormControl";
import Label from "../Label";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage";

const TextField = ({ className, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const classes = [];

  classes.push(styles.textfield);
  if (className) {
    classes.push(className);
  }

  console.log(meta);

  const handleChange = (e) => {
    field.onChange(e);
  };
  const handleBlur = (e) => {
    field.onBlur(e);
  };

  return (
    <div>
      <FormControl>
        <Label name={field.name} label={props.label}>
          <input
            className={classes.join(" ")}
            value={field.value}
            {...props}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Label>
        <ErrorMessage name={field.name} />
      </FormControl>
    </div>
  );
};

export default TextField;
