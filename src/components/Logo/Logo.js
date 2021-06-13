import React from 'react'
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">Sonam Gupta</Link>
        </div>
    )
}

export default Logo
