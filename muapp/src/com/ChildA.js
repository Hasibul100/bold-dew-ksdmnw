import React, { useState } from 'react'

function FAQs(title,desc) {
  const {btn,setbtn}=useState(false)
  return (
    <>
    <div>
      <h3>{title}</h3>
      <button onClick={()=>{
        setbtn(! btn )
      }}>{btn?"-":"+"}</button>
      <p>{btn && desc }</p>
    </div>
    </>
  )
}

export default FAQs