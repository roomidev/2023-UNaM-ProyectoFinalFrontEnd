import React from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import articulos from '../../assets/articulos';
import { FaSearch } from 'react-icons/fa'
import './Store.css';

function Store() {
    const articulo = articulos;

    return (
        <div>
            <Nav />
            <div className="search">
                <input type="search" placeholder=" Buscar artículo.."></input>
                <div className="iconsearch"><FaSearch /></div>
            </div>
            <section className="articulos">
            {articulo.map((art) => {
                return (
                    <div>
                        <Card 
                        image={art.image}
                        title={art.title}
                        description={art.description}
                        precio={art.price}
                        />
                    </div>
                )
            })}
            </section>
        </div>
    );
}

export default Store;