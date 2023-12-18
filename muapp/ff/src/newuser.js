import React, { useState} from 'react'
import { useCstmCntxt } from './hook'

function Newuser({newdata}) {
  const{name,setname} = useCstmCntxt();

    const [newuser,setnewuser]= useState('')
    const handelchange=(e)=>{
        setnewuser(e.target.value)
    }
    const hndlsbmt=(e)=>{
        e.preventDefault()
        setname([...name,{id:new Date().getTime().toString(),name:newuser}])
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
