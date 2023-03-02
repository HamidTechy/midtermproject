import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Message from './pages/Message';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/message" element={<Message/>}></Route>
        <Route path="/post" element={<Post/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
