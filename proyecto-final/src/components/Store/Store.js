import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Card from "../Card/Card";
import articulos from "../../assets/articulos";
import Footer from '../Footer/Footer';
import { FaSearch } from "react-icons/fa";
import "./Store.css";

function Store() {
  const articulo = articulos;

  //Funcionalidad de la barra de busqueda
  const [filterData, SetFilterData] = useState(articulo);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = articulo.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    SetFilterData(newFilter);
  };

  return (
    <div>
      <Nav />
      <div className="search">
        <input
          type="search"
          placeholder=" Buscar artículo.."
          onChange={handleFilter}
        ></input>
        <div className="iconsearch">
          <FaSearch />
        </div>
      </div>
      <section className="articulos">
        {filterData.map((art) => {
          return (
            <div>
              <Card
                image={art.image}
                title={art.title}
                description={art.description}
                price={art.price}
                quantity={art.quantity}
              />
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
}

export default Store;
