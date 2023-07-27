import React from 'react';
import error from '../../assets/error.png';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="notfound">
            <img src={error} alt="Error 404 - Page Not Found"/>
            <h3>Volver a <Link to="/">Inicio</Link></h3>
        </div>
    )
}

export default NotFound;