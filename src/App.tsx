import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Photos } from './pages/Photos';

function App() {
  return (
    <div>
      <Header />
      {/* <div className='container'>
        <h1>Home Page</h1> */}
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
