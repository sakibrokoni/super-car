import React from 'react';
import './Header.css'
// Import logo
import logo from './Header Images/11.jpg'
const Header = () => {
    return (
        <div className="header">
            <nav>
                <img  src={logo} alt="" />
               <a href="/Movie List">List of all Movies</a>
               <a href="/Inventory"> Inventory</a>
               <a href="/Others"> Others </a>
           </nav>
           <div className="top-header">
               <h1><span className="span">Cars Movie</span></h1>
                <h3>Your Favourite Characters </h3>
               <h2>Total Budget $300 million</h2>
           </div>
            
           
        </div>
    );
};

export default Header;