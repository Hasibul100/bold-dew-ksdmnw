import React ,{useState}from 'react'
import { UseContext } from './context'
function com1() {
  const[val,setval]=useState('nadim');
  return (
    <UseContext.Provider value={"dd"}>
<div>hello world </div>
    <UseContext.Provider />
  )
}

export default com1;
