import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import Productlist from './pages/Productlist';
import Sidebar from './components/Sidebar';

function App() {
  return (

    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Productlist" element={<Productlist />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>


  )
}

export default App
