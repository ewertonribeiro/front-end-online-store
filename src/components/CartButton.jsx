import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/carrinho.svg';


import '../styles/CartButton.css';

function CartButton() {
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = cart.reduce((acc, cur) => acc += cur.quantity, 0)
  return (
    <div className="cart-button">
      <Link to="/shopcart" data-testid="shopping-cart-button">
        <img src={CartIcon} alt="Carrinho de Compras" />
        <div className="cart-quantity">
          {cartTotal}
        </div>
      </Link>
    </div>
  );
}

export default CartButton;
