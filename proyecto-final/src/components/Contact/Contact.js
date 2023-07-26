import React from 'react';
import './Contact.css';
import Nav from '../Nav/Nav';

function Contact() {
    return (
        <div className="contacto">
            <Nav />
            <form method="POST">
                <label for="nombre">Nombre:</label>
                <input id="nombre" type="text" required/>
                <label for="email">E-mail:</label>
                <input id="email" type="email" required/>
                <label>Mensaje:</label>
                <textarea rows="10" required></textarea>
                <button type="submit" className="enviar">Enviar</button>
            </form>
        </div>
    )
}

export default Contact
