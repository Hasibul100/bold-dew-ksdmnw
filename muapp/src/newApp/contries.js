import React, { useState, useEffect } from "react";
import Country from "./country";

export default function Countries({ data }) {
  const [countries, setCountries] = useState([]);
  const [fileredCountries, setFileredCountries] = useState([]);
  useEffect(() => {
    setCountries(data);
    setFileredCountries(data);
  }, [data]);

  return (
    <>
      {fileredCountries.map((country, index) => {
        return <Country key={index} cdata={country} />;
      })}
    </>
  );
}
