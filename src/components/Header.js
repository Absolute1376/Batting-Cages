import React from 'react'
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/booking">Book a Cage</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/about-us">About Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;