import React from "react";

import "./style.css";
export default function Country({ ondata, onremov }) {
  const delData = (a) => {
    onremov(a);
  };
  return (
    <>
      <div>
        {ondata.map((itm, i) => (
          <div className="card" key={i}>
            <h2 className="country-name" key={i}>
              {itm.name.common}
            </h2>
            <img
              className="country-flag"
              src={itm.flags.png}
              alt={itm.name.common}
            />
            <p>Capital: {itm.capital}</p>
            <p>Region: {itm.region}</p>
            <p>Population: {itm.population}</p>
            <p>Area: {itm.area}</p>
            <button
              className="btn"
              onClick={() => {
                delData(itm.name.common);
              }}
            >
              Remove this Country
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
