import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="redes">
                <a href="https://www.whatsapp.com/" className="btn wp" target="_blank" rel="noreferrer noopener"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/" className="btn ig" target="_blank" rel="noreferrer noopener"><FaInstagram /></a>
                <a href="https://www.facebook.com/" className="btn fb" target="_blank" rel="noreferrer noopener"><FaFacebookSquare /></a>
            </div>
            <h6>Copyright&copy; 2023 Misiotrónica - Todos los derechos reservados</h6>
        </footer>
    )
}

export default Footer