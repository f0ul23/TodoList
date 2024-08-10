import {React, useState, createContext} from 'react';
// import { supabase } from './createClient1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav'
import PrivateCom from './components/PrivateCom'
import Login from './components/Login'
import Signup from './components/Signup';
import Todo from './components/Todo';
import Undone from './components/Undone';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('dark');

  // dark/light mode
  const toggleTheme = () =>{
    setTheme((curr)=>(curr === 'dark'? 'light': 'dark'));
  };

  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <BrowserRouter>
        <Nav/>
        <label><b>{theme === 'light'? "Light mode":"Dark Mode"}</b></label>
        <ReactSwitch className='switch'onChange={toggleTheme} checked={theme === 'dark'}/>
        <Routes>
          <Route element={<PrivateCom/>}>
          <Route path='/todo' element={<Todo></Todo>}/>
          <Route path='/pending' element={<Undone/>}></Route>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
