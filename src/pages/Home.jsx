import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import Aside from '../components/Aside';

export default function Home() {
  const lista = useSelector((state) => state.products.lista);

  return (
    <main>
      {lista.length === 0 && (
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      )}
      {lista.length === 0 ? <h1>Nenhum produto foi encontrado</h1> : (
        lista.map((item) => (
          <Product
            key={ item.id }
            { ...item }
          />
        )))}
      <Aside />
    </main>
  );
}
