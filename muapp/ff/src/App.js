// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';

// function App() {
//   return (
    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/com1">Home</Link>
    //     </li>
    //   </ul>
    //   <Outlet />
    // </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';
import ListRouter from './ListRouter';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';

export default function App() {
  return (
    <>
  
   <BrowserRouter>
   <ListRouter />
   <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/blogs' element={<Blogs />}/>
    <Route path='/blogs/:title' element={<Blog />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/about' element={<About />}/>
    <Route path='*' element={<Error />}/>
    <Route index element={<Home />}/>

   </Routes>
   </BrowserRouter>
   
   </>
  )
}

// // import React,{useState,useReducer} from 'react'
// // import'./App.css'
// // const name=[
// // {id:1,name:"hsibul"},
// // {id:2,name:'mijan'},
// // {id:3,name:'mahdi'}
// // ]
// // const reducer=(reducerState,action)=>{
// //   switch (action.type) {
// //     case "addname":
// //       return{...reducerState,data:[...reducerState.data,action.payload]};
// //       case "rem":
// //         return{...reducerState,data:action.payload}
// //       default:
// //         return reducerState;
// //   }

// // }

// // function App() {

// //   const [state,dispatch]=useReducer(reducer,{
// //     data: name,

// //   })

// //   const [indata,setindata]=useState('');
// //   const hndlsbmt=(e)=>{
// //     e.preventDefault();
// //     const newName = indata.trim();
// //     const nameexits= state.data.some((itm)=>itm.name===newName);
// //     if(nameexits){
// //       alert('this name is also added')
// //     } else{ const val = {id:Date().toString(),name:indata}
// //     dispatch({type:"addname",payload:val})
// //     setindata('')
// //  }

// //   }
// //   const rem=(id)=>{
// //     const remm = state.data.filter((itm)=>(itm.id!== id))
// //     dispatch({type:"rem", payload:remm})
// //   }

// //   return (
// //     <div>
// //       <h1>Hello</h1>
     
// //       <form onSubmit={hndlsbmt} >
// //         <input required
// //         value={indata}
// //         onChange={(e)=>{
// //           setindata(e.target.value)
// //         }}
// //         />
// //         <button type='submit'>Add</button>
// //       </form>
// //        {state.data.map((itm,key)=>(
// //         <div key={key}><h3>{itm.name}</h3><button onClick={()=>{rem(itm.id)}} >remove</button></div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default App

// // import React, { useReducer, useState } from 'react';

// // const resfun = (state, action) => {
// //   switch (action.type) {
// //     case 'plus':
// //       return { ...state, count: state.count + 1 };
// //     case 'minus':
// //       return { ...state, count: state.count - 1 };
// //     case 'addname':
// //       return {
// //         ...state,
// //         data: [...state.data, { id: Date().toString(), name: action.payload }],
// //       };
// //       case "update":
// //         return { ...state, data: action.payload };
// //     default:
// //       return state;
// //   }
// // };

// // const bdata = [
// //   { id: 1, name: 'hsib' },
// //   { id: 2, name: 'hsib2' },
// //   { id: 3, name: 'hsib3' },
// //   { id: 4, name: 'hsib4' },
// // ];

// // function App() {
// //   const [ount, dispatch] = useReducer(resfun, {
// //     count: 0,
// //     data: bdata,
// //   });

// //   const plus = () => {
// //     dispatch({ type: 'plus' });
// //   };

// //   const minuses = () => {
// //     dispatch({ type: 'minus' });
// //   };

// //   const hndlsbmt = (e) => {
// //     e.preventDefault(); // Prevent the default form submission behavior

// //     const newName = inp.trim(); // Trim leading and trailing whitespaces
  
// //     if (newName) {
// //       dispatch({ type: 'addname', payload: newName });
// //       setinp('');
// //     }
// //   };

// //   const [inp, setinp] = useState('');
// //   const remv =(id)=>{
// //     const a = window.confirm('are you sure? remove this item');
// //     if(a){
// //     const update = ount.data.filter((it)=>it.id !== id);
// //     dispatch({type:"update", payload:update})
// // }
// //   }

// //   return (
// //     <div>
// //       <h2>{ount.count}</h2>
// //       <button onClick={plus}>Increase</button>
// //       <button onClick={minuses}>Decrease</button>
// //       {ount.data.map((itm, key) => (
// //        <div key={key}><h1 key={key}>{itm.name}</h1>
// //         <button onClick={()=>remv(itm.id)} >remove</button></div>
// //       ))}
// //       <form onSubmit={hndlsbmt}>
// //         <input
// //           onChange={(e) => {
// //             setinp(e.target.value);
// //           }}
// //           value={inp}
// //           placeholder="Input your data"
// //         />
// //         <button type="submit">Add</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default App;

// //   import React, { useReducer, useState } from 'react';

// // const resfun = (state, action) => {
// //   switch (action.type) {
// //     case 'plus':
// //       return { ...state, count: state.count + 1 };
// //     case 'minus':
// //       return { ...state, count: state.count - 1 };
// //     case 'addname':
// //       return {
// //         ...state,
// //         data: [...state.data, { id: Date().toString(), name: action.payload }],
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // const bdata = [
// //   { id: 1, name: 'hsib' },
// //   { id: 2, name: 'hsib2' },
// //   { id: 3, name: 'hsib3' },
// //   { id: 4, name: 'hsib4' },
// // ];

// // function App() {
// //   const [ount, dispatch] = useReducer(resfun, {
// //     count: 0,
// //     data: bdata,
// //   });

// //   const plus = () => {
// //     dispatch({ type: 'plus' });
// //   };

// //   const minuses = () => {
// //     dispatch({ type: 'minus' });
// //   };

// //   const hndlsbmt = () => {
// //     dispatch({ type: 'addname', payload: inp });
// //     setinp(''); // Clear input after submission
// //   };

// //   const [inp, setinp] = useState('');

// //   return (
// //     <div>
// //       <h2>{ount.count}</h2>
// //       <button onClick={plus}>Increase</button>
// //       <button onClick={minuses}>Decrease</button>
// //       {ount.data.map((itm, key) => (
// //         <h1 key={key}>{itm.name}</h1>
// //       ))}
// //       <form onSubmit={hndlsbmt}>
// //         <input
// //           onChange={(e) => {
// //             setinp(e.target.value);
// //           }}
// //           value={inp}
// //           placeholder="Input your data"
// //         />
// //         <button type="submit">Add</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default App;
