import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShoppingCartButton from '../components/CartButton';

import { getProductById } from '../services/api';

import { addToCart } from '../services/localStorage';

class ProductDetails extends Component {
  state = {
    product: {
      title: '',
      thumbnail: '',
      price: 0,
    },
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    getProductById(id)
      .then(({ title, price, thumbnail, ...rest }) => {
        this.setState({
          product: {
            title,
            price,
            thumbnail,
            ...rest,
          }
        });
      });
  }

  render() {
    const { product: { price, id, title, thumbnail, quantity, ...rest } } = this.state;
    return (
      <div>
        <div>
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={thumbnail} alt={title} data-testid="product-detail-image" />
          <p data-testid="product-detail-price">{price}</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={() => addToCart({ id, title, price, quantity, ...rest })}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default withRouter(ProductDetails);
