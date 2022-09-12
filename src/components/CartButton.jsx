import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/carrinho.svg';

import '../styles/CartButton.css';

function CartButton() {
  return (
    <div className="cart-button">
      <Link to="/shopcart" data-testid="shopping-cart-button">
        <img src={CartIcon} alt="Carrinho de Compras" />
        <div className="cart-quantity">
          5
        </div>
      </Link>
    </div>
  );
}

export default CartButton;
