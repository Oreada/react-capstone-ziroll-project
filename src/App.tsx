import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Favorite } from './pages/Favorite';
import { Photos } from './pages/Photos';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
