import React,{useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchValue,setSearchValue] = useState("");
    
    const submitSearch = (e) =>{
        e.preventDefault();
        alert(searchValue);
    }

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/post/1">Posts</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" placeholder="Search..." value={searchValue} onChange={(e)=>{
                        setSearchValue(e.target.value)
                    }}/>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Navbar
