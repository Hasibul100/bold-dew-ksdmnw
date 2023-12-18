import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogData } from './blogData';
function Blog() {
    const{title}=useParams();
    const [tData,settData]=useState('');
    
    useEffect(()=>{
        const bodyData= BlogData.filter((itm)=>itm.title === title)
        settData(bodyData[0].body)
    },[title])
  return (
    <div>
        <h2>{title}</h2>
<p>{tData.slice(0,200)}</p>
<p>{tData.slice(201,400)}</p>
<p>{tData.slice(401,600)}</p>
<p>{tData.slice(601,800)}</p>

        </div>
  )
}

export default Blog