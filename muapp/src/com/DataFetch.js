import React, { useState, useEffect } from "react";

import useHook from "./useHook";

export default function DataFetch() {
  const { data, loading, error } = useHook(
    "https://jsonplaceholder.typicode.com/todos",
  );

  return (
    <div>
      <h1>DataFetch</h1>
      {!loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && data.map((item, key) => <p key={key}>{item.title}</p>)}
    </div>
  );
}
