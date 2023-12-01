import React, { useState } from "react";
import Css from "./form_style.css"; // Make sure to specify the file extension
//import Data from "../User&Pass/Data";

export default function Sign_In_page(props) {
  const [frmdata, setfrmdata] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const indata = (e) => {
    const { name, value } = e.target;
    setfrmdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    props.fdt(frmdata);
    // console.log(frmdata);

    // props.fdata(frmdata);
 
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={submit}>
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          onChange={indata}
          name="fullname"
          value={frmdata.fullname}
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={indata}
          name="username"
          value={frmdata.username}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={indata}
          value={frmdata.email}
          id="email"
          name="email"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={frmdata.password}
          onChange={indata}
          id="password"
          name="password"
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
