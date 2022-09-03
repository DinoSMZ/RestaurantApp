import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 link-dark">© 2022 Matilde's</p>
    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>dinoaldair@hotmail.com
    </a>
    <ul className="nav col-md-4 justify-content-end">
    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/" >HomePage</NavLink>
    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/about">AboutPage</NavLink>
    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/products">productos</NavLink>
    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Reservas">Reservas</NavLink>
      
    </ul>
  </footer>
</div>

  )
}

export default Footer