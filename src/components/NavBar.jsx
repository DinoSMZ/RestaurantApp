import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Mati.png'




const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light Nav ">
    <div className="container-fluid">
    <div>
     <img src={logo} className="logo" alt="/" />
    </div>
      <NavLink  className= {({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/"  >Principal</NavLink>
      <button className="navbar-toggler" type="button " data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/about">AboutPage</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/products">productos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Reservas">Reservas</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar