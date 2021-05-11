import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControler from "./FormikControler";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Select an options", value: "" },
    { key: "Options 1", value: "option1" },
    { key: "Options 2", value: "option2" },
    { key: "Options 3", value: "option3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log("Form data ", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControler
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControler
            control="textarea"
            label="Description"
            name="description"
          />

          <FormikControler
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
