import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Authors from './pages/Authors';
import Category from './pages/Category'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/authors" element={<Authors/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
