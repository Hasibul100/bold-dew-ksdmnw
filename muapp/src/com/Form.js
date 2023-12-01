import React from "react";

export default function Form() {
  return (
    <>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Sign In</button>
    </>
  );
}
