import React, { useState } from 'react'

import Users from './Users'
import Newuser from './newuser'
export default function Com1() {
  const [name,setname] = useState([
    {id:101,name:'Hasibul'},
    {id:102,name:"prince"},
    {id:103,name:"mijan"}
  ])
  const newdata=(e)=>{
setname([...name,{id:Date().toString(),name:e}])
  }
  const itmremove=(id)=>{
    setname(name.filter((itm)=>itm.id!==id))
  }
  return (
    <div>
      <Users itmremove={itmremove} s={name} />
      <Newuser newdata={newdata}/>
    </div>
  )
}
