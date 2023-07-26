import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';


function Nav() {
    const [showNavMenu, setShowNavMenu] = useState(false)

    const toggleNavItems = () => {
        setShowNavMenu(!showNavMenu);
    }

    return (
        <nav className="navbar">
            <div className="logo-navbar">
                <Link to="/"><img src={logo} alt="Logo Misiotrónica" /></Link>
            </div>
            <button className="menu-icon" onClick={toggleNavItems}>
                <FaBars />
            </button>
            <div className={showNavMenu ? "menu expanded" : "menu"}>
                <ul>
                    <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                    <li><Link to="/ventas">Ventas</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>    
        </nav>
    );
};

export default Nav;
