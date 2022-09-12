import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/features/products';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CartButton from './CartButton';

function Header() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  function handleClick() {
    getProductsFromCategoryAndQuery('', search).then((res) => {
      dispatch(setProducts({ lista: res.results }));
      setSearch('');
    });
  }

  return (
    <header className="header">
      <h1>Header</h1>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Pesquisa:"
          data-testid="query-input"
          onChange={ (e) => setSearch(e.target.value) }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </div>
      <CartButton />
    </header>
  );
}

Header.propTypes = {
  handleSearchChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default Header;
