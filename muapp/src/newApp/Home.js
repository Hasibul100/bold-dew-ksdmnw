import React, { useState, useEffect } from "react";
import Countries from "./contries";
export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(url)
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Network response was not ok");
        }
        return Response.json();
      })
      .then((res) => {
        setData(res);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);
  return (
    <>
      <Countries data={data} />
      {console.log(data)}
      <h1>Hello</h1>
      <h1>{loading && "Loading..."}</h1>
      <h1>{error?.message}</h1>
    </>
  );
}
