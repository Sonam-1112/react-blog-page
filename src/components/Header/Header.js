import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <nav className="headerMenu">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <div className="social-links">
                socal media links
            </div>
        </div>
    )
}

export default Header
