import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import Auth from './components/Auth/Auth';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
