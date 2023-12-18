import React, { useState } from 'react';
import { BlogData } from './blogData';
import'../App.css'
import { Link } from 'react-router-dom';

function Blogs() {
    const trunk=(strng,num)=>{
        if(strng.length > num){
            return strng.slice(0,num)+"..."
        }else{
            return strng
        }
    }
    const [data]=useState(BlogData)
    console.log(data)
  return (

   <section>
    <h1>Blogs</h1>
    {data.map((itm)=>{
        const{id,title,body}=itm;
        return(
            <article key={id}>
                <h2>{title}</h2>
                <p>{trunk(body,50)}</p>
                <Link to={title}>Learn more...</Link>
            </article>
        )
    })}
   </section>
  )
}

export default Blogs