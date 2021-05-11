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

  const radioOptions = [
    { key: "Options 1", value: "roption1" },
    { key: "Options 2", value: "roption2" },
    { key: "Options 3", value: "roption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
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
          <FormikControler
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
