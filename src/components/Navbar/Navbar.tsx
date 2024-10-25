import React from 'react';
import './Navbar.scss';

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">MyLogo</a>
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;