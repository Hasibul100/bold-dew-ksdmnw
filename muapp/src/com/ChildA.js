import React from "react";

export default function ChildA(props) {
  const numbers = [1,2,3]
  props.num(numbers)

  return (
    <>
      <h1>Hello ChildA</h1>
    </>
  );
}
