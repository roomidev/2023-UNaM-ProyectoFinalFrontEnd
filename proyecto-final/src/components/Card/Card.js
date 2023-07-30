import React, { useState } from 'react';
import './Card.css';

function Card(props) {
    const [contador, setContador] = useState(0);

    const restar = () => {
        setContador(Math.max(contador - 1, 0))
    };

    const sumar = () => {
        setContador(contador + 1)
    };

    return (
        <div className="card">
            <div className="imgcontainer">
                <img src={props.image} alt={props.description}/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
            <div>
                <button className="cantidad" onClick={restar}>-</button>
                <span><b>{contador}</b></span>
                <button className="cantidad" onClick={sumar}>+</button>
            </div>
            <button className="btn-carrito">Agregar al carrito</button>
        </div>
    )
}

export default Card