import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { addToCart } from '../services/localStorage';

export default class Product extends Component {
  handleClick = (obj) => {
    addToCart(obj);
  };

  render() {
    const { title, price, thumbnail, id, ...rest } = this.props;

    return (
      <div>
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <div data-testid="product">
            <p>{ title }</p>
            <p>{ price }</p>
            <img src={ thumbnail } alt={ title } />
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => this.handleClick({ title, price, thumbnail, id, ...rest }) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.number,
}.isRequired;
