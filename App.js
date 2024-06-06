import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Activate from './Activate';
import Home from './home';
import  Login  from './Login';
import Layout from './Layout';

export default function App() 
{
  return (
    <Router>
      <Routes>
           <Route path="/" element={<Layout />} />
          <Route path='/Register' element={<Register />} />  
         <Route path='/Activate/:token' element={<Activate />} /> 
         <Route path='./Login' element={<Login />} />
         <Route path='/home' element={<Home />} />
                  
      </Routes>
    </Router>
  );
}

