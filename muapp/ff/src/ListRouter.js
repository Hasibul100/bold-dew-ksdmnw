import React from 'react';
import {  NavLink } from 'react-router-dom';
import'./App.css'

function ListRouter() {
  return (
    <nav className='lisdiv'>
        <NavLink className='NavLink' to="/About">About</NavLink>
        <NavLink className='NavLink' to="/Contact">Contact</NavLink>
        <NavLink className='NavLink' to="/Home">Home</NavLink>
        <NavLink className='NavLink' to="/blogs">Blogs</NavLink>
  </nav>
  )
}

export default ListRouter