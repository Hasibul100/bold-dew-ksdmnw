import React from "react";
import Child2 from "./Child2";
import ChildA from "./ChildA";

export default function Child1(props) {
  const pChild = (a) => {
    console.log(a);
  };

  return (
    <>
      <ChildA />
      <h1>Hello Child1</h1>
      <Child2 pData={pChild} txt={props.txt} />
    </>
  );
}
