import React from "react";

import Child1 from "./Child1";
import ChildA from "./ChildA";

export default function Home() {
  const numb=(n)=>{
    alert(n)
  }
  return (
    <>
    
      <ChildA num={numb}/>

      <h1>Hello</h1>
      <Child1 txt="I am from Home" />
    </>
  );
}
