import React from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import img from '../../assets/img';
import './Store.css';
import { FaSearch } from 'react-icons/fa';

function Store(props) {
    return (
        <div>
            <Nav />
            <div className="search">
                <input type="search" placeholder=" Buscar artículo.."></input>
                <button><FaSearch /></button>
            </div>
            <section className="articulos">
                <Card
                    image={img.art1}
                    title="Cable de red"
                    description="Cable de red de 5mts"
                    precio="$ 1500"
                />
                <Card
                    image={img.art2}
                    title="Adaptador"
                    description="Adaptador de enchufe"
                    precio="$ 489"
                />
                <Card
                    image={img.art3}
                    title="Batería de gel"
                    description="Batería de gel 12V 1,3AH"
                    precio="$ 6750"
                />
                <Card
                    image={img.art4}
                    title="Fuente"
                    description="Fuente switching 5V 2A"
                    precio="$ 1890"
                />
                <Card
                    image={img.art5}
                    title="Multímetro"
                    description="Multímetro digital"
                    precio="$ 5680"
                />
                <Card
                    image={img.art6}
                    title="Pinza pela cables"
                    description="Pinza pela cables"
                    precio="$ 4500"
                />
                <Card
                    image={img.art7}
                    title="Protector de tensión"
                    description="Protector de electrónicos"
                    precio="$ 3900"
                />
                <Card
                    image={img.art8}
                    title="Soldador"
                    description="Soldador standard"
                    precio="$ 2300"
                />
                <Card
                    image={img.art9}
                    title="Zapatilla"
                    description="5 enchufes y 2,5mts"
                    precio="$ 5590"
                />
                <Card
                    image={img.art10}
                    title="Tira Led"
                    description="Tira led de 1mt"
                    precio="$ 2999"
                />
            </section>
        </div>
    );
}

export default Store;
