import React, { useState } from "react";

export default function Toggle() {
  const [btn, setbtn] = useState(true);
  return (
    <div>
      {btn && <h1>hello</h1>}
      <button
        onClick={() => {
          setbtn(!btn);
        }}
      >
        {btn ? "hide " : "show "}
      </button>
    </div>
  );
}
