import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div className='header-title'>
                <h6>Knowledge Valley</h6>
            </div>
            <div className='header-link'>
                <a href="/Programming">Programming</a>
                <a href="/inventory">Inventory</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;