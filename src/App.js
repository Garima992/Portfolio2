import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Pages/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';


import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
        <NavBar/> 
      
        <div className='container page-center'>
          <br/>
         <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/skills' element={<Skills />} /> 
          <Route  path='/portfolio' element={<Portfolio />} />
          <Route  path='/contact' element={<Contact />} />
          </Routes>
        </div>
    
    </>
  );
}

export default App;
