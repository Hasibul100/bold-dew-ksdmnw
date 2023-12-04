import React, { useState } from "react";
import "./faqs.module.css";
function FAQs({ id, title, description }) {
  const [btn, setbtn] = useState(false);
  return (
    <>
      <div>
        <h3 onClick={() => setbtn(!btn)}>{title}</h3>

        <button
          onClick={() => {
            setbtn(!btn);
          }}
        >
          {btn ? "-" : "+"}
        </button>
        <p>{btn && description}</p>
      </div>
    </>
  );
}

export default FAQs;
