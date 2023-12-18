// import React from "react";
// import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";

// function FormikForm() {
//   console.error(Formik.errors);

//   <Formik
//     initialValues={{
//       email: "",
//       password: "",
//       name: "",
//     }}
//     validationSchema={Yup.object({
//       name: Yup.string().min(3, "Must be 3 characters or more").required(),
//       email: Yup.string().email("Invalid email address").required(),
//       password: Yup.string().min(6, "Must be 6 characters or more").required(),
//     })}
//     onSubmit={(values) => {
//       console.log(values);
//     }}
//   ></Formik>;

//   return (
//     <div>
//       <Form>
//         <Field type="text" name="name" placeholder="name" />
//         <Field type="email" name="email" placeholder="email" />
//         <Field type="password" name="password" placeholder="password" />
//         <button type="submit">Submit</button>
//       </Form>
//     </div>
//   );
// }

// export default FormikForm;

import React from "react";
import { Formik, Field, Form, useFormik } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Must be 3 characters or more").required(),
      email: Yup.string().email("Invalid email address").required(),
      password: Yup.string().min(6, "Must be 6 characters or more").required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.error(Formik.errors);
  return (
    <div>
      <form onSubmit={Formik.handleSubmit}>
        <label htmlFor="name"> Name:</label>
        <input
          onChange={Formik.handleChange}
          type="text"
          name="name"
          placeholder="name"
        />
        <p style={{ color: "red" }}>
          {Formik.touched.name && Formik.errors.name}
        </p>
        <label htmlFor="email">Email:</label>
        <input
          onChange={Formik.handleChange}
          type="email"
          name="email"
          placeholder="email"
        />
        <p style={{ color: "red" }}>
          {Formik.touched.email && Formik.errors.email}
        </p>
        <label htmlFor="password">Password:</label>
        <input
          onChange={Formik.handleChange}
          type="password"
          name="password"
          placeholder="password"
        />
        <p style={{ color: "red" }}>
          {Formik.touched.password && Formik.errors.password}
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormikForm;
