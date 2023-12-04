import React, { useState } from "react";

export default function Faqs({ title, description }) {
  const [btn, setbtn] = useState(false);
  return (
    <>
      <div>
        <h3>{title}</h3>
        <button onClick={() => setbtn(!btn)}>{btn ? "-" : "+"}</button>
        <p>{btn && description}</p>
      </div>
    </>
  );
}
