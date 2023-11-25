import React from "react";
import Child3 from "./Child3";

export default function Child2(props) {
  const { pData, txt } = props;

  return (
    <>
      <h1>
        Hello Child2
        <br />
        {txt}
        {pData}
      </h1>
      <Child3 txt={"I am Child2 and " + txt} />
    </>
  );
}
