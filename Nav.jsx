import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Todo from './Todo';

export default function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = ()=>{
    console.log('running');
    localStorage.clear('user');
    navigate('/signup');
  }
  return (
    <div>
      <ul className='nav-ul'>
        <li><b><Link to="/todo">TodoList</Link></b></li>
        {auth?<li><b><Link onClick={logout} to="/signUp">LogOut</Link></b></li>:
        <>
        <li><b><Link to="/signup">Sign Up</Link></b></li>
        <li><b><Link to="/login">Log In</Link></b></li>
        </>
        } 
      </ul>
    </div>
  )
}
