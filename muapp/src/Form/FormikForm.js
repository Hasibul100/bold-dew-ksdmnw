import React from "react";
import { Formik, Field, Form } from "formik";

function FormikForm() {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field type="email" name="email" placeholder="email" />
          <Field type="password" name="password" placeholder="password" />
          <Field type="text" name="name" placeholder="name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
