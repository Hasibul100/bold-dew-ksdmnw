import React, { useEffect, useState } from "react";

export default function Country({ cdata }) {
  const [data, setData] = useState(data);
  useEffect(() => {
    setData(cdata);
  }, [cdata]);
  const remov = (itmnm) => {
    setData(data.filter((itm) => itm.name.common !== itmnm));
  };
  return (
    <>
      <div className="card">
        <h1>{data.name.common}</h1>
        <img
          style={{ width: "200px" }}
          src={data.flags.png}
          alt={data.flags.alt}
        />
        <p>Population: {data.population}</p>
        <p>Region: {data.region}</p> <p>Capital: {data.capital}</p>
        <p>Area: {data.area}</p>
        <button onClick={() => remov(cdata.name.common)} className="btn">
          Remove this country
        </button>
      </div>
    </>
  );
}
