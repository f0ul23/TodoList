import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/todo')
      }
    });

    const collectData = async ()=>{
        console.log(name,email);
        let result = await fetch('http://localhost:5000/signup',{
          method: "post",
          body :JSON.stringify({name, email, password}),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        result = await result.json();
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/todo');
    }


  return (
    <>
    <div className='Sign'>
      <h1>Register</h1>
      <input className="inputbox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
      <input className="inputbox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter E-mail'/>
      <input className="inputbox" type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
    </div>
    <button className="button" type='submit' onClick={collectData}><b>Sign Up</b></button>
    </>
  )
}
