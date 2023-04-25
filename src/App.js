import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductDetail from './ProductDetail';
import Home from './Home';
function App() {
  return (
    <div>

      <ul>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home></Home>} exact> </Route>
        <Route path="/1" element={<ProductDetail></ProductDetail>} exact> </Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
