// import React from "react";
// import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// export default function FormikForm1() {
//   const Formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().min(3, "Must be 3 characters or more").required(),
//       email: Yup.string().email("Invalid email address").required(),
//       password: Yup.string().min(6, "Must be 6 characters or more").required(),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name:</label>
//         <Field onChange={Formik.handleChange} type="text" name="name" />

//         <label htmlFor="email">Email:</label>
//         <Field onChange={Formik.handleChange} type="email" name="email" />

//         <label htmlFor="password">Password:</label>
//         <Field onChange={Formik.handleChange} type="password" name="password" />

//         <button onClick={Formik.handleSubmit} type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
import React from "react";
import { useFormik, Formik, Field, Form } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
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
  return (
    <>
      <div>
        <form>
          <input
            onChange={Formik.handleChange}
            type="text"
            name="name"
            placeholder="name"
          />
          {Formik.errors.name && <p>{Formik.errors.name}</p>}
          <input
            onChange={Formik.handleChange}
            type="email"
            name="email"
            placeholder="email"
          />
          {Formik.errors.email && <p>{Formik.errors.email}</p>}
          <input
            onChange={Formik.handleChange}
            type="password"
            name="password"
            placeholder="password"
          />
          {Formik.errors.password && <p>{Formik.errors.password}</p>}
          <button onClick={Formik.handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
