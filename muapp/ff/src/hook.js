// import React, {useState, useContext } from "react";
// import { Context } from './Contex';

// export const useCstmCntxt = () => { 
//     return useContext(Context);
    
// }
// const Userprovider =({chikdren})=>{
//     const [name,setname] = useState([
//         {id:101,name:'Hasibul'},
//         {id:102,name:"prince"},
//         {id:103,name:"mijan"}
//       ])


//     return(
//         <Context.Provider value={{name,setname}}>
//         {chikdren}
//       </Context.Provider>
//     )
// }
// export default Userprovider;

import React, { useState, useContext } from "react";
import { Context } from './Contex';

export const useCstmCntxt = () => {
    return useContext(Context);
}

const UserProvider = ({children}) => { // Fixed the component name to follow conventions
    const [name, setname] = useState([
        { id: 101, name: 'Hasibul' },
        { id: 102, name: "prince" },
        { id: 103, name: "mijan" }
    ]);

    return (
        <Context.Provider value={{ name, setname }}>
            {children} {/* Use the props argument to access the children prop */}
        </Context.Provider>
    );
}

export default UserProvider; // Fixed the component export name to follow conventions
