import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"

import Homepage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NotFound from '../pages/NotFound';
import ProductsPage from '../pages/ProductsPage';
import NavBar from '../components/NavBar';


const AppRouter = () => {
  return (
    <Router>
     <NavBar/>
       <Routes> 
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="*" element={<NotFound/>}/>
       </Routes> 
    </Router>
  )
}

export default AppRouter