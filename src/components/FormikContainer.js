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
    { key: "Options 1", value: "rOption1" },
    { key: "Options 2", value: "rOption2" },
    { key: "Options 3", value: "rOption3" },
  ];

  const checkboxOptions = [
    { key: "Options 1", value: "cOption1" },
    { key: "Options 2", value: "cOption2" },
    { key: "Options 3", value: "cOption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data ", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

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

          <FormikControler
            control="checkbox"
            label="Checkbox topics"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <FormikControler
            control="date"
            label="Pick a date"
            name="birthDate"
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
