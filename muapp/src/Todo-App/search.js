import React, { useState, useEffect } from "react";

export default function Search({ searchdata }) {
  const [data, setData] = useState("");
  useEffect(() => {
    searchdata(data);
  }, [data]);
  const handleSearch = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input
          style={{ textAlign: "center" }}
          type="text"
          placeholder="Search"
          value={data}
          onChange={handleSearch}
        />
      </div>
    </>
  );
}
