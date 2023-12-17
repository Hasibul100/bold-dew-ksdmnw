import React, { useState } from 'react'

function Newuser({newdata}) {

    const [newuser,setnewuser]= useState('')
    const handelchange=(e)=>{
        setnewuser(e.target.value)
    }
    const hndlsbmt=(e)=>{
        e.preventDefault()
        newdata(newuser)
        setnewuser('')
    }
  return (
    <div>
      <h1>Register new user</h1>
      <form onSubmit={hndlsbmt}>
        <input required
        value={newuser}
        onChange={handelchange}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Newuser;
