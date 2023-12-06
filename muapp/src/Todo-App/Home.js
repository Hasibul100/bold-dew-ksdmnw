import React, { useState, useEffect } from "react";
import Countries from "./countries";

const url = "https://restcountries.com/v3.1/all";

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(true);
      });
  }, [url]);

  return (
    <>
      <Countries ss="  ami amar  " ondata={data} />

      {loading && <h1>Loading...</h1>}
      {/* {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Countries</h1>
          <div>
            {data.map((item, i) => (
              <Countries key={i} countries={item} />
            ))}
          </div>
        </div>
      )}

      {error && <h1>Error: {error.message}</h1>} */}
      {/* {console.log(data[0])} */}
      {error && <h1>Error: {error.message}</h1>}
    </>
  );
}
