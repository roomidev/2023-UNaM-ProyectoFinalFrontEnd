import React from 'react';
import './Home.css';
import logogrande from '../../assets/logogrande-transp.png';
import Nav from '../Nav/Nav';
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from 'react-icons/fa'

function Home() {
    return (
        <div>
            <Nav />
            <div className="home">
                <h1>¡Bienvenid@ a nuestra tienda de artículos electrónicos!</h1>
                <img src={logogrande} alt="Logo Misitrónica" />
                <h2>Todo lo que estas buscando en un sólo lugar</h2>
            </div>
            <div className="redsoc">
                <a href="https://www.whatsapp.com/" className="btn wp" target="_blank" rel="noreferrer noopener"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/" className="btn ig" target="_blank" rel="noreferrer noopener"><FaInstagram /></a>
                <a href="https://www.facebook.com/" className="btn fb" target="_blank" rel="noreferrer noopener"><FaFacebookSquare /></a>
            </div>
        </div>
    )
}

export default Home;