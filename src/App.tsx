import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddFavorite from './pages/AddFavorite';

function App() {
  return (
    <div className="app-container">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-fav' element={<AddFavorite/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
