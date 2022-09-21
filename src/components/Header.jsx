import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { setProducts } from '../redux/features/products';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CartButton from './CartButton';

import Logo from '../assets/logo.svg';

import '../styles/Header.css';

function Header() {
  const [search, setSearch] = useState('');
  const [slider, setSlider] = useState(true);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function handleSubmit(e) {
    e.preventDefault();
    getProductsFromCategoryAndQuery('', search).then((res) => {
      dispatch(setProducts({ lista: res.results }));
      setSearch('');
    });
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <form className="search-wrapper" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite a sua Busca"
              data-testid="query-input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch />
          </form>
          <Link to="/">
            <div className="header-logo">
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <CartButton onClick={() => setSlider(!slider)} />
        </div>
      </header>
      {slider && (
        <div className="slider">
          {cart.length === 0 ? (
            <div className="message-container">
              <h1>Seu Carrinho Esta Vazio</h1>
            </div>
          ) : (
            <h1>Carrinho </h1>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
