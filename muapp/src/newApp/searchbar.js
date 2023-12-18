import React, { useState, useEffect } from "react";

export default function Search() {
  const [search, setsearch] = useState("");
  handelsearch = (e) => {
    setsearch(e.target.value);
  };
  useEffect(() => {
    alert(search);
  }, [search]); 
  return (
    <>
      <div>
        <input
          placeholder="Enter Country Name"
          onChange={handlesearch}
          type="text"
          name="srcber"
          id="srcber"
        />
      </div>
    </>
  );
}
