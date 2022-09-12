import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/features/products';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CartButton from './CartButton';

import Logo from '../assets/logo.svg';
import Lupa from '../assets/lupa.svg';

import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    getProductsFromCategoryAndQuery('', search).then((res) => {
      dispatch(setProducts({ lista: res.results }));
      setSearch('');
    });
  }

  return (
    <header className="header">
      <div className="header-container">
        <form className="search-wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite a sua Busca"
            data-testid="query-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            data-testid="query-button"
          >
            <img src={Lupa} alt="Search" />
          </button>
        </form>
        <Link to="/">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <CartButton />
      </div>
    </header>
  );
}

Header.propTypes = {
  handleSearchChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default Header;
