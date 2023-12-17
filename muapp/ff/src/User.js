import React from 'react'

function User({user,id,itmremove}) {
  const itmremov=(id)=>{
    itmremove(id)
  }
  return (
    <>
    <article>
     <h2>{user}</h2>
     <p>{id}</p>
     <button onClick={()=>{itmremov(id)}}>remove</button>
    </article>
    </>
  )
}

export default User
