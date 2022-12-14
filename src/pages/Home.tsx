import React from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
import Product from '../components/Product';
import Aside from '../components/Aside';

import '../styles/Home.css';
import '../styles/query/home-page-mediaquery.css';

export default function Home() {
  const lista = useAppSelector((state) => state.products.lista);

  const cart = useAppSelector((state) => state.cart.cart);

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
            {lista.map((item) => {
              const itemInCart = cart.some((e) => e.id === item.id);

              return <Product key={item.id} {...item} cart={itemInCart} />;
            })}
          </section>
        </main>
      )}
    </section>
  );
}
