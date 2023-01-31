import React from 'react';
import './app.css';
import './font-kitab.css';
import Home from './Pages/Home';
import OpenKitab from './Pages/OpenKitab';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import {BrowserRouter, Route, Routes } from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="hadits" element={<OpenKitab />} />
          <Route path="about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
