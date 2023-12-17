import React from 'react'

import User from './User'

function Users({ s,itmremove }) { // Destructure `users` prop directly
  return (
   <> {s.map((user) => 
   <User key={user.id} id={user.id} itmremove={itmremove} user={user.name} /> 
 )}</>
  );
}

export default Users
