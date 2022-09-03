import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"

import Homepage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NotFound from '../pages/NotFound';
import ProductsPage from '../pages/ProductsPage';
import NavBar from '../components/NavBar';
import ReservasPage from '../pages/ReservasPage';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <Router>
     <NavBar/>
       <Routes> 
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/Reservas" element={<ReservasPage/>}/>
          <Route path="*" element={<NotFound/>}/>
       </Routes> 
       <Footer/>
    </Router>
  )
}

export default AppRouter