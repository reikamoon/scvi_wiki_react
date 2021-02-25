import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
        <div className="Header">
      <header>
        <h1>SOULCALIBUR VI CHARACTER COMPENDIUM</h1>
        <div className="Header-Subtitle">Welcome Back to the Stage of History</div>

        <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        exact
        to="/">List</NavLink>

      </header>
    </div>

  )
}

export default Header