import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header-container'>
        <div>
        <Link to="/" style={{marginRight: '15px'}}>Home</Link>
        <Link to="/about" style={{marginRight: '15px'}}>About</Link>
        <Link to="/episodes">Episodes</Link>
        </div>
        <button className='theme-button'>Dark Mode</button>
    </header>
  )
}

export default Header