import React, { useEffect, createContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GrTask } from "react-icons/gr";

export default function Nav() {

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = ()=>{
    console.log('running');
    localStorage.clear('user');
    navigate('/signup');
  }

  return (
        <ul className='nav-ul'>
          <GrTask id='stay'></GrTask>
          <li className='home1'><b>TodoList</b></li>
          <li><b><Link to="/todo">Home</Link></b></li>
          <li><b><Link to="/pending">Pending</Link></b></li>
          {auth?<li><b><Link onClick={logout} to="/signUp" className='loginside'>LogOut</Link></b></li>:
          <>
          <li><b><Link to="/signup">Sign Up</Link></b></li>
          <li><b><Link to="/login">Log In</Link></b></li>
          </>
          } 
        </ul>
  )
}
