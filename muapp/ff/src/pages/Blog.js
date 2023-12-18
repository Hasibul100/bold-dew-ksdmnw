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
    <div>{tData}</div>
  )
}

export default Blog