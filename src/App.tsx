import React from 'react';
import './App.css';
import FormRegister from './components/home/formRegister';
import Home from './components/home/home';
import PagePlayer from './components/users/player/pagePlayer';
import {Routes, Route, Outlet, Link }  from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="user" element={< PagePlayer />}/>

      </Route>  
      </Routes>
    </div>
  );
}

export default App;
