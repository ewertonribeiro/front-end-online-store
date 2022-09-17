import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import Aside from '../components/Aside';

import '../styles/Home.css';

export default function Home() {
  const lista = useSelector((state) => state.products.lista);

  return (
    <section className="home-page">
      <Aside />
      {lista.length === 0 ? (
        <div className="message-container">
          <h1 className="home-message">Nenhum produto foi encontrado</h1>
          <h2 data-testid="home-message" className="home-message-sub">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </div>
      ) : (
        <main className="home-page-main">
          <section className="products-container">
            {
              lista.map((item) => <Product key={item.id} {...item} />)
            }
          </section>
        </main>
      )
      }
    </section>
  );
}
