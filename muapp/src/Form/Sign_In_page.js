import React from "react";
import Css from "./form_style.css";

export default function Sign_In_page() {
  return (
    <div class="form-container">
      <h2>Sign In</h2>
      <form
        onSubmit={
          (e)=>{
            e.preventDefault();
          }
        }
      >
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
