import React from 'react'
import '../styles/Header.css';

const Header = () => {
    return (
    <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Book a Cage</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </nav>
    </header>
    );
};


export default Header;