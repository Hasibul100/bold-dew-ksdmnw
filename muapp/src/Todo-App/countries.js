import React, { useState, useEffect } from "react";

import Country from "./conutry";
import Search from "./search";
export default function Countries({ ondata, ss }) {
  const [cdata, setcData] = useState([]);

  const [filters, setFilters] = useState([]);
  useEffect(() => {
    setcData(ondata);
  }, [ondata]);
  useEffect(() => {
    setFilters(cdata);
  }, [cdata]);

  const delData = (a) => {
    setFilters(filters.filter((itm) => itm.name.common !== a));
  };
  const srs = (a) => {
    let val = a.toLowerCase();
    const newc = cdata.filter((itm) => {
      const val1 = itm.name.common.toLowerCase();
      return val1.startsWith(val);
    });
    setFilters(newc);
  };
  return (
    <>
      <Search searchdata={srs} />
      <Country onremov={delData} ondata={filters} />
      {/* countries {ss}
      {console.log(cdata[0])} */}
    </>
  );
}
