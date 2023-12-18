import React from 'react'
import Users from './Users'
import Newuser from './newuser'
import Userprovider from './hook'

export default function Com1() {
 
  return (
    <Userprovider>
    <Users />
    <Newuser />

    </Userprovider>
   
  )
}
