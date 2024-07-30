import {React, useState, useEffect} from 'react';
// import { supabase } from './createClient1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav'
import PrivateCom from './components/PrivateCom'
import Login from './components/Login'
import Signup from './components/Signup';
import Todo from './components/Todo';


const App = () => {

  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateCom/>}>
        {/* <Route path='/add' element={<h1>Add product</h1>}/>
        <Route path='/update' element={<h1>Update Product</h1>}/>
        <Route path='/logout' element={<h1>LogOut</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/> */}
        <Route path='/todo' element={<Todo></Todo>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
