
import {useCstmCntxt} from './hook'

function User() {
 const {name,setname}= useCstmCntxt();
 const itmremov=(id)=>{
  setname(name.filter((itm)=>itm.id !== id ))
 }
  return (
    <>
    {name.map((itm,key)=><article>
     <h2>{itm.name}</h2>
     <p>{itm.id}</p>
     <button onClick={()=>{itmremov(itm.id)}}>remove</button>
    </article>)}
    </>
  )
}

export default User
