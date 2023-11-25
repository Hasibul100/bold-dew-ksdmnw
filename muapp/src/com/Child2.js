import React from "react";
import Child3 from "./Child3";

export default function Child2(props) {
  const avc = "Hello world";
  props.pData(avc);

  return (
    <>
      <h1>
        Hello Child2
        <br />
      </h1>
      <Child3 txt="I am Child 2 are you ok" />
    </>
  );
}
