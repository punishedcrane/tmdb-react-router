
import React from 'react';
import MovieList from './components/MovieList';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="container">
      
      {/* <Navbar/>
      <About/>
      <MovieList /> */}

    
       <div className='App'>
        <Navbar/>
        
        <Routes>
          <Route path ="/" element={<MovieList/>}></Route>
          <Route path="about" element={<About/>}></Route>
        </Routes>
       </div>
        
    </div>
  );
}

export default App;