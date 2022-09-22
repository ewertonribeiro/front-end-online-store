/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
import React, { HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import CartIcon from '../assets/carrinho.svg';

import type { RootState } from '../redux/store';

import '../styles/CartButton.css';

interface Props extends HTMLAttributes<HTMLDivElement> {}

function CartButton({ ...rest }: Props) {
  const cart = useSelector((state: RootState) => state.cart.cart);
  // eslint-disable-next-line no-param-reassign
  const cartTotal = cart.reduce((acc, cur) => (acc += cur.quantity), 0);

  return (
    <div className="cart-button" {...rest}>
      <img src={CartIcon} alt="Carrinho de Compras" />
      <div className="cart-quantity">{cartTotal}</div>
    </div>
  );
}

export default CartButton;
