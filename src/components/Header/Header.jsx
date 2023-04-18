import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header-container'>
        <div>
        <a href="/" style={{marginRight: '15px'}}>Home</a>
        <a href="/" style={{marginRight: '15px'}}>Home</a>
        <a href="/">Home</a>
        </div>
        <button className='theme-button'>Dark Mode</button>
    </header>
  )
}

export default Header