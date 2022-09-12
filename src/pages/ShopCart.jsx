import React, { Component } from 'react';

import {
  addToCart,
  getAllFromCart,
  subToCart,
  removeToCart,
} from '../services/localStorage';

export default class ShopCart extends Component {
  state = {
    carrinho: [],
  };

  componentDidMount() {
    const itens = getAllFromCart();
    this.setState({ carrinho: itens });
  }

  randomClick(e, operador) {
    if (operador === '+') {
      addToCart(e);
      const itens = getAllFromCart();
      this.setState({ carrinho: itens });
    } else {
      subToCart(e);
      const itens = getAllFromCart();
      this.setState({ carrinho: itens });
    }
  }

  removeItem(e) {
    removeToCart(e);
    const itens = getAllFromCart();
    this.setState({ carrinho: itens });
  }

  render() {
    const { carrinho } = this.state;
    return (
      <div>
        <h1>Carrinho de compras</h1>
        {carrinho.length === 0 ? (
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        ) : (
          carrinho.map((e) => (
            <div key={ e.id }>
              <p data-testid="shopping-cart-product-name">{e.title}</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.randomClick(e, '+') }
              >
                +
              </button>
              <p data-testid="shopping-cart-product-quantity">{e.quantity}</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.randomClick(e, '-') }
              >
                -
              </button>
              <button
                type="button"
                data-testid="remove-product"
                onClick={ () => this.removeItem(e) }
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
}
